/* Optional navigation and animation controls. All tutorial content works without JavaScript. */
(() => {
  const links = [...document.querySelectorAll('.site-header nav a')];
  const sections = links.map(link => document.querySelector(link.hash)).filter(Boolean);
  const header = document.querySelector('.site-header');
  let framePending = false;
  let anchorTimer;
  let followingAnchor = false;
  function activate(hash) {
    links.forEach(link => {
      if (link.hash === hash) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  function update() {
    framePending = false;
    if (followingAnchor) return;
    const readingLine = header.getBoundingClientRect().height + 30;
    const passed = sections.filter(section => section.getBoundingClientRect().top <= readingLine);
    const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 3;
    const current = atBottom ? sections.at(-1) : passed.at(-1);
    activate(current ? `#${current.id}` : '');
  }
  function followAnchor(hash) {
    followingAnchor = true;
    clearTimeout(anchorTimer);
    activate(hash);
    anchorTimer = setTimeout(() => { followingAnchor = false; update(); }, 900);
  }
  links.forEach(link => link.addEventListener('click', () => followAnchor(link.hash)));
  window.addEventListener('hashchange', () => followAnchor(location.hash));
  window.addEventListener('scroll', () => {
    if (!framePending) { framePending = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', update);
  document.fonts.ready.then(update);
  update();
})();

// Automatic looping is CSS-driven. The control also supports reduced-motion visitors.
(() => {
  const illustration = document.querySelector('.threat-visual');
  const button = illustration?.querySelector('.animation-toggle');
  if (!button) return;
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  function setPaused(paused) {
    illustration.dataset.paused = String(paused);
    button.textContent = paused ? 'Play animation' : 'Pause animation';
    button.setAttribute('aria-pressed', String(paused));
  }
  setPaused(motionPreference.matches);
  button.hidden = false;
  button.addEventListener('click', () => {
    illustration.dataset.motionOverride = 'true';
    setPaused(illustration.dataset.paused !== 'true');
  });
  motionPreference.addEventListener('change', event => {
    delete illustration.dataset.motionOverride;
    setPaused(event.matches);
  });
})();
