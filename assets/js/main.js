/**
 * Sinan Keskin Digital Universe - Main Application Controller
 */

(function() {
  'use strict';

    // 0. Clean URL: Ensure '.html' is never displayed in the address bar
  try {
    const p = window.location.pathname;
    if (p.endsWith('/index.html') || p === '/index.html') {
      const cleanPath = p.replace(/\/index\.html$/, '/') || '/';
      window.history.replaceState(null, '', cleanPath + window.location.search + window.location.hash);
    } else if (p.endsWith('.html')) {
      const cleanPath = p.replace(/\.html$/, '');
      window.history.replaceState(null, '', cleanPath + window.location.search + window.location.hash);
    }
  } catch (e) {}


  // 1. Mobile Menu Drawer Toggle
  function initMobileNav() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-nav-drawer');
    const closeBtn = document.getElementById('mobile-menu-close');
    const backdrop = document.getElementById('mobile-nav-backdrop');

    if (!toggleBtn || !drawer) return;

    function openMenu() {
      drawer.classList.remove('translate-x-full');
      if (backdrop) backdrop.classList.remove('hidden', 'opacity-0');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      drawer.classList.add('translate-x-full');
      if (backdrop) backdrop.classList.add('opacity-0');
      setTimeout(() => {
        if (backdrop) backdrop.classList.add('hidden');
      }, 300);
      document.body.style.overflow = '';
    }

    toggleBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (backdrop) backdrop.addEventListener('click', closeMenu);

    // Close on escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  // 2. Ambient Audio Synthesizer (Sci-Fi Ambient Drone via Web Audio API)
  function initAmbientAudio() {
    const audioBtns = document.querySelectorAll('button[aria-label="Ambient Audio State"]');
    if (!audioBtns.length) return;

    let audioCtx = null;
    let osc1 = null, osc2 = null, gainNode = null, filter = null;
    let isPlaying = false;

    function createDrone() {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      audioCtx = new AudioContext();

      // Low pass filter for deep celestial warm sound
      filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(220, audioCtx.currentTime);

      gainNode = audioCtx.createGain();
      gainNode.gain.setValueAtTime(0.001, audioCtx.currentTime);

      // Two slightly detuned sine oscillators for rich celestial beating
      osc1 = audioCtx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(108, audioCtx.currentTime); // A2 harmonic

      osc2 = audioCtx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(162, audioCtx.currentTime); // Perfect fifth harmonic

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      osc1.start();
      osc2.start();
    }

    function toggleAudio() {
      if (!audioCtx) {
        createDrone();
      }

      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const lang = window.i18n ? window.i18n.getLanguage() : 'tr';
      if (!isPlaying) {
        isPlaying = true;
        gainNode.gain.cancelScheduledValues(audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.06, audioCtx.currentTime + 1.2);
        showHUDToast(lang === 'en' ? '[ AMBIENT AUDIO MATRIX: ONLINE // 108Hz RESONANCE ]' : '[ ORTAM SES MATRİSİ: AKTİF // 108Hz REZONANS ]');
        audioBtns.forEach(btn => {
          btn.classList.add('text-primary', 'bg-primary/20', 'ring-1', 'ring-primary/40');
          btn.classList.remove('text-primary-container');
        });
      } else {
        isPlaying = false;
        gainNode.gain.cancelScheduledValues(audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.0001, audioCtx.currentTime + 0.8);
        showHUDToast(lang === 'en' ? '[ AMBIENT AUDIO MATRIX: MUTED ]' : '[ ORTAM SES MATRİSİ: SESSİZ ]');
        audioBtns.forEach(btn => {
          btn.classList.remove('text-primary', 'bg-primary/20', 'ring-1', 'ring-primary/40');
          btn.classList.add('text-primary-container');
        });
      }
    }

    audioBtns.forEach(btn => btn.addEventListener('click', toggleAudio));
  }

  // 3. HUD Toast System
  function showHUDToast(msg) {
    let toast = document.getElementById('global-hud-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'global-hud-toast';
      toast.className = 'fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-lg bg-surface-container-high/90 border border-primary/30 text-primary font-mono text-xs tracking-widest backdrop-blur-xl shadow-2xl transition-all duration-300 pointer-events-none opacity-0 translate-y-4';
      document.body.appendChild(toast);
    }

    toast.textContent = msg;
    toast.classList.remove('opacity-0', 'translate-y-4');
    toast.classList.add('opacity-100', 'translate-y-0');

    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove('opacity-100', 'translate-y-0');
      toast.classList.add('opacity-0', 'translate-y-4');
    }, 2800);
  }

  // 4. Live Chronometer in Header (Multilingual)
  function initLiveClock() {
    const clocks = document.querySelectorAll('.live-clock-target');
    if (!clocks.length) return;

    function update() {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0] + ' UTC';
      const lang = window.i18n ? window.i18n.getLanguage() : 'tr';
      const prefix = lang === 'en' ? 'SYS_ONLINE' : 'SİSTEM_AKTİF';
      clocks.forEach(el => {
        el.textContent = `${prefix} / 2026 // ${timeStr}`;
      });
    }
    update();
    setInterval(update, 1000);
  }

  // 5. Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initAmbientAudio();
    initLiveClock();
  });

  window.showHUDToast = showHUDToast;
})();


  // 3. Cyberpunk Cookie & Telemetry HUD Banner (Google Analytics Ready)
  function initCookieConsent() {
    const CONSENT_KEY = 'sinan_cookie_consent';
    const currentConsent = localStorage.getItem(CONSENT_KEY);

    // If user already decided, don't show banner, but load GA if accepted
    if (currentConsent === 'accepted') {
      window.dispatchEvent(new CustomEvent('cookieConsentGranted'));
      return;
    } else if (currentConsent === 'essential') {
      return;
    }

    // Create HUD Element
    const banner = document.createElement('div');
    banner.id = 'cookie-consent-hud';
    banner.className = 'fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-[9990] p-space-md rounded-xl bg-surface-container-lowest/95 backdrop-blur-2xl border border-outline-variant/40 shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex flex-col gap-space-sm transition-all duration-500 translate-y-8 opacity-0';
    
    banner.innerHTML = `
      <div class="flex items-center justify-between border-b border-outline-variant/20 pb-space-2xs">
        <div class="flex items-center gap-space-2xs text-primary font-label-telemetry text-label-telemetry uppercase tracking-wider">
          <span class="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
          <span data-i18n="cookie-hud-title">TELEMETRİ & ÇEREZ PROTOKOLÜ // v2026</span>
        </div>
        <span class="font-label-telemetry text-[9px] text-outline">KVKK / GDPR</span>
      </div>
      <p class="font-body-md text-xs text-on-surface-variant leading-relaxed" data-i18n="cookie-hud-desc">
        Bu dijital evren, dil tercihinizi hatırlamak ve sistem performansını anonim ölçmek (Google Analytics) amacıyla teknik çerezler kullanır. İstilacı reklam takibi yapılmaz.
      </p>
      <div class="flex flex-wrap items-center gap-space-xs pt-space-2xs">
        <button id="cookie-accept-all" type="button" class="flex-1 py-1.5 px-space-sm rounded bg-primary-container hover:bg-primary text-on-primary-container font-label-md text-xs font-bold uppercase tracking-wider transition-all shadow-md">
          <span data-i18n="cookie-btn-accept">TÜMÜNÜ KABUL ET</span>
        </button>
        <button id="cookie-accept-essential" type="button" class="py-1.5 px-space-sm rounded bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-md text-xs uppercase tracking-wider transition-all">
          <span data-i18n="cookie-btn-essential">YALNIZCA GEREKLİLER</span>
        </button>
        <a href="/privacy" class="py-1.5 px-space-xs text-outline hover:text-primary font-label-telemetry text-[10px] uppercase tracking-wider transition-colors ml-auto">
          <span data-i18n="cookie-btn-policy">GİZLİLİK POLİTİKASI ↗</span>
        </a>
      </div>
    `;

    document.body.appendChild(banner);

    // Trigger reveal animation
    setTimeout(() => {
      banner.classList.remove('translate-y-8', 'opacity-0');
    }, 400);

    // Language sync
    if (window.i18n && typeof window.i18n.setLanguage === 'function') {
      const curLang = localStorage.getItem('user_lang') || 'tr';
      const dict = window.i18n.translations[curLang] || window.i18n.translations.tr;
      banner.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (dict[k]) el.textContent = dict[k];
      });
    }

    function dismiss(consentType) {
      localStorage.setItem(CONSENT_KEY, consentType);
      banner.classList.add('translate-y-8', 'opacity-0');
      setTimeout(() => {
        banner.remove();
      }, 500);

      if (consentType === 'accepted') {
        window.dispatchEvent(new CustomEvent('cookieConsentGranted'));
        if (window.GA_MEASUREMENT_ID && typeof window.loadGoogleAnalytics === 'function') {
          window.loadGoogleAnalytics(window.GA_MEASUREMENT_ID);
        }
      }
    }

    document.getElementById('cookie-accept-all')?.addEventListener('click', () => dismiss('accepted'));
    document.getElementById('cookie-accept-essential')?.addEventListener('click', () => dismiss('essential'));
  }

  // Google Analytics Dynamic Bootstrapper (Call with your G-XXXXXXXXXX key)
  window.loadGoogleAnalytics = function(measurementId) {
    if (localStorage.getItem('sinan_cookie_consent') !== 'accepted') return;
    if (window.gtagScriptLoaded) return;
    window.gtagScriptLoaded = true;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', measurementId, { 'anonymize_ip': true });
    console.log('[GA] Google Analytics initialized successfully:', measurementId);
  };
