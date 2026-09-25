"use client";

import { Form } from "@/components/ui/form";
import NewsItem from "@/components/NewsItem";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toastManager } from "@/components/ui/toast";
import { Field, FieldLabel } from "@/components/ui/field";

import MDEditor from "@uiw/react-md-editor"

import axios from "axios";
import { useState } from "react";
import NewsList from "@/components/NewsList";

const PublicarPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .post("/api/publish", { title, description })
      .then(() => {
        toastManager.add({
          title: "Publicação enviada com sucesso!",
          description: "Sua publicação foi enviada para revisão.",
          type: "success",
        });
        setTitle("");
        setDescription("");
      })
      .catch((error) => {
        toastManager.add({
          title: "Erro ao enviar publicação",
          description:
            "Ocorreu um erro ao enviar sua publicação. Tente novamente. " +
            error.message,
          type: "error",
        });
      });
  };

  return (
    <div className="flex flex-col h-full w-full items-center justify-center gap-12">
      <div className="flex flex-col gap-2 w-2/3 m-auto">
        <h1 className="text-2xl font-bold">Publicações</h1>
        <p className="text-muted-foreground">
          Crie e publique suas notícias para o OnyxDocs.
        </p>
      </div>
      <div className="flex flex-col gap-2 w-2/3 m-auto">
        <Form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
          <Field>
            <FieldLabel>Título</FieldLabel>
            <Input
              name="title"
              placeholder="Atualizações..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              size="lg"
              type="text"
            />
          </Field>
          <Field className="w-full">
            <FieldLabel>
              Descrição
            </FieldLabel>
            <MDEditor value={description} onChange={(value) => setDescription(value || "")} height={400} className="w-full" />
          </Field>
          <Button className="w-full" type="submit">
            Publicar
          </Button>
        </Form>
      </div>
      <div className="flex flex-col gap-2 w-2/3 m-auto">
        <NewsList admin={true} />
      </div>
    </div>
  );
};

export default PublicarPage;
