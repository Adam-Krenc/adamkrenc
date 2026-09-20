import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import ScrollReveal from "@/components/site/ScrollReveal";
import ContactForm from "@/components/site/ContactForm";
import ImgSlot from "@/components/site/ImgSlot";

const ArrowUpRight = ({ className = "arrow" }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M4 12L12 4M12 4H6M12 4V10"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <ScrollReveal />

      <main className="site-main" id="top">
        {/* ============================ HERO ============================ */}
        <section className="hero section">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="hero-status" data-reveal>
                  <span className="live" />
                  Algoritmický trading · Tech · Česko
                </span>
                <h1 data-reveal>
                  Snažím se pochopit svět.
                  <span className="soft">Zatím se mi to moc nedaří.</span>
                </h1>
                <p className="hero-sub" data-reveal>
                  Nejvíc času teď trávím algoritmickým tradingem. Vedle toho stavím produkty{" "}
                  <a href="https://smartapky.cz" target="_blank" rel="noopener">
                    Smartapky.cz
                  </a>{" "}
                  a{" "}
                  <a href="https://najdinajemnika.cz" target="_blank" rel="noopener">
                    Najdinájemníka.cz
                  </a>{" "}
                  a každý den zjišťuju, kolik toho ještě nevím.
                </p>
                <div className="hero-cta" data-reveal>
                  <a href="#contact" className="btn btn-accent">
                    Napiš mi
                    <ArrowUpRight />
                  </a>
                  <a href="#projects" className="btn btn-ghost">
                    Na čem pracuju
                  </a>
                </div>
              </div>

              <div className="hero-portrait" data-reveal>
                <ImgSlot
                  src="/images/adam-founder.jpg"
                  alt="Adam Krenc"
                  label="Velký osobní portrét (4:5)"
                  priority
                  sizes="(max-width: 940px) 100vw, 420px"
                  objectPosition="center top"
                />
              </div>
            </div>

            <div className="hero-meta" data-reveal>
              <div className="item">
                <span className="k">Teď</span>
                <span className="v">Algoritmický trading</span>
              </div>
              <div className="item">
                <span className="k">Trading</span>
                <span className="v">od patnácti</span>
              </div>
              <div className="item">
                <span className="k">Vedle toho</span>
                <span className="v">Smartapky.cz</span>
              </div>
              <div className="item">
                <span className="k">Kde</span>
                <span className="v">Ústecký kraj, CZ</span>
              </div>
              <div className="item">
                <span className="k">Mimo práci</span>
                <span className="v">Běh, kolo, hory</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================ O MNĚ ============================ */}
        <section className="section section-pad" id="about">
          <div className="wrap">
            <div className="about-grid">
              <div className="story">
                <div className="section-head" style={{ marginBottom: 32 }} data-reveal>
                  <span className="eyebrow">01 — O mně</span>
                  <h2>Začalo to u grafů. Nakonec jsem se k nim vrátil.</h2>
                </div>
                <p className="lead" data-reveal>
                  Bylo mi patnáct. V komunitě{" "}
                  <a href="https://www.goldenpocket.cz/" target="_blank" rel="noopener">
                    Golden Pocket
                  </a>{" "}
                  jsem si koupil členství, a protože jsem u toho nedokázal sedět potichu, časem
                  ze mě byl člen týmu. S kolegou jsme hlídali crypto trh, sám jsem se bokem učil
                  forex a nakonec si v GP rozjel a vedl vlastní forex sekci i s livestreamy.
                  Hlavně mi to ukázalo, jak rád se učím <strong>děláním</strong>.
                </p>
                <p data-reveal>
                  Pak přišla realita, doslova. Chvíli jsem dělal realitního makléře a paralelně
                  s tím rozjížděl <strong>Smartapky.cz</strong>. Ze zkušenosti z realit nakonec
                  vzešel i druhý projekt, <strong>Najdinájemníka.cz</strong>. Oba běží dál.
                </p>
                <p data-reveal>
                  Nejvíc času ale dnes dávám <strong>algoritmickému tradingu</strong>. S malým
                  týmem pracujeme na trading projektu, na kterém mám na starosti konkrétní úkoly
                  a postupně se snažím rozumět technické stránce celého systému čím dál líp.
                  Máme podepsané NDA, takže konkrétní detaily tady nenajdeš. Jsem tak zase
                  u trhů, jen z mnohem techničtější strany.
                </p>
                <p data-reveal>
                  Nejvíc mě baví pracovat s lidmi, kteří jsou v něčem výrazně lepší než já, ať
                  už jsou to kluci kolem Smartapek (Václav Michal a Michal Kříž) nebo parťáci
                  v trading týmu. Každý den u toho narážím na to, kolik toho ještě nevím. Beru
                  to jako dobrou zprávu, znamená to, že je pořád kam jít.
                </p>
              </div>

              <div className="about-photos" data-reveal>
                <div className="ph tall">
                  <ImgSlot
                    src="/images/hory-zapad-slunce.jpg"
                    alt="Adam Krenc na horském hřebeni při západu slunce"
                    label="Osobní fotka (4:5)"
                    sizes="(max-width: 940px) 50vw, 360px"
                    objectPosition="center 25%"
                  />
                </div>
                <div className="ph wide">
                  <ImgSlot
                    src="/images/coastal-lounge.jpg"
                    alt="Adam Krenc u moře na výletě v Norsku"
                    label="Osobní fotka (4:3)"
                    sizes="(max-width: 940px) 50vw, 360px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================ CO STAVÍM ============================ */}
        <section className="section section-pad" id="projects">
          <div className="wrap">
            <div className="section-head" data-reveal>
              <span className="eyebrow">02 — Na čem pracuju</span>
              <h2>Tři věci, kterým teď dávám čas.</h2>
              <p>
                Nejvíc ho jde do algoritmického tradingu. Vedle toho běží dva produkty, které
                jsou venku a používají se.
              </p>
            </div>

            <div className="projects-grid">
              <div className="project-card feature" data-reveal>
                <div className="project-top">
                  <span className="status-chip">
                    <span className="live" />
                    Hlavní focus
                  </span>
                  <span className="project-num">/01</span>
                </div>
                <div className="project-body">
                  <h3>Algoritmický trading</h3>
                  <p className="desc">
                    S malým týmem pracuju na algoritmickém trading projektu. Kvůli NDA o něm víc
                    neprozradím.
                  </p>
                </div>
              </div>

              <a
                className="project-card"
                href="https://smartapky.cz"
                target="_blank"
                rel="noopener"
                data-reveal
              >
                <div className="project-top">
                  <span className="status-chip">
                    <span className="live" />
                    Živé
                  </span>
                  <span className="project-num">/02</span>
                </div>
                <div className="project-body">
                  <h3>Smartapky.cz</h3>
                  <p className="desc">
                    AI automatizace pro firmy. Nástroje, které berou rutinu z ramen lidí.
                  </p>
                  <span className="project-link">
                    Navštívit
                    <ArrowUpRight />
                  </span>
                </div>
              </a>

              <a
                className="project-card"
                href="https://najdinajemnika.cz"
                target="_blank"
                rel="noopener"
                data-reveal
              >
                <div className="project-top">
                  <span className="status-chip">
                    <span className="live" />
                    Živé
                  </span>
                  <span className="project-num">/03</span>
                </div>
                <div className="project-body">
                  <h3>Najdinájemníka.cz</h3>
                  <p className="desc">
                    Prověřování nájemníků. Pomáhá pronajímatelům vybrat si s klidem.
                  </p>
                  <span className="project-link">
                    Navštívit
                    <ArrowUpRight />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ============================ JAK PŘEMÝŠLÍM ============================ */}
        <section className="section section-pad" id="approach">
          <div className="wrap">
            <div className="section-head" data-reveal>
              <span className="eyebrow">03 — Jak přemýšlím</span>
              <h2>Pár zásad, kterých se držím.</h2>
            </div>

            <div className="thesis-grid">
              <div className="thesis" data-reveal>
                <span className="n">01</span>
                <p>
                  Nestačí mi, že něco funguje. Chci vědět proč. Jinak se na to nedá spolehnout.
                </p>
              </div>
              <div className="thesis" data-reveal>
                <span className="n">02</span>
                <p>
                  Učím se děláním. Radši pustím něco malého do světa, než to měsíce leštím v
                  šuplíku.
                </p>
              </div>
              <div className="thesis" data-reveal>
                <span className="n">03</span>
                <p>
                  Mám rád jednoduchost. Když to jde vysvětlit jednou větou, je to skoro hotové.
                </p>
              </div>
              <div className="thesis" data-reveal>
                <span className="n">04</span>
                <p>
                  Nejradši pracuju s lidmi, kteří jsou v něčem výrazně lepší než já. Vedle nich
                  se učím rychleji než sám.
                </p>
              </div>
              <div className="thesis" data-reveal>
                <span className="n">05</span>
                <p>
                  Počítám v letech, ne v týdnech. U trhů i u produktů se to jinak ani nedá.
                </p>
              </div>
            </div>

            <div className="tech-block" data-reveal>
              <div className="tech-label">Čím stavím produkty</div>
              <div className="tech-row">
                {["Next.js", "React", "Node", "AI / LLM", "Supabase", "Vercel", "Voice AI"].map(
                  (t) => (
                    <span className="tech-chip" key={t}>
                      <span className="d" />
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ============================ MIMO PRÁCI ============================ */}
        <section className="section section-pad" id="life">
          <div className="wrap">
            <div className="section-head" data-reveal>
              <span className="eyebrow">04 — Mimo práci</span>
              <h2>Když nejsem u počítače, jsem většinou venku.</h2>
            </div>
            <div className="life-intro" data-reveal>
              <p>
                Běhám, jezdím na <strong>silničním kole</strong> a co nejčastěji mizím do{" "}
                <strong>hor</strong>. K tomu moře, dlouhé výlety a cestování. Žádná hlubší pointa
                v tom není, venku je mi prostě dobře.
              </p>
            </div>

            <div className="gallery">
              <div className="cell c1" data-reveal>
                <ImgSlot
                  src="/images/kolo.jpg"
                  alt="Adam Krenc na silničním kole v horách"
                  label="Kolo / Dolomity (hlavní)"
                  sizes="(max-width: 640px) 100vw, 66vw"
                />
              </div>
              <div className="cell c2" data-reveal>
                <ImgSlot
                  src="/images/porsche-trackday.jpg"
                  alt="Adam Krenc na okruhu za volantem Porsche GT3 RS"
                  label="Trackday"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </div>
              <div className="cell c3" data-reveal>
                <ImgSlot
                  src="/images/canyoning-outdoor.jpg"
                  alt="Adam Krenc při canyoningu ve vodopádu"
                  label="Outdoor"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </div>
              <div className="cell c4" data-reveal>
                <ImgSlot
                  src="/images/skialp-vylet.jpg"
                  alt="Adam Krenc na skialpech v horách"
                  label="Skialp"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </div>
              <div className="cell c5" data-reveal>
                <ImgSlot
                  src="/images/bouldering-hala.jpg"
                  alt="Adam Krenc na lezecké stěně v hale"
                  label="Bouldering"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </div>
              <div className="cell c6" data-reveal>
                <ImgSlot
                  src="/images/lezeni-previs.jpg"
                  alt="Adam Krenc na laně pod skalním převisem"
                  label="Lezení"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============================ KONTAKT ============================ */}
        <section className="section section-pad contact" id="contact">
          <div className="wrap">
            <div className="contact-card" data-reveal>
              <div className="contact-head">
                <span className="eyebrow">05 — Kontakt</span>
                <h2 style={{ marginTop: 18 }}>Ozvi se mi.</h2>
                <p>
                  Chceš probrat trading, technologie, nový projekt, nebo jen vyrazit na
                  kolo/kávu? Ozvi se mi.
                </p>

                <div className="contact-tiles">
                  <a className="tile" href="mailto:adam.krenc@smartapky.cz">
                    <span className="ic">
                      <svg viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
                        <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="meta">
                      <span className="lab">Email</span>
                      <span className="val">adam.krenc@smartapky.cz</span>
                    </span>
                    <ArrowUpRight className="go" />
                  </a>
                  <a
                    className="tile"
                    href="https://www.linkedin.com/in/adamkrenc/"
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="ic">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.94 8.5H4.3V20h2.64V8.5ZM5.62 4a1.53 1.53 0 1 0 0 3.06 1.53 1.53 0 0 0 0-3.06ZM20 13.4c0-2.86-1.53-4.19-3.57-4.19-1.64 0-2.38.9-2.79 1.54V8.5H11v11.5h2.64v-6.1c0-1.6.92-2 1.5-2 .77 0 1.22.52 1.22 1.96V20H20v-6.6Z" />
                      </svg>
                    </span>
                    <span className="meta">
                      <span className="lab">LinkedIn</span>
                      <span className="val">Adam Krenc</span>
                      <span className="note">Práce, projekty, spolupráce</span>
                    </span>
                    <ArrowUpRight className="go" />
                  </a>
                  <a
                    className="tile"
                    href="https://www.instagram.com/adamkrenc/"
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="ic">
                      <svg viewBox="0 0 24 24" fill="none">
                        <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.7" />
                        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
                        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
                      </svg>
                    </span>
                    <span className="meta">
                      <span className="lab">Instagram</span>
                      <span className="val">@adamkrenc</span>
                      <span className="note">Klidně i mimo práci</span>
                    </span>
                    <ArrowUpRight className="go" />
                  </a>
                </div>
              </div>

              <div className="contact-form-wrap">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
