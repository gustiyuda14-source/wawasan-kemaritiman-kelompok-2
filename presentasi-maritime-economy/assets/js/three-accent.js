/**
 * Aksen 3D: satu bentuk wireframe berbeda per pokok bahasan, berputar pelan.
 * Cover dan closing dapat opacity penuh (aksen utama). Slide konsep/bukti
 * dapat opacity lebih redup lewat CSS (body[data-slide-type] di styles.css)
 * supaya tetap jadi aksen di ruang kosong pojok kanan-atas, bukan
 * bersaing dengan teks, kartu diagram, atau sitasi.
 *
 * Bentuk dipilih lewat body[data-section] (dan data-slide-type untuk cover/
 * closing), keduanya diset oleh deck.js. Berhenti total saat tab tidak
 * aktif dan saat prefers-reduced-motion menyala.
 *
 * File ini opsional secara desain: kalau THREE gagal dimuat (CDN lambat,
 * offline) atau WebGL diblokir (kebijakan GPU/driver tua di lab kampus),
 * presentasi tetap jalan penuh tanpa aksen ini.
 */

(function () {
  'use strict';

  if (typeof THREE === 'undefined') return;

  const canvas = document.getElementById('accent3d');
  if (!canvas) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  } catch (err) {
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0, 6.4);

  const root = new THREE.Group();
  scene.add(root);

  const accent = new THREE.Color(0x5fdce8);
  const nodeColor = 0xeaf6fa;

  // Dua wireframe bersarang (radius beda) + titik-titik simpul pada geometri
  // luar. Pola dasar dipakai ulang untuk sebagian besar bentuk supaya bahasa
  // visualnya tetap konsisten, cuma geometrinya yang beda per topik.
  function wireGroup(outerGeom, innerGeom, opts) {
    opts = opts || {};
    const g = new THREE.Group();
    const outer = opts.edgesOnly
      ? new THREE.LineSegments(new THREE.EdgesGeometry(outerGeom), new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: opts.outerOpacity || 0.4 }))
      : new THREE.Mesh(outerGeom, new THREE.MeshBasicMaterial({ color: accent, wireframe: true, transparent: true, opacity: opts.outerOpacity || 0.34 }));
    const inner = opts.edgesOnly
      ? new THREE.LineSegments(new THREE.EdgesGeometry(innerGeom), new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: opts.innerOpacity || 0.55 }))
      : new THREE.Mesh(innerGeom, new THREE.MeshBasicMaterial({ color: accent, wireframe: true, transparent: true, opacity: opts.innerOpacity || 0.5 }));
    g.add(outer, inner);
    if (opts.points !== false) {
      g.add(new THREE.Points(outerGeom, new THREE.PointsMaterial({ color: nodeColor, size: opts.pointSize || 0.045, transparent: true, opacity: 0.75 })));
    }
    g.userData.outer = outer;
    g.userData.inner = inner;
    return g;
  }

  // Cuma titik-titik, tanpa garis kawat: gerombolan (ikan/plankton), bukan
  // benda padat bersisi.
  function pointsGroup(outerGeom, innerGeom) {
    const g = new THREE.Group();
    const outer = new THREE.Points(outerGeom, new THREE.PointsMaterial({ color: accent, size: 0.05, transparent: true, opacity: 0.85 }));
    const inner = new THREE.Points(innerGeom, new THREE.PointsMaterial({ color: nodeColor, size: 0.04, transparent: true, opacity: 0.7 }));
    g.add(outer, inner);
    g.userData.outer = outer;
    g.userData.inner = inner;
    return g;
  }

  // Dua cincin saling silang (bukan bersarang) untuk melambangkan "benang
  // merah" yang mengikat delapan sektor di slide penutup.
  function ringsGroup() {
    const g = new THREE.Group();
    const a = new THREE.Mesh(
      new THREE.TorusGeometry(1.55, 0.32, 8, 30),
      new THREE.MeshBasicMaterial({ color: accent, wireframe: true, transparent: true, opacity: 0.42 })
    );
    const b = new THREE.Mesh(
      new THREE.TorusGeometry(1.55, 0.32, 8, 30),
      new THREE.MeshBasicMaterial({ color: accent, wireframe: true, transparent: true, opacity: 0.55 })
    );
    b.rotation.x = Math.PI / 2.3;
    b.rotation.y = Math.PI / 6;
    g.add(a, b);
    g.userData.outer = a;
    g.userData.inner = b;
    return g;
  }

  // Satu bentuk per pokok bahasan: kunci sama dengan `section` di
  // content.js. `cover` dan `closing` dikunci lewat slide-type, bukan
  // section, karena kedua slide itu tidak punya presenter/subtopik.
  const SHAPES = {
    cover: wireGroup(new THREE.IcosahedronGeometry(2.15, 1), new THREE.IcosahedronGeometry(1.35, 1)),
    'Definisi & Ruang Lingkup': wireGroup(new THREE.IcosahedronGeometry(2.15, 1), new THREE.IcosahedronGeometry(1.35, 1)),
    'Maritime Civilization': wireGroup(new THREE.OctahedronGeometry(2.05, 0), new THREE.OctahedronGeometry(1.3, 0)),
    'Human Resources Kemaritiman': wireGroup(new THREE.DodecahedronGeometry(2.0, 0), new THREE.DodecahedronGeometry(1.25, 0)),
    'Coastal Communities': wireGroup(new THREE.TorusGeometry(1.65, 0.5, 10, 30), new THREE.TorusGeometry(1.0, 0.32, 8, 24)),
    'Fisheries & Aquaculture': pointsGroup(new THREE.IcosahedronGeometry(2.05, 2), new THREE.IcosahedronGeometry(1.2, 2)),
    'Maritime Tourism': wireGroup(new THREE.TorusKnotGeometry(1.3, 0.4, 100, 12), new THREE.TorusKnotGeometry(0.8, 0.26, 80, 10)),
    'Shipping, Logistics & Shipbuilding': wireGroup(new THREE.BoxGeometry(2.5, 2.5, 2.5), new THREE.BoxGeometry(1.5, 1.5, 1.5), { edgesOnly: true, outerOpacity: 0.55, innerOpacity: 0.7, pointSize: 0.06 }),
    'Blue Economy Indonesia': wireGroup(new THREE.SphereGeometry(2.05, 14, 10), new THREE.SphereGeometry(1.25, 10, 8)),
    closing: ringsGroup(),
  };
  Object.keys(SHAPES).forEach((key) => {
    SHAPES[key].visible = false;
    root.add(SHAPES[key]);
  });

  let activeKey = null;
  function setActive(key) {
    if (key === activeKey) return;
    if (SHAPES[activeKey]) SHAPES[activeKey].visible = false;
    activeKey = SHAPES[key] ? key : 'cover';
    SHAPES[activeKey].visible = true;
  }

  function resize() {
    const box = canvas.getBoundingClientRect();
    const w = Math.max(box.width, 1);
    const h = Math.max(box.height, 1);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  let raf = null;
  let active = false;

  function frame(t) {
    const shape = SHAPES[activeKey];
    if (shape && !reduceMotion) {
      shape.userData.outer.rotation.y = t * 0.00009;
      shape.userData.outer.rotation.x = t * 0.00004;
      shape.userData.inner.rotation.y = -t * 0.00014;
      shape.userData.inner.rotation.x = t * 0.00006;
    }
    renderer.render(scene, camera);
    if (!reduceMotion) raf = requestAnimationFrame(frame);
  }

  function shouldRun() {
    return !!document.body.dataset.slideType && !document.hidden;
  }

  function shapeKeyFor() {
    const type = document.body.dataset.slideType;
    if (type === 'cover' || type === 'closing') return type;
    return document.body.dataset.section || 'cover';
  }

  function sync() {
    const want = shouldRun();
    if (!want) {
      if (active) {
        active = false;
        if (raf !== null) { cancelAnimationFrame(raf); raf = null; }
      }
      return;
    }
    if (!active) { active = true; resize(); }
    setActive(shapeKeyFor());
    if (reduceMotion) {
      renderer.render(scene, camera); // satu frame statis, tidak berputar
    } else if (raf === null) {
      raf = requestAnimationFrame(frame);
    }
  }

  // deck.js mengubah body[data-slide-type] dan body[data-section] lewat
  // dataset, bukan lewat event kustom, jadi diamati lewat MutationObserver
  // supaya file ini tidak perlu tahu apa-apa soal deck.js dan sebaliknya.
  new MutationObserver(sync).observe(document.body, {
    attributes: true,
    attributeFilter: ['data-slide-type', 'data-section'],
  });
  document.addEventListener('visibilitychange', sync);
  window.addEventListener('resize', () => { if (active) resize(); });

  sync();
})();
