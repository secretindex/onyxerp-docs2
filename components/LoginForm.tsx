"use client";


import { Button } from "@/components/ui/button";

import {
  Card,
  CardDescription,
  CardHeader,
  CardPanel,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>OnyxDocs</CardTitle>
        <CardDescription>
          Entre e comece a publicar as notícias.
        </CardDescription>
      </CardHeader>
      <CardPanel>
        <Form className="flex w-full flex-col gap-4">
          <Field>
            <FieldLabel>E-mail</FieldLabel>
            <Input
              placeholder="your.email@example.com"
              size="lg"
              type="email"
            />
          </Field>
          <Field>
            <FieldLabel>Password</FieldLabel>
            <Input
              placeholder="••••••••"
              size="lg"
              type="password"
            />
          </Field>
          <Button className="w-full" type="submit">
            Login
          </Button>
        </Form>
      </CardPanel>
    </Card>
  );
}
