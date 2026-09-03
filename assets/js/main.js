/**
 * Sinan Keskin Digital Universe - Main Application Controller
 */

(function() {
  'use strict';

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
