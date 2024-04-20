import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "masterofalune@gmail.com",
      subject: "Hello Ibrahim",
      html: "<h1>Hello1 from Ammar!</h1>",
    });
    if (error) {
      console.log(error);
    }
    console.log(data);
    return NextResponse.json("Sended!");
  } catch (error) {
    return NextResponse.json(error);
  }
}
