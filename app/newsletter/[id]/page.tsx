"use client";

import { toastManager } from "@/components/ui/toast";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { useParams } from "next/navigation";

interface Newsletter {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  published_at: string;
  created_at: string;
  status: string;
}

const NewsletterPage = () => {
  const params = useParams();

  const supabase = createClient();
  const [newsletter, setNewsletter] = useState<Newsletter>();

  useEffect(() => {
    const fetchNewsletter = async () => {
      const { id } = params;
      const { data, error } = await supabase
        .from("updates")
        .select("*")
        .eq("id", id)
        .single();

      console.log(data);

      setNewsletter(data as Newsletter);

      console.log(newsletter);

      if (error) {
        console.error("Error fetching newsletter:", error);
        toastManager.add({
          title: "Erro ao buscar notícia",
        });
      }
    };

    fetchNewsletter();
  }, []);

  return (
    <div className="h-full w-full p-4">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="w-full text-4xl text-center font-bold">{newsletter?.title}</h1>
        <span className="text-gray-600 text-sm">{`Publicado na ${newsletter && new Date(newsletter.published_at).toLocaleDateString("pt-BR", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}`}</span>
      </div>
      <hr className="my-4" />
      <main className="w-full gap-3">
        <article className="w-full">
          <div className="prose prose-md max-w-none">
            <Markdown remarkPlugins={[remarkGfm]}>{newsletter?.content}</Markdown>
          </div>
        </article>
      </main>
    </div>
  );
};

export default NewsletterPage;
