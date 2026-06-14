import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Chybí povinná pole." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toEmail = process.env.CONTACT_EMAIL || "adam.krenc@smartapky.cz";

    const safeName = escapeHtml(String(name));
    const safeEmail = escapeHtml(String(email));
    const safeMessage = message ? escapeHtml(String(message)) : "(bez zprávy)";

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f4f3ef; padding: 20px; border-radius: 12px;">
        <div style="background: #181611; padding: 22px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: #4FD89B; margin: 0; font-size: 22px;">Nová zpráva z webu</h1>
          <p style="color: #b4afa4; margin: 8px 0 0;">adamkrenc.cz</p>
        </div>
        <div style="background: white; padding: 24px; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #807a6c; font-size: 13px; width: 120px;">Jméno</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: 600; color: #181611;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #807a6c; font-size: 13px;">Email</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: 600;">
                <a href="mailto:${safeEmail}" style="color: #138a5a; text-decoration: none;">${safeEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; color: #807a6c; font-size: 13px; vertical-align: top;">Zpráva</td>
              <td style="padding: 10px; color: #181611; white-space: pre-wrap;">${safeMessage}</td>
            </tr>
          </table>
        </div>
        <p style="text-align: center; color: #b4afa4; font-size: 12px; margin-top: 16px;">
          Odesláno z adamkrenc.cz
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Web adamkrenc.cz" <${process.env.SMTP_FROM}>`,
      to: toEmail,
      replyTo: String(email),
      subject: `Nová zpráva z webu: ${safeName}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "Chyba při odesílání." }, { status: 500 });
  }
}
