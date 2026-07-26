import { NextRequest, NextResponse } from "next/server";

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

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Email error: chybí RESEND_API_KEY");
      return NextResponse.json({ error: "Chyba při odesílání." }, { status: 500 });
    }

    const fromEmail = process.env.CONTACT_FROM_EMAIL || "adam.krenc@smartapky.cz";
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

    const text = [
      "Nová zpráva z webu adamkrenc.cz",
      "",
      `Jméno: ${String(name)}`,
      `Email: ${String(email)}`,
      "",
      message ? String(message) : "(bez zprávy)",
    ].join("\n");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Web adamkrenc.cz <${fromEmail}>`,
        to: [toEmail],
        reply_to: String(email),
        subject: `Nová zpráva z webu: ${safeName}`,
        html,
        text,
      }),
    });

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      console.error(`Resend failed with ${response.status}: ${body.slice(0, 500)}`);
      return NextResponse.json({ error: "Chyba při odesílání." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "Chyba při odesílání." }, { status: 500 });
  }
}
