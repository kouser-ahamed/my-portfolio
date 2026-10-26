import nodemailer from "nodemailer";

// This route runs on Vercel/Next.js as a serverless function — no separate
// backend server needed. It uses your own Gmail account to send the mail.
//
// SETUP:
// 1. Turn on 2-Step Verification on your Google account:
//    https://myaccount.google.com/security
// 2. Create an "App Password": https://myaccount.google.com/apppasswords
//    (choose "Mail" as the app) — Google gives you a 16-character password.
// 3. In your project root, create a file named `.env.local` with:
//      EMAIL_USER=kouserahamed.dev@gmail.com
//      EMAIL_PASS=your16characterapppassword
//    (No quotes, no spaces around the =. Never commit .env.local to GitHub —
//    it should already be in your .gitignore by default in Next.js.)
// 4. On Vercel, add the same two variables under
//    Project Settings → Environment Variables, then redeploy.

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New message from ${name} — Portfolio Contact Form`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>New message from your portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { success: false, error: "Failed to send message." },
      { status: 500 }
    );
  }
}