import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, message, type } = await req.json();

    if (!name || !phone || !email || !type) {
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

    const toEmail = process.env.CONTACT_EMAIL_REALITY || "adam.krenc@remax-czech.cz";

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 20px; border-radius: 8px;">
        <div style="background: #0a0f1e; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: #E02020; margin: 0; font-size: 22px;">Nová poptávka z webu</h1>
          <p style="color: #94a3b8; margin: 8px 0 0;">adamkrenc.cz · ${type === "reality" ? "🏠 Reality" : "💡 Tech"}</p>
        </div>
        <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #64748b; font-size: 13px; width: 140px;">Jméno</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: 600; color: #0f172a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #64748b; font-size: 13px;">Telefon</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: 600; color: #0f172a;">
                <a href="tel:${phone}" style="color: #E02020; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #64748b; font-size: 13px;">Email</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: 600;">
                <a href="mailto:${email}" style="color: #E02020; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; color: #64748b; font-size: 13px; vertical-align: top;">Zpráva</td>
              <td style="padding: 10px; color: #0f172a;">${message || "(bez zprávy)"}</td>
            </tr>
          </table>
        </div>
        <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 16px;">
          Odesláno z adamkrenc.cz
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Adam Krenc Web" <${process.env.SMTP_FROM}>`,
      to: toEmail,
      replyTo: email,
      subject: `Nová poptávka: ${name} (${type === "reality" ? "Reality" : "Tech"})`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "Chyba při odesílání." }, { status: 500 });
  }
}
