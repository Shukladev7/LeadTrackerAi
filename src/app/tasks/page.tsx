"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { format, isSameDay, parseISO, startOfDay } from "date-fns";
import { Edit, Link2, Trash2 } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { useUserRole } from "@/hooks/use-user-role";
import { getEmployees, getTasks, getTasksByAssignee, updateTask, deleteTask } from "@/lib/firestore-data-service";
import type { Task, Employee } from "@/lib/business-types";
import { getInitials } from "@/lib/auth-utils";
import { cn } from "@/lib/utils";
import { CreateTaskDialog } from "./create-task-dialog";
import { EditTaskDialog } from "./edit-task-dialog";

const TASK_STATUSES: Task["status"][] = ["Todo", "In Progress", "Review", "Done"];

const STATUS_LABELS: Record<Task["status"], string> = {
  Todo: "To Do",
  "In Progress": "In Progress",
  Review: "Review",
  Done: "Done",
  Cancelled: "Cancelled",
};

const STATUS_COLORS: Record<Task["status"], string> = {
  Todo: "bg-slate-100 text-slate-800 border-slate-200",
  "In Progress": "bg-blue-100 text-blue-800 border-blue-200",
  Review: "bg-amber-100 text-amber-800 border-amber-200",
  Done: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Cancelled: "bg-muted text-muted-foreground border-muted",
};

const PRIORITY_COLORS: Record<Task["priority"], string> = {
  Low: "bg-slate-100 text-slate-800 border-slate-200",
  Medium: "bg-blue-100 text-blue-800 border-blue-200",
  High: "bg-amber-100 text-amber-800 border-amber-200",
  Urgent: "bg-red-100 text-red-800 border-red-200",
};

function parseDate(value: string | Date | undefined): Date | null {
  if (!value) return null;
  if (value instanceof Date) return value;
  const d = new Date(value);
  return isNaN(d.getTime()) ? null : d;
}

export default function TasksPage() {
  const { employee, isAdmin, loading: roleLoading, error: roleError } = useUserRole();

  const searchParams = useSearchParams();
  const leadIdFromQuery = searchParams.get("leadId") || undefined;

  const [tasks, setTasks] = useState<Task[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loadingTasks, setLoadingTasks] = useState(true);
  const [loadingEmployees, setLoadingEmployees] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [activeTaskId, setActiveTaskId] = useState<string | null>(null);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const taskRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const loadEmployees = useCallback(async () => {
    try {
      setLoadingEmployees(true);
      const data = await getEmployees();
      setEmployees(data as Employee[]);
    } catch (e) {
      console.error("Failed to load employees", e);
    } finally {
      setLoadingEmployees(false);
    }
  }, []);

  const loadTasks = useCallback(async () => {
    if (roleLoading) return;
    if (!employee && !isAdmin) return;

    try {
      setLoadingTasks(true);
      setError(null);

      let data: Task[] = [];
      if (isAdmin) {
        data = await getTasks();
      } else if (employee?.id) {
        data = await getTasksByAssignee(employee.id);
      }

      setTasks(data || []);
    } catch (e) {
      console.error("Failed to load tasks", e);
      setError("Failed to load tasks");
    } finally {
      setLoadingTasks(false);
    }
  }, [employee, isAdmin, roleLoading]);

  useEffect(() => {
    loadEmployees();
  }, [loadEmployees]);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const tasksByDateKey = useMemo(() => {
    const map = new Map<string, Task[]>();
    for (const task of tasks) {
      const d = parseDate(task.dueDate as any);
      if (!d) continue;
      const key = startOfDay(d).toISOString();
      const list = map.get(key) || [];
      list.push(task);
      map.set(key, list);
    }
    return map;
  }, [tasks]);

  const calendarHighlightedDates = useMemo(() => {
    return Array.from(tasksByDateKey.keys()).map((key) => new Date(key));
  }, [tasksByDateKey]);

const tasksForSelectedDate = useMemo(() => {
  // 👉 When a date is selected → show only that date’s tasks
  if (selectedDate) {
    return tasks.filter((task) => {
      const d = parseDate(task.dueDate as any);
      return d ? isSameDay(d, selectedDate) : false;
    });
  }

  // 👉 When NO date is selected → show ALL tasks
  // Sort: tasks with reminder first, no-reminder last
  return [...tasks].sort((a, b) => {
    const da = parseDate(a.dueDate as any)?.getTime();
    const db = parseDate(b.dueDate as any)?.getTime();

    if (!da && !db) return 0;      // both no reminder
    if (!da) return 1;             // a goes after b
    if (!db) return -1;            // b goes after a

    return da - db;                // both have dates
  });
}, [selectedDate, tasks]);


  const kanbanColumns = useMemo(
    () =>
      TASK_STATUSES.map((status) => ({
        id: status,
        title: STATUS_LABELS[status],
      })),
    []
  );

  const tasksByStatus = useMemo(() => {
    const map: Record<string, Task[]> = {};
    for (const status of TASK_STATUSES) {
      map[status] = [];
    }
    for (const task of tasks) {
      if (!TASK_STATUSES.includes(task.status)) continue;
      map[task.status].push(task);
    }
    return map;
  }, [tasks]);

  const handleTaskClick = useCallback((taskId: string) => {
    setActiveTaskId(taskId);
    const el = taskRefs.current[taskId];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setTimeout(() => {
      setActiveTaskId((current) => (current === taskId ? null : current));
    }, 1500);
  }, []);

  const handleStatusChange = useCallback(
    async (taskId: string, newStatus: Task["status"]) => {
      setTasks((prev) =>
        prev.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t))
      );
      try {
        await updateTask(taskId, { status: newStatus });
      } catch (e) {
        console.error("Failed to update task status", e);
        setTasks((prev) => prev);
      }
    },
    []
  );

  const handleDeleteTask = useCallback(
    async (taskId: string) => {
      setTasks((prev) => prev.filter((t) => t.id !== taskId));
      try {
        await deleteTask(taskId);
      } catch (e) {
        console.error("Failed to delete task", e);
        await loadTasks();
      }
    },
    [loadTasks]
  );

  const handleDropOnColumn = useCallback(
    (status: Task["status"]) =>
      (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const taskId = event.dataTransfer.getData("text/plain");
        if (!taskId) return;
        const task = tasks.find((t) => t.id === taskId);
        if (!task || task.status === status) return;
        if (!TASK_STATUSES.includes(status)) return;
        handleStatusChange(taskId, status);
      },
    [handleStatusChange, tasks]
  );

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const renderReminderDate = (task: Task) => {
    const d = parseDate(task.dueDate as any);
    if (!d) return <span className="text-xs text-muted-foreground">No reminder</span>;
    return (
      <span className="text-xs text-muted-foreground">
        Reminder: {format(d, "dd MMM yyyy")}
      </span>
    );
  };

  const resolveAssignee = (assignedTo: string | undefined) => {
    if (!assignedTo) return null;
    return employees.find((e) => e.id === assignedTo) || null;
  };

  const canEditTask = (task: Task) => {
    if (isAdmin) return true;
    if (!employee) return false;
    return task.assignedTo === (employee.id as any);
  };

  if (loadingTasks || roleLoading) {
    return (
      <div className="py-10 text-center text-muted-foreground">
        Loading tasks...
      </div>
    );
  }

  if (error || roleError) {
    return (
      <div className="py-10 text-center text-muted-foreground">
        {error || roleError}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row gap-4">
        <Card className="md:w-1/3">
          <CardHeader>
            <CardTitle className="text-base">Task Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              modifiers={{
                hasTask: calendarHighlightedDates,
              }}
              modifiersClassNames={{
                hasTask: "bg-emerald-100 text-emerald-900", 
              }}
            />
          </CardContent>
        </Card>

        <Card className="flex-1 min-h-[260px]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-base">
              {selectedDate ? `Tasks on ${format(selectedDate, "dd MMM yyyy")}` : "Upcoming / Assigned Tasks"}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            {tasksForSelectedDate.length === 0 ? (
              <div className="h-40 flex items-center justify-center text-sm text-muted-foreground">
                No tasks for this selection.
              </div>
            ) : (
              <ScrollArea className="h-64">
                <div className="flex flex-col divide-y">
                  {tasksForSelectedDate.map((task) => {
                    const assignee = resolveAssignee(task.assignedTo as any);
                    const leadId = task.relatedTo?.type === 'lead' ? task.relatedTo.id : undefined;
                    return (
                      <button
                        key={task.id}
                        type="button"
                        onClick={() => task.id && handleTaskClick(task.id)}
                        className="w-full text-left px-2 py-2 hover:bg-muted/60 transition-colors flex flex-col gap-1"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-medium line-clamp-1">
                            {task.title}
                          </span>
                          <Badge
                            variant="outline"
                            className={cn(
                              "text-[10px] font-semibold px-2 py-0.5",
                              STATUS_COLORS[task.status]
                            )}
                          >
                            {STATUS_LABELS[task.status]}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            {assignee && (
                              <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-muted text-[10px] font-semibold">
                                  {getInitials(assignee.name)}
                                </span>
                                <span className="truncate max-w-[120px]">{assignee.name}</span>
                              </span>
                            )}
                            {leadId && (
                              <Link
                                href={`/leads/${leadId}`}
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full border border-emerald-200 text-emerald-800 bg-emerald-50"
                              >
                                <Link2 className="h-3 w-3" />
                                <span>Lead</span>
                              </Link>
                            )}
                          </div>
                          {renderReminderDate(task)}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </ScrollArea>
            )}
          </CardContent>
        </Card>
      </div>

      <Separator />

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Task Planner</h2>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-muted text-[9px] font-semibold">
                  {employee ? getInitials(employee.name) : ""}
                </span>
                <span>Your tasks</span>
              </span>
              {isAdmin && <span className="text-[11px]">(Admin: viewing all tasks)</span>}
            </div>
            <CreateTaskDialog
              employees={employees}
              currentEmployee={employee || null}
              isAdmin={isAdmin}
              onTaskCreated={loadTasks}
              defaultLeadId={leadIdFromQuery}
              autoOpen={!!leadIdFromQuery}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {kanbanColumns.map((column) => (
            <Card
              key={column.id}
              className="flex flex-col min-h-[260px]"
              onDragOver={handleDragOver}
              onDrop={handleDropOnColumn(column.id)}
            >
              <CardHeader className="py-3 flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-sm flex items-center gap-2">
                  {column.title}
                  <span className="inline-flex h-5 min-w-[1.5rem] items-center justify-center rounded-full bg-muted text-[11px]">
                    {tasksByStatus[column.id]?.length ?? 0}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 flex-1 flex flex-col">
                <ScrollArea className="h-[360px] pr-2">
                  <div className="space-y-2 pb-2">
                    {(tasksByStatus[column.id] || []).map((task) => {
                      const assignee = resolveAssignee(task.assignedTo as any);
                      const leadId = task.relatedTo?.type === 'lead' ? task.relatedTo.id : undefined;
                      const isActive = activeTaskId && task.id === activeTaskId;
                      return (
                        <div
                          key={task.id}
                          ref={(el) => {
                            if (task.id) {
                              taskRefs.current[task.id] = el;
                            }
                          }}
                          className={cn(
                            "rounded-md border bg-card px-2 py-2 text-xs cursor-grab active:cursor-grabbing shadow-sm transition-transform",
                            isActive && "ring-2 ring-emerald-500 ring-offset-2"
                          )}
                          draggable
                          onDragStart={(event) => {
                            if (task.id) {
                              event.dataTransfer.setData("text/plain", task.id);
                            }
                          }}
                          onClick={() => task.id && handleTaskClick(task.id)}
                        >
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <div className="flex-1">
                              <div className="font-medium text-[11px] leading-snug line-clamp-2">
                                {task.title}
                              </div>
                              {task.description && (
                                <div className="mt-0.5 text-[10px] text-muted-foreground line-clamp-2">
                                  {task.description}
                                </div>
                              )}
                            </div>
                            <div className="flex flex-col items-end gap-1">
                              {assignee && (
                                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-[10px] font-semibold">
                                  {getInitials(assignee.name)}
                                </span>
                              )}
                              {canEditTask(task) && (
                                <div className="flex items-center gap-1">
                                  <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6"
                                    onClick={(event) => {
                                      event.stopPropagation();
                                      setEditingTask(task);
                                    }}
                                  >
                                    <Edit className="h-3 w-3" />
                                  </Button>
                                  <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6 text-destructive"
                                    onClick={async (event) => {
                                      event.stopPropagation();
                                      if (!task.id) return;
                                      const confirmed = window.confirm(
                                        `Delete task "${task.title}"? This cannot be undone.`
                                      );
                                      if (!confirmed) return;
                                      await handleDeleteTask(task.id);
                                    }}
                                  >
                                    <Trash2 className="h-3 w-3" />
                                  </Button>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center justify-between gap-1 mt-1">
                            <div className="flex items-center gap-1 flex-wrap">
                              <Badge
                                variant="outline"
                                className={cn(
                                  "text-[9px] px-1.5 py-0",
                                  PRIORITY_COLORS[task.priority]
                                )}
                              >
                                {task.priority}
                              </Badge>
                              {leadId && (
                                <Link
                                  href={`/leads/${leadId}`}
                                  onClick={(e) => e.stopPropagation()}
                                  className="inline-flex items-center gap-1 text-[9px] px-1.5 py-0 rounded-full border border-emerald-200 text-emerald-800 bg-emerald-50"
                                >
                                  <Link2 className="h-3 w-3" />
                                  <span>Lead</span>
                                </Link>
                              )}
                            </div>
                            <div className="text-[9px] text-muted-foreground">
                              {parseDate(task.dueDate as any)
                                ? format(parseDate(task.dueDate as any) as Date, "dd MMM")
                                : "No reminder"}
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {tasksByStatus[column.id]?.length === 0 && (
                      <div className="h-24 flex items-center justify-center text-[11px] text-muted-foreground border border-dashed rounded-md">
                        Drag tasks here
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {editingTask && (
        <EditTaskDialog
          open={!!editingTask}
          onOpenChange={(open) => {
            if (!open) {
              setEditingTask(null);
            }
          }}
          task={editingTask}
          employees={employees}
          currentEmployee={employee || null}
          isAdmin={isAdmin}
          onTaskUpdated={loadTasks}
        />
      )}
    </div>
  );
}
