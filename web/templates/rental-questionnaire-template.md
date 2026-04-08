# Rental questionnaire template (vzor)

Tento soubor slouzi jako dlouhodoby vzor dotazniku pro zajemce o pronajem.

## 1) Struktura sekci

1. Zakladni informace o zajemci
2. Informace o domacnosti
3. Zamestnani a financni situace
4. Predchozi bydleni
5. Informace o pronajmu
6. Souhlasy a GDPR

## 2) Povinna pole

- datum
- jmeno
- datumNarozeni
- telefon
- adresa
- email
- pocetNajemniku
- kuraci (ano/ne)
- mazlicky (ano/ne)
- pomer (alespon jedna hodnota)
- zamestnani
- delkaZamestnani
- dolozit (ano/ne)
- mesicniPrijem
- prijem (ano/ne)
- exekuce (ano/ne)
- insolvence (ano/ne)
- zavazky (ano/ne)
- predchoziBydleni
- kontaktPronajimatel (ano/ne)
- delkaBydleni
- terminNastehhovani
- souhlasVypisy (true)
- souhlasGDPR (true)

Podminena pole:
- mazlickyDruh (pokud mazlicky = ano)
- zavazkyPodrobnosti (pokud zavazky = ano)
- kontaktPronajimatelInfo (pokud kontaktPronajimatel = ano)
- clenove[] (jmenoPrijmeni + vek pro kazdou osobu dle pocetNajemniku)

## 3) Datovy model (JSON)

```json
{
  "datum": "2026-03-26",
  "jmeno": "Jan Novak",
  "datumNarozeni": "1990-01-01",
  "telefon": "+420123456789",
  "adresa": "Ulice 1, Mesto",
  "email": "jan@example.com",
  "pocetNajemniku": "2",
  "clenove": [
    { "jmenoPrijmeni": "Jan Novak", "vek": "35" },
    { "jmenoPrijmeni": "Eva Novakova", "vek": "33" }
  ],
  "kuraci": "ne",
  "mazlicky": "ano",
  "mazlickyDruh": "pes",
  "pomer": ["plny", "neurcita"],
  "zamestnani": "IT specialista",
  "delkaZamestnani": "4 roky",
  "dolozit": "ano",
  "mesicniPrijem": "60000",
  "prijem": "ano",
  "exekuce": "ne",
  "insolvence": "ne",
  "zavazky": "ne",
  "zavazkyPodrobnosti": "",
  "predchoziBydleni": "Byt v Moste, stehovani kvuli praci",
  "kontaktPronajimatel": "ano",
  "kontaktPronajimatelInfo": "Petr Svoboda, +420...",
  "delkaBydleni": "dlouhodobe",
  "terminNastehhovani": "2026-04-01",
  "souhlasVypisy": true,
  "souhlasGDPR": true
}
```

## 4) API contract

- Endpoint: `POST /api/rental-questionnaire`
- Odpoved 200: `{ "ok": true }`
- Odpoved 400: `{ "error": "Chybi povinna pole: ..." }`
- Odpoved 500: `{ "error": "Chyba pri odesilani." }`

## 5) Poznamka k obnoveni

Pokud se dotaznik bude znovu nasazovat:
1. vytvorit route stranku pro formular,
2. vytvorit API route `POST /api/rental-questionnaire`,
3. napojit CTA tlacitko z konkretniho inzeratu.
