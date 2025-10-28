import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { PlusCircle, Trash2, FileText, Building2, Box } from "lucide-react";
  import { ALL_STATUSES } from "@/lib/types";
  import { StatusBadge } from "@/components/status-badge";
  import { getLeadSources, getEmployeeRoles, getDepartments, getProductModels } from "@/lib/data";
  import { addLeadSourceAction, deleteLeadSourceAction, addProductModelAction, deleteProductModelAction, addEmployeeRoleAction, deleteEmployeeRoleAction, addDepartmentAction, deleteDepartmentAction } from "@/lib/actions";
  import { revalidatePath } from "next/cache";
  import Link from "next/link";
import { Badge } from "@/components/ui/badge";
  
  export default async function SetupPage() {
    const [leadSources, employeeRoles, departments, productModels] = await Promise.all([
        getLeadSources(),
        getEmployeeRoles(),
        getDepartments(),
        getProductModels(),
    ]);
  
    return (
      <>
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Setup</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
                <CardHeader>
                    <CardTitle>Lead Statuses</CardTitle>
                    <CardDescription>Manage the statuses that can be assigned to a lead.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        {ALL_STATUSES.map((status) => (
                            <div key={status} className="flex items-center justify-between p-2 rounded-md bg-secondary">
                                <StatusBadge status={status} />
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="border-t pt-6">
                    <form className="flex w-full items-center gap-2">
                        <Input placeholder="Add new status" />
                        <Button type="submit">
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Add Status
                        </Button>
                    </form>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Lead Sources</CardTitle>
                    <CardDescription>Manage the sources where your leads come from.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        {leadSources.map((source) => (
                            <div key={source.id} className="flex items-center justify-between p-2 rounded-md bg-secondary">
                                <span className="text-sm font-medium">{source.name}</span>
                                <form action={async () => {
                                    "use server";
                                    await deleteLeadSourceAction(source.id);
                                    revalidatePath('/setup');
                                }}>
                                    <Button type="submit" variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </form>
                            </div>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="border-t pt-6">
                    <form action={addLeadSourceAction} className="flex w-full flex-col sm:flex-row items-center gap-2">
                        <Input name="name" placeholder="Add new source" />
                        <Button type="submit" className="w-full sm:w-auto">
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Add Source
                        </Button>
                    </form>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Quotation Templates</CardTitle>
                    <CardDescription>Create and manage templates for your quotations.</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center h-40">
                    <Button asChild>
                        <Link href="/setup/quotation-templates">
                            <FileText className="mr-2 h-4 w-4" />
                            Manage Templates
                        </Link>
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Employee Roles</CardTitle>
                    <CardDescription>Manage the available roles that can be assigned to an employee.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                     {employeeRoles.map((role) => (
                        <div key={role.id} className="flex items-center justify-between p-2 rounded-md bg-secondary">
                            <Badge variant="secondary">{role.name}</Badge>
                            <form action={async () => {
                                "use server";
                                await deleteEmployeeRoleAction(role.id);
                                revalidatePath('/setup');
                            }}>
                                <Button type="submit" variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </form>
                        </div>
                    ))}
                </CardContent>
                 <CardFooter className="border-t pt-6">
                    <form action={addEmployeeRoleAction} className="flex w-full flex-col sm:flex-row items-center gap-2">
                        <Input name="name" placeholder="Add new role" />
                        <Button type="submit" className="w-full sm:w-auto">
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Add Role
                        </Button>
                    </form>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Departments</CardTitle>
                    <CardDescription>Manage the departments within your organization.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                     {departments.map((dept) => (
                        <div key={dept.id} className="flex items-center justify-between p-2 rounded-md bg-secondary">
                            <span className="text-sm font-medium flex items-center gap-2">
                                <Building2 className="h-4 w-4 text-muted-foreground" />
                                {dept.name}
                            </span>
                            <form action={async () => {
                                "use server";
                                await deleteDepartmentAction(dept.id);
                                revalidatePath('/setup');
                            }}>
                                <Button type="submit" variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </form>
                        </div>
                    ))}
                </CardContent>
                 <CardFooter className="border-t pt-6">
                    <form action={addDepartmentAction} className="flex w-full flex-col sm:flex-row items-center gap-2">
                        <Input name="name" placeholder="Add new department" />
                        <Button type="submit" className="w-full sm:w-auto">
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Add Department
                        </Button>
                    </form>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Product Models</CardTitle>
                    <CardDescription>Manage product models for your inventory.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                     {productModels.map((model) => (
                        <div key={model.id} className="p-3 rounded-md bg-secondary">
                          <div className="flex items-start justify-between gap-2">
                            <span className="text-sm font-medium flex items-center gap-2">
                                <Box className="h-4 w-4 text-muted-foreground" />
                                {model.name}
                            </span>
                            <form action={async () => {
                                "use server";
                                await deleteProductModelAction(model.id);
                                revalidatePath('/setup');
                            }}>
                                <Button type="submit" variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </form>
                          </div>
                          {model.description && (
                            <p className="text-xs text-muted-foreground mt-2 whitespace-pre-wrap">{model.description}</p>
                          )}
                        </div>
                    ))}
                </CardContent>
                 <CardFooter className="border-t pt-6">
                    <form action={addProductModelAction} className="flex w-full flex-col gap-2">
                        <div className="flex w-full flex-col sm:flex-row items-center gap-2">
                          <Input name="name" placeholder="Add new model name" />
                          <Button type="submit" className="w-full sm:w-auto">
                              <PlusCircle className="mr-2 h-4 w-4" />
                              Add Model
                          </Button>
                        </div>
                        <Input name="description" placeholder="Optional: model description" />
                    </form>
                </CardFooter>
            </Card>
        </div>
      </>
    );
  }
