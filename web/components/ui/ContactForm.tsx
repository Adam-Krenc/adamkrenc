"use client";

import { useState } from "react";
import Button from "./Button";

type FormType = "reality" | "smartapky";

interface ContactFormProps {
  defaultType?: FormType;
  showTypeToggle?: boolean;
}

export default function ContactForm({
  defaultType = "reality",
  showTypeToggle = true,
}: ContactFormProps) {
  const [formType, setFormType] = useState<FormType>(defaultType);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formType === "smartapky") {
      window.open("https://www.smartapky.cz/#kontakt", "_blank");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: formType }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Type toggle */}
      {showTypeToggle && (
        <div className="flex gap-2 p-1 bg-[#0a0f1e] border border-[#1e2d47] rounded-xl">
          <button
            type="button"
            onClick={() => setFormType("reality")}
            className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-200 ${
              formType === "reality"
                ? "bg-[#E02020] text-white shadow-md"
                : "text-[#94a3b8] hover:text-white"
            }`}
          >
            🏠 Reality
          </button>
          <button
            type="button"
            onClick={() => setFormType("smartapky")}
            className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-200 ${
              formType === "smartapky"
                ? "bg-[#6B8FBF] text-white shadow-md"
                : "text-[#94a3b8] hover:text-white"
            }`}
          >
            💡 Smartapky / Tech
          </button>
        </div>
      )}

      {formType === "smartapky" ? (
        <div className="rounded-xl border border-[#1e2d47] bg-[#141c2e] p-6 text-center space-y-4">
          <div className="text-4xl">💡</div>
          <p className="text-[#94a3b8] text-sm leading-relaxed">
            Poptávky ohledně IT, AI a automatizace řeším přes web Smartapky.cz. Kliknutím níže přejdete přímo na kontaktní formulář.
          </p>
          <Button href="https://www.smartapky.cz/#kontakt" variant="blue" external size="md">
            Otevřít Smartapky.cz kontakt
          </Button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-2">
                Jméno a příjmení *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Jan Novák"
                className="w-full px-4 py-3 rounded-lg bg-[#0a0f1e] border border-[#1e2d47] text-white placeholder-[#64748b] text-sm focus:outline-none focus:border-[#6B8FBF] focus:ring-1 focus:ring-[#6B8FBF]/30 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-2">
                Telefon *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="+420 xxx xxx xxx"
                className="w-full px-4 py-3 rounded-lg bg-[#0a0f1e] border border-[#1e2d47] text-white placeholder-[#64748b] text-sm focus:outline-none focus:border-[#6B8FBF] focus:ring-1 focus:ring-[#6B8FBF]/30 transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-2">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="jan@priklad.cz"
              className="w-full px-4 py-3 rounded-lg bg-[#0a0f1e] border border-[#1e2d47] text-white placeholder-[#64748b] text-sm focus:outline-none focus:border-[#6B8FBF] focus:ring-1 focus:ring-[#6B8FBF]/30 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-2">
              Zpráva
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Řekněte mi více o nemovitosti nebo projektu..."
              className="w-full px-4 py-3 rounded-lg bg-[#0a0f1e] border border-[#1e2d47] text-white placeholder-[#64748b] text-sm focus:outline-none focus:border-[#6B8FBF] focus:ring-1 focus:ring-[#6B8FBF]/30 transition-colors resize-none"
            />
          </div>

          {status === "success" && (
            <div className="rounded-lg bg-green-900/20 border border-green-700/30 px-4 py-3 text-green-400 text-sm">
              ✅ Zpráva odeslána! Ozvu se do 24 hodin.
            </div>
          )}
          {status === "error" && (
            <div className="rounded-lg bg-red-900/20 border border-red-700/30 px-4 py-3 text-red-400 text-sm">
              ❌ Něco se pokazilo. Zkuste to prosím znovu nebo mě kontaktujte přímo.
            </div>
          )}

          <Button
            type="submit"
            variant="red"
            size="lg"
            disabled={status === "loading"}
            className="w-full"
          >
            {status === "loading" ? "Odesílám..." : "Odeslat poptávku →"}
          </Button>

          <p className="text-[#64748b] text-xs text-center">
            Odesláním souhlasíte se zpracováním osobních údajů pro účely odpovědi na poptávku.
          </p>
        </>
      )}
    </form>
  );
}
