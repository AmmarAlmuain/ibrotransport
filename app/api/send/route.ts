import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await request.json();
  console.log(body);
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "masterofalune@gmail.com",
      subject: "A new client arrive",
      html: `<div><h1>A new client arrive</h1><br/><span>name: ${body.name}</span><br/><span>email: ${body.email}</span><br/><span>phone: ${body.phone}</span><br/><span>city: ${body.city}</span><br/><span>message: ${body.message}</span><br/><span>work type: ${body.workType}</span></div>`,
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
