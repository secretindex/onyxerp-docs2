"use client";

import NewsItem from "./NewsItem";
import { useEffect } from "react";

import { createClient } from "@/utils/supabase/client";

const NewsList = () => {
  const supabase = createClient();

  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase.from("updates").select("*");
      if (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    };
    fetchNews();
  }, []);

  return (
    <section className="flex flex-col items-center sm:items-start mb-12 w-full">
      <h2 className="text-xl font-bold">Últimas Atualizações</h2>
      <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
        Fique por dentro das últimas atualizações do sistema OnyxERP.
      </p>
      <div className="mt-4 w-full">
        <NewsItem
          id="21901dj120jd120j"
          title="Atualização 1"
          description="Descrição da atualização 1"
          date="30/08/2026"
        />
      </div>
    </section>
  );
};

export default NewsList;
