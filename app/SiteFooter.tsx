export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-talk">
          <div className="foot-talk-left">
            <span className="eyebrow">— The studio</span>
            <p className="foot-statement">
              Modern, accessible websites for small businesses. Built in Southern
              California, for the <em>open web.</em>
            </p>
          </div>
          <div className="foot-talk-right">
            <a href="mailto:jagib07@gmail.com" className="foot-email">
              jagib07@gmail.com
            </a>
            <a
              href="https://instagram.com/webcheer.media"
              target="_blank"
              rel="noopener"
              className="foot-social"
            >
              @webcheer.media
            </a>
            <span className="foot-pill" aria-label="Currently booking summer 2026">
              <span className="foot-pill-dot" aria-hidden="true" />
              Booking · Summer 2026
            </span>
          </div>
        </div>

        <div className="foot-preamble" aria-hidden="true">
          <span>SOUTHERN CALIFORNIA</span>
          <span className="foot-preamble-rule" />
          <span>WCAG 2.1 AA · Conformant</span>
        </div>

        <div className="foot-wordmark" aria-hidden="true">
          Web<em>Cheer</em>
        </div>

        <div className="foot-bottom">
          <span>© 2026 WebCheer.</span>
          <span className="spacer" />
          <a href="#">Privacy</a>
          <a href="#">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}
