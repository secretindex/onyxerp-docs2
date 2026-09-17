"use client";

import NewsItem from "@/components/NewsItem";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";

const PublicarPage = () => {
  const handleAddSgmClient = () => {
    axios
      .post("/api/publish", {
      })
      .then(() => {
        refresh();
      })
      .catch((err) => toast.error("Erro ao adicionar cliente de SGM", err));
  };
  const handleSubmit = async (data: FormData) => {
    const title = data.get("title") as string;
    const description = data.get("description") as string;
    console.log("Título:", title);
    console.log("Descrição:", description);
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
        <Form className="flex w-full flex-col gap-4">
          <Field>
            <FieldLabel>Título</FieldLabel>
            <Input placeholder="Atualizações..." size="lg" type="text" />
          </Field>
          <Field>
            <FieldLabel>Descrição</FieldLabel>
            <Textarea placeholder="Descreva sua publicação em Markdown..." />
          </Field>
          <Button onClick={handleSubmit} className="w-full" type="submit">
            Publicar
          </Button>
        </Form>
      </div>
      <div className="flex flex-col gap-2 w-2/3 m-auto">
        <h2 className="text-xl font-bold">Publicações recentes</h2>
        <NewsItem
          id="21901dj120jd120j"
          title="Atualização 1"
          description="Descrição da atualização 1"
          date="30/08/2026"
        />
      </div>
    </div>
  );
};

export default PublicarPage;
