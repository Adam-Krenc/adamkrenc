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
                  Founder · AI automatizace · Česko
                </span>
                <h1 data-reveal>
                  Snažím se pochopit svět.
                  <span className="soft">Zatím se mi to moc nedaří.</span>
                </h1>
                <p className="hero-sub" data-reveal>
                  Stavím AI produkty a každý den zjišťuju, kolik toho nevím. Zakladatel{" "}
                  <a href="https://smartapky.cz" target="_blank" rel="noopener">
                    Smartapky.cz
                  </a>{" "}
                  a{" "}
                  <a href="https://najdinajemnika.cz" target="_blank" rel="noopener">
                    Najdinájemníka.cz
                  </a>
                  .
                </p>
                <div className="hero-cta" data-reveal>
                  <a href="#contact" className="btn btn-accent">
                    Napiš mi
                    <ArrowUpRight />
                  </a>
                  <a href="#projects" className="btn btn-ghost">
                    Co stavím
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
                <span className="portrait-tag">adam.jpg</span>
              </div>
            </div>

            <div className="hero-meta" data-reveal>
              <div className="item">
                <span className="k">Staví</span>
                <span className="v">Smartapky.cz</span>
              </div>
              <div className="item">
                <span className="k">Druhý projekt</span>
                <span className="v">Najdinájemníka.cz</span>
              </div>
              <div className="item">
                <span className="k">Začátek</span>
                <span className="v">grafy &amp; trading, v 15</span>
              </div>
              <div className="item">
                <span className="k">Kde</span>
                <span className="v">Ústecký kraj, CZ</span>
              </div>
              <div className="item">
                <span className="k">Mimo práci</span>
                <span className="v">Hory, kolo, lezení</span>
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
                  <h2>Cesta sem nebyla přímá. A to je dobře.</h2>
                </div>
                <p className="lead" data-reveal>
                  Začalo to v patnácti u grafů. V komunitě{" "}
                  <a href="https://www.goldenpocket.cz/" target="_blank" rel="noopener">
                    Golden Pocket
                  </a>{" "}
                  jsem si koupil členství, a protože jsem u toho nedokázal sedět potichu,
                  časem ze mě byl člen týmu. S kolegou jsme hlídali crypto trh, sám jsem se
                  bokem učil forex a nakonec si v GP rozjel a vedl vlastní forex sekci i s
                  livestreamy. Dnes už jen v klidu swinguju SP500 pár hodin týdně. Hlavně mi
                  to ukázalo, jak rád se učím <strong>děláním</strong>.
                </p>
                <p data-reveal>
                  Pak přišla realita, doslova. Chvíli jsem dělal realitního makléře a paralelně
                  s tím rozjížděl Smartapky.cz. Ze zkušenosti z realit nakonec vzešel i druhý
                  projekt, <strong>Najdinájemníka.cz</strong>.
                </p>
                <p data-reveal>
                  Ve <strong>Smartapky</strong> to táhnu s lidmi, kterých si vážím. Václav
                  Michal byl můj nejlepší učitel na střední škole, sedli jsme si už během
                  studia a postupně se z nás stali skvělí kolegové, co-foundeři a hlavně kamarádi.
                  Michal Kříž byl zase nejlepší student naší školy a vyhrál nespočet IT soutěží,
                  takhle talentovaného člověka jsem chtěl mít v týmu za každou cenu.
                </p>
                <p data-reveal>
                  Vedle toho aktivně pracuju i na forexovém projektu s parťákem z Golden Pocket
                  a dalšími třemi ultra chytrými lidmi, se kterými mám podepsané NDA, takže o
                  tom zatím víc neprozradím. Nejvíc mě baví přesně tohle: obklopovat se lidmi,
                  kteří jsou extrémně chytří a pracovití. A každý den narážím na to, kolik toho
                  ještě nevím. Beru to jako dobrou zprávu, znamená to, že je pořád kam jít.
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
              <span className="eyebrow">02 — Co stavím</span>
              <h2>Dva produkty, které dnes žijí.</h2>
              <p>
                Stavím věci, které mají vyřešit konkrétní problém. Žádné demo do šuplíku, ale
                nástroje, co jsou venku a používají se.
              </p>
            </div>

            <div className="projects-grid">
              <a
                className="project-card feature"
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
                  <span className="project-num">/01</span>
                </div>
                <div className="project-body">
                  <h3>Smartapky.cz</h3>
                  <p className="desc">
                    AI automatizace pro firmy. Stavím nástroje, které berou rutinu z ramen lidí.
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
                  <span className="project-num">/02</span>
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
                  Učím se děláním. Radši pustím něco malého do světa, než to měsíce leštím v
                  šuplíku.
                </p>
              </div>
              <div className="thesis" data-reveal>
                <span className="n">02</span>
                <p>Nejdřív problém, pak technologie. Nástroj je vždycky až druhý v řadě.</p>
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
                  Zpětnou vazbu beru jako palivo, ne jako kritiku. Posune mě rychleji než vlastní
                  dohady.
                </p>
              </div>
              <div className="thesis" data-reveal>
                <span className="n">05</span>
                <p>
                  Nejlepší nápady i rozhodnutí mi zatím vždycky přišly v kopcích, ne u monitoru.
                  Proto si na pohyb venku držím čas stejně pevně jako na práci.
                </p>
              </div>
            </div>

            <div className="tech-block" data-reveal>
              <div className="tech-label">Čím stavím</div>
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
              <h2>Co se naučím v kopcích, použiju u monitoru.</h2>
            </div>
            <div className="life-intro" data-reveal>
              <p>
                Mimo obrazovku nejradši šlapu do kopce. <strong>Silniční kolo a Dolomity</strong>{" "}
                mě naučily o disciplíně a dlouhých cílech víc než kterýkoli kurz. Výsledek
                nepřijde dnes, ale za stovky malých dní, kdy se nikomu nechce. Stejně beru i
                práci.
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
                <span className="cap">kolo.jpg</span>
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
                  Chceš probrat nový AI projekt, možnost spolupráce, nebo jen vyrazit na
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
                      <span className="note">Klidně i mimo AI</span>
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
