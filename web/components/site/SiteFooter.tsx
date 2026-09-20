export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <span className="fm">
              <span className="dot" />
              Adam Krenc
            </span>
            <p className="claim">
              Trading, technologie a pořád dost věcí k pochopení.
            </p>
          </div>
          <div className="footer-links">
            <a href="mailto:adam.krenc@smartapky.cz">adam.krenc@smartapky.cz</a>
            <a
              href="https://www.linkedin.com/in/adamkrenc/"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/adamkrenc/"
              target="_blank"
              rel="noopener"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Adam Krenc. Vše vlastními silami.</span>
          <a href="/zasady-ochrany-osobnich-udaju.pdf" target="_blank" rel="noopener">
            Zásady ochrany osobních údajů
          </a>
        </div>
      </div>
    </footer>
  );
}
