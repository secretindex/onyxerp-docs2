import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['caio@braconsultoria.com.br'],
    subject: 'Hello world',
    react: EmailTemplate({ firstName: 'John' }),
  });

  console.log("Error: " + error)

  res.status(200).json(data);
};