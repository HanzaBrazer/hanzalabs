import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Body = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  budget?: string;
  message?: string;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const firstName = body.firstName?.trim();
  const lastName = body.lastName?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim() || "—";
  const budget = body.budget?.trim() || "—";
  const message = body.message?.trim();

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email and message." },
      { status: 400 }
    );
  }
  if (!emailRe.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "HanzaLabs <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return NextResponse.json(
      { error: "Email service is not configured yet." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New enquiry from ${firstName} ${lastName}`,
      text: [
        `Name:    ${firstName} ${lastName}`,
        `Email:   ${email}`,
        `Phone:   ${phone}`,
        `Budget:  ${budget}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family:Inter,Arial,sans-serif;color:#0E0E0E;line-height:1.5">
          <h2 style="margin:0 0 16px">New enquiry from ${firstName} ${lastName}</h2>
          <p style="margin:0 0 4px"><strong>Email:</strong> ${email}</p>
          <p style="margin:0 0 4px"><strong>Phone:</strong> ${phone}</p>
          <p style="margin:0 0 16px"><strong>Budget:</strong> ${budget}</p>
          <p style="margin:0 0 6px"><strong>Message:</strong></p>
          <p style="margin:0;white-space:pre-wrap">${message.replace(/</g, "&lt;")}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: "Could not send your message." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
