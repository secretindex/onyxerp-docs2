import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const supabase = createClient(await cookies())
  try {
    const body = await req.json();

    const { data, error: errorDatabase } = await supabase.from("emails").insert({ email: body.email })

    if (errorDatabase) throw new Error(errorDatabase.message)

    return Response.json({ success: true, data: data })
  } catch (error) {
    console.log("Daqui que sai o erro " + error)
    return Response.json({ errorMessage: `${error}`, status: 500 })
  }
}

export async function GET() {
  const supabase = createClient(await cookies())
  try {
    const { data, error } = await supabase.from("emails").select();

    if (error) {
      throw new Error(error.message)
    }
    
    return Response.json({ status: 200, message: data })
  } catch (error) {
    console.log(error)
    return Response.json({ errorMessage: error, status: 500 })
  }
}
