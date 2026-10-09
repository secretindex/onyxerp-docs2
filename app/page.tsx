import Image from "next/image";

import NewsList from "@/components/NewsList";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";

export default function Home() {
  
  return (
    <section className="flex flex-col gap-8 w-5/6 m-auto">
      <section className="flex flex-col gap-4 items-center sm:items-start">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold">OnyxDocs</h1>
          <Image src="/onyx.svg" alt="OnyxDocs Logo" width={32} height={32} />
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          OnyxDocs é onde você pode saber mais sobre todas as atualizações do
          sistema OnyxERP de gestão do RPPS.
        </p>
      </section>
      <div>
        <NewsletterSubscribe />
      </div>
      <>
        <NewsList admin={false} />
      </>
    </section>
  );
}
