import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function GET() {
  const supabase = createClient(await cookies());
  try {
    const { data, error } = await supabase.from("updates").select("*");
    if (error) {
      throw new Error(error.message);
    }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        message:
          "Erro ao buscar notícias: " +
          (error instanceof Error ? error.message : "Erro desconhecido."),
      },
      { status: 500 },
    );
  }
}
