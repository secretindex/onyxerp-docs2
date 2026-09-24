import nodemailer from "nodemailer";
import Mailjet from "node-mailjet"

const mailjet = new Mailjet({
  apiKey: "",
  apiSecret: "",
})

export async function POST() {
  const account = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: account.user,
      pass: account.pass,
    },
  });

  const info = await transporter.sendMail({
    from: '"Meu App" <teste@meuapp.com>',
    to: "qualquer@email.com",
    subject: "Teste local",
    text: "Olá! Este é um teste.",
    html: "<h1>Olá! 👋</h1><p>Este é um teste.</p>",
  });

  console.log("Preview:", nodemailer.getTestMessageUrl(info));

  return Response.json({
    preview: nodemailer.getTestMessageUrl(info),
  });
}