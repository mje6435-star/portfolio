/* ==========================================================================
   Portfolio : logique du site (rendu, langue, fenêtre de détail, animation)
   Le contenu se modifie dans data.js, pas ici.
   ========================================================================== */
(() => {
  'use strict';

  const D = window.PORTFOLIO;
  if (!D) return;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ------------------------------ Langue ------------------------------ */
  const SUPPORTED = ['fr', 'en'];
  let lang = 'fr';
  try {
    const saved = localStorage.getItem('portfolio-lang');
    if (SUPPORTED.includes(saved)) lang = saved;
  } catch (_) { /* stockage indisponible : on reste en français */ }

  /** Texte traduit : accepte une chaîne ou un objet { fr, en }. */
  const t = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? v[lang] ?? v.fr : v);
  const tr = (key) => D.ui[lang][key] ?? D.ui.fr[key] ?? key;

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ------------------------------ Icônes ------------------------------ */
  const ICONS = {
    home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v10h13V10"/><path d="M10 20v-5.5h4V20"/>',
    scan: '<path d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16"/><circle cx="12" cy="10.5" r="2.8"/><path d="M7.5 17c.8-2 2.4-3.1 4.5-3.1s3.7 1.1 4.5 3.1"/>',
    cpu: '<rect x="6.5" y="6.5" width="11" height="11" rx="2"/><rect x="10" y="10" width="4" height="4" rx=".8"/><path d="M9.5 3v3.5M14.5 3v3.5M9.5 17.5V21M14.5 17.5V21M3 9.5h3.5M3 14.5h3.5M17.5 9.5H21M17.5 14.5H21"/>',
    shield: '<path d="M12 3 19.5 6v5.5c0 4.5-3 7.8-7.5 9.5-4.5-1.7-7.5-5-7.5-9.5V6L12 3z"/><path d="m9 12 2.2 2.2L15.5 10"/>',
    server: '<rect x="3.5" y="4" width="17" height="6.5" rx="1.8"/><rect x="3.5" y="13.5" width="17" height="6.5" rx="1.8"/><path d="M7.5 7.25h.01M7.5 16.75h.01M11 7.25h6M11 16.75h6"/>',
    filter: '<path d="M4 5h16l-6.2 7.6V19l-3.6-1.8v-4.6L4 5z"/>',
    radio: '<circle cx="12" cy="12" r="1.8"/><path d="M8.2 8.2a5.4 5.4 0 0 0 0 7.6M15.8 8.2a5.4 5.4 0 0 1 0 7.6M5.3 5.3a9.5 9.5 0 0 0 0 13.4M18.7 5.3a9.5 9.5 0 0 1 0 13.4"/>',
    bulb: '<path d="M9.5 17.5h5M10.3 20.5h3.4"/><path d="M12 3.5a5.7 5.7 0 0 0-3.3 10.4c.7.5 1 1.2 1 2h4.6c0-.8.3-1.5 1-2A5.7 5.7 0 0 0 12 3.5z"/>',
    bell: '<path d="M6 16.5v-5a6 6 0 0 1 12 0v5l1.8 1.8H4.2L6 16.5z"/><path d="M10 21h4"/>',
    layers: '<path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8 12 3.5z"/><path d="m3.5 12 8.5 4.5 8.5-4.5"/><path d="m3.5 16 8.5 4.5 8.5-4.5"/>',
    backup: '<path d="M3.5 14 6 6.5A2 2 0 0 1 7.9 5h8.2A2 2 0 0 1 18 6.5l2.5 7.5"/><rect x="3.5" y="14" width="17" height="6" rx="1.8"/><path d="M7.5 17h.01M11 17h5.5"/>',
    image: '<rect x="3.5" y="4.5" width="17" height="15" rx="2.2"/><circle cx="9" cy="10" r="1.6"/><path d="m4 17 5-4.5 3.5 3 3-2.5 4.5 4"/>',
    terminal: '<rect x="3" y="4.5" width="18" height="15" rx="2.2"/><path d="m7 10 3 2.5L7 15M12.5 15.5H17"/>',
    globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.8 2.5 2.8 14.5 0 17M12 3.5c-2.8 2.5-2.8 14.5 0 17"/>',
    trophy: '<path d="M8 4.5h8v5a4 4 0 0 1-8 0v-5z"/><path d="M8 6H4.5v1.5A3 3 0 0 0 8 10.5M16 6h3.5v1.5a3 3 0 0 1-3.5 3M12 13.5v4M8.5 20h7"/>',
    database: '<ellipse cx="12" cy="6" rx="7.5" ry="2.8"/><path d="M4.5 6v6c0 1.6 3.4 2.8 7.5 2.8s7.5-1.2 7.5-2.8V6M4.5 12v6c0 1.6 3.4 2.8 7.5 2.8s7.5-1.2 7.5-2.8v-6"/>',
    award: '<circle cx="12" cy="9" r="5.5"/><path d="m9.6 9 1.6 1.6 3.2-3.2"/><path d="m8.4 13.3-1.4 7.2 5-2.6 5 2.6-1.4-7.2"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
  };
  const icon = (name, extra = '') =>
    `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true" ${extra}>${ICONS[name] || ICONS.globe}</svg>`;

  /* ------------------------- Couverture d'un projet ------------------------- */
  /** Illustration générée (fond marine + grille + icône), aux couleurs de la palette CSS.
      `uid` évite les doublons d'id SVG. */
  function coverSVG(p, uid) {
    const id = `cover-${p.id}-${uid}`;
    return `<svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="${id}-s" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:var(--white)"/><stop offset="1" style="stop-color:var(--blue-light)"/></linearGradient>
        <radialGradient id="${id}-r" cx=".8" cy=".15" r=".95"><stop offset="0" style="stop-color:var(--blue);stop-opacity:.55"/><stop offset="1" style="stop-color:var(--blue);stop-opacity:0"/></radialGradient>
        <pattern id="${id}-p" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" style="stroke:var(--white)" stroke-opacity=".06"/></pattern>
      </defs>
      <rect width="640" height="360" style="fill:var(--navy)"/>
      <rect width="640" height="360" fill="url(#${id}-r)"/>
      <rect width="640" height="360" fill="url(#${id}-p)"/>
      <g transform="translate(320 180)"><g class="cover__icon"><g transform="translate(-84 -84) scale(7)" fill="none" stroke="url(#${id}-s)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">${ICONS[p.icon] || ICONS.globe}</g></g></g>
    </svg>`;
  }

  const coverHTML = (p, uid) =>
    p.image ? `<img src="${esc(p.image)}" alt="" loading="lazy">` : coverSVG(p, uid);

  /* ------------------------------ Rendu ------------------------------ */
  const el = {
    filters: $('#filters'),
    projects: $('#projects'),
    skills: $('#skills'),
    education: $('#education'),
    work: $('#work'),
    certs: $('#certs'),
    modules: $('#modules'),
    interests: $('#interests'),
    languages: $('#languages'),
    social: $('#social'),
    dialog: $('#dialog'),
    dialogBody: $('#dialog-body'),
  };

  let currentFilter = 'all';
  let currentProject = null;

  const FILTERS = ['all', 'iot', 'network', 'systems', 'ai', 'web'];

  function renderFilters() {
    el.filters.innerHTML = FILTERS.map((f) => {
      const n = f === 'all' ? D.projects.length : D.projects.filter((p) => p.cat === f).length;
      if (n === 0) return '';
      return `<button class="filter" type="button" data-filter="${f}" aria-pressed="${f === currentFilter}">${esc(tr('filter.' + f))} <small>${n}</small></button>`;
    }).join('');
  }

  /** Carte compacte : icône + titre. Le détail (image, résumé, tags) est dans la fenêtre. */
  function cardHTML(p, i) {
    return `<article class="card" style="--i:${i}" data-cat="${p.cat}">
      <span class="card__icon">${icon(p.icon)}</span>
      <div class="card__body">
        <span class="card__meta">${esc(t(p.meta))}</span>
        <h3><button class="card__open" type="button" data-open="${p.id}" title="${esc(tr('card.open'))}">${esc(t(p.title))}</button></h3>
      </div>
      <span class="card__more" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
    </article>`;
  }

  function renderProjects() {
    const list = currentFilter === 'all' ? D.projects : D.projects.filter((p) => p.cat === currentFilter);
    el.projects.innerHTML = list.map(cardHTML).join('');
  }

  function renderSkills() {
    el.skills.innerHTML = D.skills
      .map((g) => {
        const items = g.items.map((x) => `<li>${esc(t(x))}</li>`).join('');
        return `<article class="skill">
          <div class="skill__head"><span class="skill__icon">${icon(g.icon)}</span><h3>${esc(t(g.title))}</h3></div>
          <ul class="chips">${items}</ul>
        </article>`;
      })
      .join('');
  }

  function renderTimeline() {
    const pointsHTML = (points) => `<ul>${t(points).map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`;

    el.education.innerHTML = D.education
      .map(
        (e) => `<li>
          <span class="timeline__period">${esc(t(e.period))}</span>
          <h4>${esc(t(e.title))}</h4>
          <p class="timeline__place">${esc(t(e.place))}</p>
          ${e.points ? pointsHTML(e.points) : ''}
        </li>`
      )
      .join('');

    el.work.innerHTML = D.work
      .map(
        (w) => `<li>
          <span class="timeline__period">${esc(t(w.period))}</span>
          <h4>${esc(t(w.title))}</h4>
          ${pointsHTML(w.points)}
        </li>`
      )
      .join('');
  }

  function renderCerts() {
    const link = (href, key) =>
      href ? `<a class="btn btn--ghost" href="${esc(href)}" target="_blank" rel="noopener">${esc(tr(key))}</a>` : '';
    el.certs.innerHTML = D.certifications
      .map((c) => {
        const actions = link(c.verify, 'cert.verify') + link(c.file, 'cert.pdf');
        // En-tête cliquable (accordéon natif) qui ouvre « Ce que j'ai appris ».
        const head = `<span class="cert__icon">${icon('award')}</span>
              <span class="cert__name">${esc(c.title)}</span>
              <span class="cert__meta">${esc(c.issuer)} · ${esc(t(c.date))}</span>`;
        return `<li class="panel cert">
          ${c.learned
            ? `<details class="cert__details">
            <summary class="cert__head">${head}
              <span class="cert__toggle" aria-hidden="true">${icon('chevron')}</span>
            </summary>
            <div class="cert__learned"><strong>${esc(tr('cert.learned'))}</strong><p>${esc(t(c.learned))}</p></div>
          </details>`
            : `<div class="cert__head">${head}</div>`}
          <p class="cert__id">${esc(tr('cert.id'))} <code>${esc(c.credentialId)}</code></p>
          ${actions ? `<div class="cert__actions">${actions}</div>` : ''}
        </li>`;
      })
      .join('');
  }

  function renderModules() {
    el.modules.innerHTML = D.modules
      .map((m) => `<li class="module"><span class="module__n">${esc(m.n)}</span><span>${esc(t(m.title))}</span></li>`)
      .join('');
  }

  function renderAbout() {
    el.interests.innerHTML = D.interests.map((x) => `<li>${esc(t(x))}</li>`).join('');
    el.languages.innerHTML = D.languages
      .map((l) => `<div><dt>${esc(t(l.name))}${esc(tr('about.colon'))}</dt><dd>${esc(t(l.level))}</dd></div>`)
      .join('');
  }

  function renderStats() {
    $('#stat-projects').textContent = D.projects.length;
    $('#stat-modules').textContent = D.modules.length;
    // Compté dans la section Compétences déjà rendue : reste juste si on ajoute ou retire une compétence.
    $('#stat-skills').textContent = $$('li', el.skills).length;
  }

  function renderAll() {
    renderFilters();
    renderProjects();
    renderSkills();
    renderTimeline();
    renderCerts();
    renderModules();
    renderAbout();
    renderStats();
  }

  /* ------------------------------ i18n statique ------------------------------ */
  function applyI18n() {
    document.documentElement.lang = lang;
    document.title = tr('meta.title');
    const desc = $('meta[name="description"]');
    if (desc) desc.setAttribute('content', tr('meta.description'));
    const ogd = $('meta[property="og:description"]');
    if (ogd) ogd.setAttribute('content', tr('meta.description'));

    $$('[data-i18n]').forEach((n) => { n.textContent = tr(n.dataset.i18n); });
    $$('[data-i18n-html]').forEach((n) => { n.innerHTML = tr(n.dataset.i18nHtml); });
    $$('[data-i18n-label]').forEach((n) => { n.setAttribute('aria-label', tr(n.dataset.i18nLabel)); });
    $$('[data-i18n-title]').forEach((n) => { n.title = tr(n.dataset.i18nTitle); });
  }

  function setLang(next) {
    if (!SUPPORTED.includes(next) || next === lang) return;
    lang = next;
    try { localStorage.setItem('portfolio-lang', lang); } catch (_) { /* ignoré */ }
    applyI18n();
    renderAll();
    if (el.dialog.open && currentProject) renderDialog();
  }

  /* ------------------------------ Fenêtre de détail ------------------------------ */
  function renderDialog() {
    const p = D.projects.find((x) => x.id === currentProject);
    if (!p) return;
    const points = t(p.points).map((x) => `<li>${esc(x)}</li>`).join('');
    const tags = p.tags.map((x) => `<li class="tag">${esc(t(x))}</li>`).join('');
    const links = (p.links || [])
      .map((l) => `<a class="btn btn--ghost" href="${esc(l.href)}" target="_blank" rel="noopener noreferrer">${esc(t(l.label))}</a>`)
      .join('');

    el.dialogBody.innerHTML = `
      <button class="dialog__close" type="button" data-close aria-label="${esc(tr('modal.close'))}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>
      </button>
      <div class="cover">${coverHTML(p, 'dlg')}</div>
      <div class="dialog__content">
        <span class="card__meta">${esc(t(p.meta))}</span>
        <h2 id="dialog-title">${esc(t(p.title))}</h2>
        <p class="dialog__summary">${esc(t(p.summary))}</p>
        <div><h3>${esc(tr('modal.points'))}</h3><ul class="dialog__points">${points}</ul></div>
        <div><h3>${esc(tr('modal.tools'))}</h3><ul class="tags">${tags}</ul></div>
        ${links ? `<div class="dialog__links">${links}</div>` : ''}
      </div>`;
  }

  function openProject(id) {
    if (!D.projects.some((p) => p.id === id)) return;
    currentProject = id;
    renderDialog();
    if (!el.dialog.open) el.dialog.showModal();
    el.dialogBody.scrollTop = 0;
  }

  el.dialog.addEventListener('click', (e) => {
    if (e.target === el.dialog || e.target.closest('[data-close]')) el.dialog.close();
  });
  el.dialog.addEventListener('close', () => { currentProject = null; });

  /* ------------------------------ Événements ------------------------------ */
  document.addEventListener('click', (e) => {
    const open = e.target.closest('[data-open]');
    if (open) openProject(open.dataset.open);
  });

  el.filters.addEventListener('click', (e) => {
    const b = e.target.closest('[data-filter]');
    if (!b) return;
    currentFilter = b.dataset.filter;
    renderFilters();
    renderProjects();
    $(`[data-filter="${currentFilter}"]`, el.filters)?.focus({ preventScroll: true });
  });

  $('#lang').addEventListener('click', () => setLang(lang === 'fr' ? 'en' : 'fr'));

  /* Menu mobile */
  const nav = $('#nav');
  const burger = $('#burger');
  const setMenu = (open) => {
    nav.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
  };
  burger.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  window.matchMedia('(min-width: 761px)').addEventListener('change', () => setMenu(false));

  /* Lien actif dans la navigation */
  const navLinks = $$('a', nav);
  if ('IntersectionObserver' in window) {
    const sections = navLinks.map((a) => $(a.getAttribute('href'))).filter(Boolean);
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          navLinks.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id));
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* Apparition au scroll */
  const revealEls = $$('.reveal');
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    );
    revealEls.forEach((n) => io.observe(n));
  } else {
    revealEls.forEach((n) => n.classList.add('in'));
  }

  /* ------------------------------ Contact ------------------------------ */
  const address = `${D.profile.emailUser}@${D.profile.emailDomain}`;
  $('#mail-btn').href = `mailto:${address}`;
  $('#mail-text').textContent = address;

  const copyBtn = $('#copy-btn');
  const copyLabel = $('span', copyBtn);
  let copyTimer = 0;
  copyBtn.addEventListener('click', async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(address);
      ok = true;
    } catch (_) {
      const ta = document.createElement('textarea');
      ta.value = address;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
      document.body.append(ta);
      ta.select();
      try { ok = document.execCommand('copy'); } catch (__) { ok = false; }
      ta.remove();
    }
    if (!ok) return;
    copyLabel.textContent = tr('contact.copied');
    $('#copy-status').textContent = tr('contact.copied');
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => {
      copyLabel.textContent = tr('contact.copy');
      $('#copy-status').textContent = '';
    }, 2200);
  });

  /* ------------------------------ CV ------------------------------ */
  // Aperçu intégré + téléchargement. Sur mobile, l'aperçu est masqué (CSS) : « Ouvrir le CV » prend le relais.
  if (D.profile.cv) {
    $('#cv-frame').src = `${D.profile.cv}#view=FitH`;
    $('#cv-download').href = D.profile.cv;
    $('#cv-open').href = D.profile.cv;
  } else {
    $('#cv').hidden = true;
    $('a[href="#cv"]', nav).hidden = true;
  }
  // Le pseudo GitHub est repris de l'URL pour rester lisible : « GitHub · pseudo ».
  const githubUser = (D.profile.github || '').split('/').filter(Boolean).pop();
  const socials = [['GitHub · ' + githubUser, D.profile.github], ['LinkedIn', D.profile.linkedin]].filter(([, url]) => url);
  el.social.innerHTML = socials
    .map(([name, url]) => `<li><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(name)}</a></li>`)
    .join('');

  /* ------------------------------ Animation du hero ------------------------------ */
  /** Réseau de nœuds reliés, avec des paquets qui circulent : clin d'œil à l'infrastructure. */
  function initNetwork(canvas) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const hero = canvas.closest('.hero');

    let w = 0, h = 0, dpr = 1, link = 140;
    let nodes = [];
    let packets = [];
    let pairs = [];
    let raf = 0, last = 0, nextPacket = 0;
    let inView = true;
    const mouse = { x: 0, y: 0, on: false };

    // Couleurs lues dans la palette CSS (:root) : aucune couleur n'est codée ici.
    const css = getComputedStyle(document.documentElement);
    const color = (name) => css.getPropertyValue(name).trim();
    const C = {
      accent: color('--blue-light'), node: color('--blue-pale'), light: color('--white'),
      navy: color('--navy'), blue: color('--blue'),
    };
    // Couleur selon la hauteur : claire sur le haut marine, marine léger sur le bas clair du dégradé (--hero-fade).
    const shade = (top, bottom) => {
      const fade = parseFloat(getComputedStyle(hero).getPropertyValue('--hero-fade')) || 0;
      const from = Math.max(0, 1 - (fade * 0.65) / h), to = Math.max(from, 1 - (fade * 0.35) / h);
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, top); g.addColorStop(from, top); g.addColorStop(to, bottom); g.addColorStop(1, bottom);
      return g;
    };
    let paint = { line: C.accent, node: C.node, hub: C.accent, light: C.light };

    const rand = (a, b) => a + Math.random() * (b - a);
    const dot = (x, y, r, fill, alpha) => {
      ctx.globalAlpha = alpha; ctx.fillStyle = fill;
      ctx.beginPath(); ctx.arc(x, y, r, 0, 6.2832); ctx.fill();
    };

    function resize() {
      const r = canvas.getBoundingClientRect();
      if (!r.width || !r.height) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      paint = { line: shade(C.accent, C.navy), node: shade(C.node, C.navy), hub: shade(C.accent, C.blue), light: shade(C.light, C.navy) };
      link = Math.max(105, Math.min(165, w / 8));
      const count = Math.round(Math.min(85, Math.max(26, (w * h) / 17000)));
      nodes = Array.from({ length: count }, () => ({
        x: rand(0, w), y: rand(0, h),
        vx: rand(-0.16, 0.16), vy: rand(-0.16, 0.16),
        r: rand(1.1, 2.1),
        hub: Math.random() < 0.14,
      }));
      packets = [];
      if (reducedMotion.matches) draw(0);
    }

    function draw(dt) {
      ctx.clearRect(0, 0, w, h);
      pairs.length = 0;

      for (const n of nodes) {
        if (dt) {
          n.x += n.vx * dt * 60;
          n.y += n.vy * dt * 60;
          if (n.x < -20) n.x = w + 20; else if (n.x > w + 20) n.x = -20;
          if (n.y < -20) n.y = h + 20; else if (n.y > h + 20) n.y = -20;
        }
      }

      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > link * link) continue;
          const k = 1 - Math.sqrt(d2) / link;
          ctx.globalAlpha = k * 0.5; ctx.strokeStyle = paint.line;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          pairs.push(i, j);
        }
        if (mouse.on) {
          const dx = a.x - mouse.x, dy = a.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < link * 1.35) {
            const k = 1 - d / (link * 1.35);
            ctx.globalAlpha = k * 0.7; ctx.strokeStyle = paint.light;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
            if (dt) { a.x -= dx * 0.0009 * dt * 60; a.y -= dy * 0.0009 * dt * 60; }
          }
        }
      }

      for (const n of nodes) {
        if (n.hub) {
          dot(n.x, n.y, n.r * 4.2, paint.hub, 0.18);
          dot(n.x, n.y, n.r * 1.5, paint.hub, 1);
        } else {
          dot(n.x, n.y, n.r, paint.node, 0.75);
        }
      }

      if (mouse.on) {
        dot(mouse.x, mouse.y, 14, paint.light, 0.18);
        dot(mouse.x, mouse.y, 3, paint.light, 1);
      }

      // Paquets qui voyagent d'un nœud à un voisin
      if (dt) {
        nextPacket -= dt;
        if (nextPacket <= 0 && pairs.length) {
          const k = (Math.random() * (pairs.length / 2) | 0) * 2;
          packets.push({ a: nodes[pairs[k]], b: nodes[pairs[k + 1]], t: 0, v: rand(0.7, 1.3) });
          nextPacket = rand(0.18, 0.45);
        }
      }
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.t += (dt || 0) * p.v;
        if (p.t >= 1) { packets.splice(i, 1); continue; }
        const x = p.a.x + (p.b.x - p.a.x) * p.t;
        const y = p.a.y + (p.b.y - p.a.y) * p.t;
        dot(x, y, 7, paint.line, 0.3);
        dot(x, y, 2.2, paint.light, 1);
      }
      ctx.globalAlpha = 1;
    }

    function frame(now) {
      raf = 0;
      if (!inView || document.hidden) return;
      const dt = Math.min((now - last) / 1000, 0.05) || 0.016;
      last = now;
      draw(dt);
      raf = requestAnimationFrame(frame);
    }

    function start() {
      if (raf || reducedMotion.matches) return;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    }

    if ('ResizeObserver' in window) new ResizeObserver(resize).observe(canvas);
    else window.addEventListener('resize', resize);
    resize();

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([en]) => {
        inView = en.isIntersecting;
        if (inView) start();
      }).observe(hero);
    }
    document.addEventListener('visibilitychange', () => { if (!document.hidden) start(); });

    hero.addEventListener('pointermove', (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.on = e.pointerType !== 'touch';
    });
    hero.addEventListener('pointerleave', () => { mouse.on = false; });

    reducedMotion.addEventListener('change', () => {
      if (reducedMotion.matches) { cancelAnimationFrame(raf); raf = 0; draw(0); } else start();
    });

    if (reducedMotion.matches) draw(0); else start();
  }

  /* ------------------------------ Démarrage ------------------------------ */
  applyI18n();
  renderAll();
  initNetwork($('#net'));
})();
