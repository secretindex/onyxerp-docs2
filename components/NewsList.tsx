"use client";

import NewsItem from "./NewsItem";
import { useState, useEffect } from "react";

import { createClient } from "@/utils/supabase/client";

const NewsList = ({ admin }: { admin: boolean }) => {
  const supabase = createClient();
  const [news, setNews] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase.from("updates").select("*");
      if (error) {
        console.error("Erro ao buscar notícias:", error);
      }

      setNews(data as Array<any>);
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
        {news && (
          <>
            {news.sort((a: any, b: any) => (new Date(b.published_at) as any) - (new Date(a.published_at) as any)).map((val) => {
              return (
                <NewsItem
                  key={val.id}
                  id={val.id}
                  title={val.title}
                  description={val.excerpt}
                  date={new Date(val.published_at).toLocaleDateString("pt-BR")}
                  admin={admin}
                ></NewsItem>
              );
            })}
          </>
        )}
      </div>
    </section>
  );
};

export default NewsList;
