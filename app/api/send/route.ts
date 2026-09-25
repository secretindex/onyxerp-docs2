import { createClient } from "@/utils/supabase/server";
import Mailjet from "node-mailjet"
import { cookies } from "next/headers";

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY,
  apiSecret: process.env.MAILJET_API_SECRET,
})

export async function POST(req: Request) {
  const supabase = createClient(await cookies())
  try {
    const body = await req.json();

    console.log(body)

    const { data, error: errorDatabase } = await supabase.from("updates").select("*").eq("id", body.id)

    if (errorDatabase) throw new Error(errorDatabase.message)

    console.log(data)

    return Response.json({ success: true, data: "Oi" })
  } catch (error) {
    console.log(error)
    return Response.json({ errorMessage: error, status: 500 })
  }
}

/* 
  const result = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "websites@braconsultoria.com.br",
            Name: "Atualizações OnyxERP"
          },
          To: [
            {
              Email: "caio@braconsultoria.com.br",
            }
          ],
          Subject: "Your email flight plan!",
          TextPart: "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
          HTMLPart: "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
        }
      ]
    })
*/