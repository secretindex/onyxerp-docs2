import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Frame,
  FrameDescription,
  FrameHeader,
  FrameTitle,
} from "@/components/ui/frame";

import NewsList from "@/components/NewsList";

export default function Home() {
  const handleSubmit = () => {

  }

  return (
    <>
      <section className="flex flex-col items-center sm:items-start">
        <div className="flex items-center gap-4">
          <h1 className="text-6xl font-bold">OnyxDocs</h1>
          <Image src="/onyx.svg" alt="OnyxDocs Logo" width={50} height={50} />
        </div>
        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
          OnyxDocs é onde você pode saber mais sobre todas as atualizações do
          sistema OnyxERP de gestão do RPPS.
        </p>
      </section>
      <Frame className="w-full my-24">
        <FrameHeader>
          <FrameTitle className="text-lg font-semibold">
            Inscreva-se na Newsletter
          </FrameTitle>
          <FrameDescription>
            Inscreva-se na nossa newsletter para receber as últimas atualizações
            do sistema OnyxERP.
          </FrameDescription>
          <FrameDescription>
            <Form
              action={async (data: FormData) => {
                "use server";
                const email = data.get("email") as string;
                console.log(email);
              }}
            >
              <div className="mt-4 flex flex-col sm:flex-row gap-2">
                <div>
                  <Input
                    type="text"
                    name="email"
                    placeholder="Digite seu e-mail"
                  />
                </div>
                <Button onClick={handleSubmit}>Inscrever-se</Button>
              </div>
            </Form>
          </FrameDescription>
        </FrameHeader>
      </Frame>
      <>
        <NewsList />
      </>
    </>
  );
}
