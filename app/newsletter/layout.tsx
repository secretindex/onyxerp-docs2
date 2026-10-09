"use client";

import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { StepBack } from "lucide-react";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex flex-col flex-1 h-full w-5/6 m-auto dark:bg-black">
      <Button
        variant={"outline"}
        className="w-fit flex px-4 items-center"
        onClick={() => redirect("/")}
      >
        <StepBack />
      </Button>
      {children}
    </div>
  );
}
