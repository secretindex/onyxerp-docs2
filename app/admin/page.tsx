"use client";

import LoginForm from "@/components/LoginForm";

import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const Admin = () => {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    alert(`Email: ${formData.get("email") || ""}`);
  };

  return (
    <>
      <div className="flex flex-col h-full w-full items-center justify-center gap-4">
        <div>
          <h1>OnyxDocs Admin</h1>
          <p className="text-muted-foreground">
            Enter your email to access the admin panel.
          </p>
        </div>
        <div className="flex w-full max-w-64 flex-col gap-4">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              placeholder="you@example.com"
              className="w-full"
              required
              type="email"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
