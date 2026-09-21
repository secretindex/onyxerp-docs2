"use client";

import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex flex-col flex-1 h-full w-full dark:bg-black">
      <Button
        className="absolute top-15 left-65"
        variant={"outline"}
        onClick={() => redirect("/")}
      >
        {"<--"} Retornar
      </Button>
      {children}
    </div>
  );
}
