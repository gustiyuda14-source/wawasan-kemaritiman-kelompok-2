/**
 * Mesin deck: render, navigasi, chrome, dan partikel latar.
 * Konten datang dari content.js lewat window.DECK_CONTENT.
 */

(function () {
  'use strict';

  const slides = window.DECK_CONTENT || [];
  const deckEl = document.getElementById('deck');
  const fillEl = document.querySelector('.progress-fill');
  const sectionEl = document.querySelector('.chrome-section');
  const presenterEl = document.querySelector('.chrome-presenter');
  const counterEl = document.querySelector('.counter');
  const prevBtn = document.querySelector('.nav-btn--prev');
  const nextBtn = document.querySelector('.nav-btn--next');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Satu pola visual per pokok bahasan. Pemetaan tinggal di renderer karena
  // ini keputusan presentasi, bukan bagian dari materi akademik.
  const conceptLayouts = {
    'Definisi & Ruang Lingkup': 'funnel',
    'Maritime Civilization': 'mindmap',
    'Human Resources Kemaritiman': 'fishbone',
    'Coastal Communities': 'fishbone',
    'Fisheries & Aquaculture': 'exploded',
    'Maritime Tourism': 'bento',
    'Shipping, Logistics & Shipbuilding': 'exploded',
    'Blue Economy Indonesia': 'mindmap',
  };

  let current = 0;

  /* ---------------------------------------------------------------- render */

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    })[c]);

  function citationsHtml(list) {
    if (!list || !list.length) return '';
    const items = list
      .map(
        (c) =>
          `<li><a href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">${esc(c.text)}</a></li>`
      )
      .join('');
    return `<div class="citations"><div class="citations-title">Sitasi</div><ul class="citations-list">${items}</ul></div>`;
  }

  function conceptSourceHtml(list) {
    if (!list || !list.length) return '';
    const items = list
      .map(
        (c) =>
          `<a href="${esc(c.url)}" title="${esc(c.text)}" target="_blank" rel="noopener noreferrer">${esc(c.short || c.text)}</a>`
      )
      .join(' &middot; ');
    return `<p class="concept-source">Sumber konsep: ${items}</p>`;
  }

  function silhouetteHtml(visual) {
    if (!visual) return '';
    return `<div class="visual-silhouette" aria-hidden="true">
      <img src="${esc(visual.src)}" alt="" loading="lazy" decoding="async">
    </div>`;
  }

  function infographicHtml(s) {
    const layout = conceptLayouts[s.section] || 'bento';
    const items = s.keyPoints
      .map((point, i) => `<li><span class="info-num">${String(i + 1).padStart(2, '0')}</span><span>${esc(point)}</span></li>`)
      .join('');

    if (layout === 'mindmap') {
      return `<div class="infographic infographic--mindmap" aria-label="Peta konsep ${esc(s.section)}">
        <div class="mindmap-core">${esc(s.section)}</div><ol>${items}</ol>
      </div>`;
    }

    if (layout === 'fishbone') {
      return `<div class="infographic infographic--fishbone" aria-label="Diagram sebab dan pengungkit ${esc(s.section)}">
        <div class="fishbone-spine"><span>${esc(s.section)}</span></div><ol>${items}</ol>
      </div>`;
    }

    if (layout === 'exploded') {
      return `<div class="infographic infographic--exploded" aria-label="Lapisan sistem ${esc(s.section)}">
        <div class="exploded-axis" aria-hidden="true"></div><ol>${items}</ol>
      </div>`;
    }

    return `<ol class="infographic infographic--${layout}" aria-label="Ringkasan ${esc(s.section)}">${items}</ol>`;
  }

  function renderCover(s) {
    const roster = s.members
      .map(
        (m, i) => `<li>
          <span class="roster-num">${String(i + 1).padStart(2, '0')}</span>
          <span><span class="roster-name">${esc(m.nama)}</span>
          <span class="roster-topic">${esc(m.subtopik)}</span></span>
        </li>`
      )
      .join('');

    return `<div class="slide-inner">
      <div class="eyebrow">${esc(s.eyebrow)}</div>
      <h1 class="cover-title">${esc(s.title)}</h1>
      <p class="cover-sub">${esc(s.subtitle)}</p>
      <div class="cover-meta">${esc(s.course)}<br>${esc(s.faculty)}</div>
      <div class="cover-group">${esc(s.group)}</div>
      <ul class="roster">${roster}</ul>
    </div>`;
  }

  function renderConcept(s) {
    const layout = conceptLayouts[s.section] || 'bento';
    return `${silhouetteHtml(s.visual)}
      <div class="slide-inner slide-inner--concept" data-infographic="${layout}">
      <div class="slide-copy concept-copy">
        <h2 class="slide-title">${esc(s.title)}</h2>
        <hr class="rule">
        <p class="definition">${esc(s.definition)}</p>
        ${conceptSourceHtml(s.citations)}
      </div>
      ${infographicHtml(s)}
    </div>`;
  }

  function renderEvidence(s) {
    const note = s.statNote ? `<div class="stat-note">${esc(s.statNote)}</div>` : '';
    return `${silhouetteHtml(s.visual)}
      <div class="slide-inner slide-inner--evidence">
      <div class="slide-copy">
        <h2 class="slide-title">${esc(s.title)}</h2>
        <hr class="rule">
        <div class="evidence-bento">
          <div class="evidence-stat">
            <div class="stat-value">${esc(s.stat.value)}</div>
            <div class="stat-label">${esc(s.stat.label)}</div>
            ${note}
          </div>
          <div class="case">
            <div class="case-title">${esc(s.caseTitle)}</div>
            <p class="case-body">${esc(s.caseBody)}</p>
          </div>
          ${citationsHtml(s.citations)}
        </div>
      </div>
    </div>`;
  }

  function renderClosing(s) {
    const threads = s.threads
      .map(
        (t) => `<li>
          <div class="thread-label">${esc(t.label)}</div>
          <p class="thread-body">${esc(t.body)}</p>
        </li>`
      )
      .join('');
    return `<div class="slide-inner">
      <h2 class="slide-title">${esc(s.title)}</h2>
      <hr class="rule">
      <p class="closing-lead">${esc(s.lead)}</p>
      <ul class="threads">${threads}</ul>
      <div class="closing-note">${esc(s.closingNote)}</div>
    </div>`;
  }

  const renderers = {
    cover: renderCover,
    concept: renderConcept,
    evidence: renderEvidence,
    closing: renderClosing,
  };

  function build() {
    deckEl.innerHTML = slides
      .map((s, i) => {
        const body = (renderers[s.type] || renderConcept)(s);
        const layout = s.type === 'concept' ? conceptLayouts[s.section] : (s.type === 'evidence' ? 'bento' : s.type);
        return `<section class="slide" data-index="${i}" data-type="${s.type}" data-layout="${esc(layout)}"
          aria-label="Slide ${i + 1} dari ${slides.length}">${body}</section>`;
      })
      .join('');
  }

  /* ------------------------------------------------------------ navigation */

  function show(index, updateHash) {
    current = Math.max(0, Math.min(index, slides.length - 1));
    const s = slides[current];

    deckEl.querySelectorAll('.slide').forEach((el, i) => {
      el.classList.toggle('is-active', i === current);
      el.setAttribute('aria-hidden', i === current ? 'false' : 'true');
    });

    document.body.dataset.slideType = s.type;
    document.body.dataset.section = s.section || '';
    const label = s.section || (s.type === 'cover' ? 'Pembuka' : 'Penutup');
    sectionEl.textContent = label;
    presenterEl.textContent = s.presenter || 'Kelompok 2';
    counterEl.innerHTML = `<b>${String(current + 1).padStart(2, '0')}</b> / ${slides.length}`;
    fillEl.style.transform = 'scaleX(' + (current + 1) / slides.length + ')';

    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === slides.length - 1;

    deckEl.querySelector('.slide.is-active').scrollTop = 0;

    if (updateHash !== false) {
      history.replaceState(null, '', '#/' + (current + 1));
    }
  }

  const next = () => show(current + 1);
  const prev = () => show(current - 1);

  function fromHash() {
    const m = location.hash.match(/^#\/(\d+)$/);
    const n = m ? parseInt(m[1], 10) - 1 : 0;
    return Number.isInteger(n) && n >= 0 && n < slides.length ? n : 0;
  }

  document.addEventListener('keydown', (e) => {
    if (e.target.closest('a')) return;
    switch (e.key) {
      case 'ArrowRight':
      case 'PageDown':
      case ' ':
        e.preventDefault(); next(); break;
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault(); prev(); break;
      case 'Home':
        e.preventDefault(); show(0); break;
      case 'End':
        e.preventDefault(); show(slides.length - 1); break;
    }
  });

  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);
  document.querySelector('.tap-zone--next').addEventListener('click', next);
  document.querySelector('.tap-zone--prev').addEventListener('click', prev);
  window.addEventListener('hashchange', () => show(fromHash(), false));

  // Geser jari di layar sentuh. Ambang 55px supaya tidak bentrok dengan scroll.
  let touchX = null;
  let touchY = null;
  deckEl.addEventListener('touchstart', (e) => {
    touchX = e.changedTouches[0].clientX;
    touchY = e.changedTouches[0].clientY;
  }, { passive: true });
  deckEl.addEventListener('touchend', (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    const dy = e.changedTouches[0].clientY - touchY;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy)) {
      dx < 0 ? next() : prev();
    }
    touchX = touchY = null;
  }, { passive: true });

  /* -------------------------------------------------------------- particles */

  function startParticles() {
    if (reduceMotion) return;

    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    let w, h, dots, raf = null;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Kepadatan mengikuti luas layar, dibatasi supaya laptop tua tetap lancar.
      const count = Math.min(Math.round((w * h) / 26000), 70);
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.14,
        vy: -Math.random() * 0.16 - 0.03,
        a: Math.random() * 0.35 + 0.12,
        p: Math.random() * Math.PI * 2,
      }));
    }

    function frame(t) {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.y < -10) { d.y = h + 10; d.x = Math.random() * w; }
        if (d.x < -10) d.x = w + 10;
        if (d.x > w + 10) d.x = -10;
        const pulse = 0.65 + 0.35 * Math.sin(t / 1400 + d.p);
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(140, 226, 238, ${d.a * pulse})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    }

    function play() { if (raf === null) raf = requestAnimationFrame(frame); }
    function pause() { if (raf !== null) { cancelAnimationFrame(raf); raf = null; } }

    resize();
    play();
    window.addEventListener('resize', resize);
    // Hemat baterai dan CPU saat tab tidak terlihat.
    document.addEventListener('visibilitychange', () =>
      document.hidden ? pause() : play()
    );
  }

  /* ------------------------------------------------------------------ init */

  build();
  show(fromHash(), false);
  startParticles();
})();
