(function () {
  var KEY = 'aq-rgpd';
  if (localStorage.getItem(KEY)) return;

  function init() {
    if (document.getElementById('rgpd-banner')) return;

    var banner = document.createElement('div');
    banner.id = 'rgpd-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Politique de cookies');
    banner.style.cssText = [
      'position:fixed', 'bottom:0', 'left:0', 'right:0', 'z-index:9999',
      'background:#172e20', 'border-top:1px solid rgba(255,255,255,0.1)',
      'padding:1rem 2rem', 'display:flex', 'flex-wrap:wrap',
      'align-items:center', 'gap:1rem', 'justify-content:space-between',
      'font-family:Roboto,sans-serif', 'font-size:0.82rem',
      'color:rgba(255,255,255,0.7)', 'line-height:1.6',
      'box-shadow:0 -4px 24px rgba(0,0,0,0.35)'
    ].join(';');

    banner.innerHTML =
      '<p style="margin:0;max-width:640px;">' +
        'Ce site utilise des cookies strictement n\u00e9cessaires \u00e0 son fonctionnement. ' +
        'Aucun cookie publicitaire n\'est d\u00e9pos\u00e9. ' +
        '<a href="/mentions-legales.html" style="color:#C9A84C;text-decoration:underline;">' +
        'En savoir plus</a>' +
      '</p>' +
      '<div style="display:flex;gap:0.75rem;flex-shrink:0;flex-wrap:wrap;">' +
        '<button id="rgpd-accept" style="background:#C9A84C;color:#172e20;border:none;' +
        'border-radius:6px;padding:0.5rem 1.25rem;font-size:0.82rem;font-weight:700;' +
        'cursor:pointer;font-family:Chivo,sans-serif;letter-spacing:0.02em;">J\'accepte</button>' +
        '<button id="rgpd-refuse" style="background:transparent;color:rgba(255,255,255,0.55);' +
        'border:1px solid rgba(255,255,255,0.2);border-radius:6px;padding:0.5rem 1.25rem;' +
        'font-size:0.82rem;cursor:pointer;font-family:Roboto,sans-serif;">Continuer sans accepter</button>' +
      '</div>';

    document.body.appendChild(banner);

    function dismiss(val) {
      localStorage.setItem(KEY, val);
      banner.style.transition = 'opacity 0.25s,transform 0.25s';
      banner.style.opacity = '0';
      banner.style.transform = 'translateY(8px)';
      setTimeout(function () { banner.remove(); }, 300);
    }

    document.getElementById('rgpd-accept').addEventListener('click', function () { dismiss('a'); });
    document.getElementById('rgpd-refuse').addEventListener('click', function () { dismiss('r'); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
