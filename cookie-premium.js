document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("cookieConsentSettings")) return;

  const overlay = document.createElement("div");
  overlay.className = "cookie-modal-overlay";
  overlay.id = "cookieModalOverlay";

  overlay.innerHTML = `
    <div class="cookie-modal" role="dialog" aria-modal="true" aria-labelledby="cookieTitle">
      <span class="cookie-badge">Privacy</span>
      <h3 id="cookieTitle">Gestisci le preferenze cookie</h3>
      <p>
        Utilizziamo cookie tecnici necessari al corretto funzionamento del sito e,
        previo consenso, cookie analitici per migliorare l’esperienza di navigazione.
        Puoi accettare tutti i cookie, rifiutare quelli opzionali oppure personalizzare le preferenze.
        Consulta anche la <a href="cookie-policy.html">Cookie Policy</a>.
      </p>

      <div class="cookie-actions">
        <button type="button" class="cookie-btn primary" id="cookieAcceptAll">Accetta tutto</button>
        <button type="button" class="cookie-btn secondary" id="cookieRejectAll">Rifiuta opzionali</button>
        <button type="button" class="cookie-btn ghost" id="cookieCustomize">Personalizza</button>
      </div>

      <div class="cookie-settings" id="cookieSettingsPanel">
        <div class="cookie-option">
          <div class="cookie-option-text">
            <strong>Cookie tecnici</strong>
            <span>Necessari per il corretto funzionamento del sito. Sono sempre attivi.</span>
          </div>
          <label class="cookie-switch">
            <input type="checkbox" checked disabled>
            <span class="cookie-slider"></span>
          </label>
        </div>

        <div class="cookie-option">
          <div class="cookie-option-text">
            <strong>Cookie analitici</strong>
            <span>Utili per raccogliere statistiche aggregate e migliorare contenuti e prestazioni del sito.</span>
          </div>
          <label class="cookie-switch">
            <input type="checkbox" id="analyticsCookies">
            <span class="cookie-slider"></span>
          </label>
        </div>

        <div class="cookie-save-row">
          <button type="button" class="cookie-btn primary" id="cookieSaveSettings">Salva preferenze</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const settingsPanel = document.getElementById("cookieSettingsPanel");
  const analyticsToggle = document.getElementById("analyticsCookies");

  document.getElementById("cookieCustomize").addEventListener("click", function () {
    settingsPanel.classList.toggle("open");
  });

  document.getElementById("cookieAcceptAll").addEventListener("click", function () {
    const consent = {
      necessary: true,
      analytics: true,
      choice: "accepted_all"
    };
    localStorage.setItem("cookieConsentSettings", JSON.stringify(consent));
    overlay.remove();
  });

  document.getElementById("cookieRejectAll").addEventListener("click", function () {
    const consent = {
      necessary: true,
      analytics: false,
      choice: "rejected_optional"
    };
    localStorage.setItem("cookieConsentSettings", JSON.stringify(consent));
    overlay.remove();
  });

  document.getElementById("cookieSaveSettings").addEventListener("click", function () {
    const consent = {
      necessary: true,
      analytics: analyticsToggle.checked,
      choice: "custom"
    };
    localStorage.setItem("cookieConsentSettings", JSON.stringify(consent));
    overlay.remove();
  });
});