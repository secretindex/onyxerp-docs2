import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  const supabase = createClient(await cookies());
  const data = await request.json();
  console.log("Dados recebidos:", data);

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
