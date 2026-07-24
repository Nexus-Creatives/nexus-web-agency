import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, business, website, email, challenge, honeypot } = body;

    // Honeypot check — bots fill this hidden field, real users never see it
    if (honeypot) {
      // Silently pretend success so bots don't learn to avoid this trap
      return NextResponse.json({ success: true });
    }

    // Basic server-side validation (never trust client-side only)
    if (!name || !business || !email) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "nexuscreatives.dev@gmail.com", // swap once your domain is verified in Resend
      to: process.env.CONTACT_EMAIL as string,
      replyTo: email,
      subject: `New lead: ${business}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Current Website:</strong> ${website || "None provided"}</p>
        <p><strong>Biggest Challenge:</strong> ${challenge}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}