import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  const supabase = createClient(await cookies());
  const data = await request.json();
  console.log("Dados recebidos:", data);

  const { title, description } = data;

  const { error } = await supabase.from("updates").insert({
    title,
    excerpt: description.substring(0, 100),
    content: description,
    status: "Publicado",
    published_at: new Date().toISOString(),
  });

  if (error) {
    console.error("Erro ao inserir publicação:", error);
    throw new Error(error.message);
  }

  try {
    return NextResponse.json({ message: "Publicação recebida com sucesso!" });
  } catch (error) {
    console.error("Erro ao processar a publicação:", error);
    return NextResponse.json(
      { message: "Erro ao processar a publicação." },
      { status: 500 },
    );
  }
}
