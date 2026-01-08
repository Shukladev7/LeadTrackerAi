"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface SetupCardProps {
  title: string;
  description: string;
  href: string;
  buttonText: string;
  Icon?: LucideIcon;
}

export function SetupCard({
  title,
  description,
  href,
  buttonText,
  Icon,
}: SetupCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="space-y-1">
        <CardTitle className="flex items-center gap-2 text-lg">
          {Icon && <Icon className="h-5 w-5 text-muted-foreground" />}
          {title}
        </CardTitle>
        <CardDescription className="text-sm">
          {description}
        </CardDescription>
      </CardHeader>

      {/* Push button to bottom */}
      <CardContent className="mt-auto">
        <Button asChild className="w-full">
          <Link href={href}>{buttonText}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
