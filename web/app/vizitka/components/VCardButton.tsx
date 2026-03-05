"use client";

const FULL_NAME = "Adam Krenc";
const FIRST_NAME = "Adam";
const LAST_NAME = "Krenc";
const COMPANY = "RE/MAX Synergy";
const TITLE = "Realitní makléř";
const PHONE = "+420605822363";
const EMAIL_MAIN = "adam.krenc@remax-czech.cz";
const URL_MAIN = "https://adamkrenc.cz";
const URL_SMARTAPKY = "https://smartapky.cz";
const ADDRESS_STREET = "Krupská 30";
const ADDRESS_CITY = "Teplice";
const ADDRESS_COUNTRY_CODE = "CZ";

function generateVCard(): string {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${LAST_NAME};${FIRST_NAME};;;`,
    `FN:${FULL_NAME}`,
    `ORG:${COMPANY}`,
    `TITLE:${TITLE}`,
    `TEL;TYPE=CELL,VOICE:${PHONE}`,
    `EMAIL;TYPE=INTERNET,WORK:${EMAIL_MAIN}`,
    `URL;TYPE=WORK:${URL_MAIN}`,
    `URL;TYPE=WORK:${URL_SMARTAPKY}`,
    `ADR;TYPE=WORK:;;${ADDRESS_STREET};${ADDRESS_CITY};;;${ADDRESS_COUNTRY_CODE}`,
    "END:VCARD",
  ];

  return lines.join("\r\n");
}

export default function VCardButton() {
  const handleClick = () => {
    const vcard = generateVCard();
    const blob = new Blob([vcard], {
      type: "text/vcard;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Adam_Krenc.vcf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);

    // připravené místo pro budoucí analytiku (GA / Matomo)
    console.log("vcard_download");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#003DA5] hover:bg-[#004bd1] text-white text-sm font-semibold shadow-lg shadow-[#003DA5]/40 transition-transform duration-150 active:scale-95"
    >
      <span>Uložit kontakt do telefonu</span>
    </button>
  );
}

