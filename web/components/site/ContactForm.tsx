"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="form-success">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M4 10.5l4 4 8-9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Díky, zpráva je na cestě. Brzy se ti ozvu.
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="f-name">Jméno</label>
        <input id="f-name" name="name" type="text" placeholder="Jak ti mám říkat?" required />
      </div>
      <div className="field">
        <label htmlFor="f-email">Email</label>
        <input id="f-email" name="email" type="email" placeholder="tvuj@email.cz" required />
      </div>
      <div className="field">
        <label htmlFor="f-msg">Zpráva</label>
        <textarea
          id="f-msg"
          name="message"
          rows={4}
          placeholder="Na čem pracuješ?"
          required
        />
      </div>
      <button type="submit" className="btn btn-accent" disabled={status === "sending"}>
        {status === "sending" ? "Odesílám…" : "Odeslat zprávu"}
        <svg className="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M4 12L12 4M12 4H6M12 4V10"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {status === "error" && (
        <p className="form-error">Něco se pokazilo. Zkus to prosím znovu nebo napiš na email.</p>
      )}
      <p className="form-consent">
        Odesláním souhlasíš se zpracováním údajů dle{" "}
        <a href="/zasady-ochrany-osobnich-udaju.pdf" target="_blank" rel="noopener">
          zásad ochrany osobních údajů
        </a>
        . Odpovídám většinou do dne nebo dvou.
      </p>
    </form>
  );
}
