/**
 * Sinan Keskin Digital Universe - Internationalization (i18n) Engine
 * Authentic, professional English & Turkish localization with persistence
 */

(function() {
  'use strict';

  const translations = {
    en: {
      // Page Titles
      'page-title-home': 'Sinan Keskin — Software Developer & System Architect',
      'page-title-projects': 'Projects & Experiments — Sinan Keskin',
      'page-title-contact': 'Contact & Transmission Chamber — Sinan Keskin',
      // Global Header & Navigation
      'nav-home': 'HOME',
      'nav-projects': 'PROJECTS',
      'nav-contact': 'CONTACT',
      'header-coords': 'LAT: 40°47\'17.8" N // LONG: 29°22\'07.8" E // KOCAELI',
      'header-sys-status': 'SYS_ONLINE / 2026',

      // Mobile Drawer
      'drawer-nav': 'NAVIGATION',
      'drawer-home': '01 // HOME',
      'drawer-projects': '02 // PROJECTS',
      'drawer-contact': '03 // CONTACT',
      'drawer-channels': 'COMMUNICATION CHANNELS',
      'drawer-sys-version': 'SYS_ONLINE // v2026.4',
      'drawer-link-github': 'GITHUB',
      'drawer-link-telegram': 'TELEGRAM',
      'drawer-link-email': 'EMAIL',

      // Global Footer
      'footer-rights': '© 2026 SINAN KESKIN. ALL RIGHTS RESERVED.',
      'footer-sync': 'GITHUB SYNCED // SH-2849F',
      'footer-index': 'OVERVIEW',
      'footer-repo': 'PROJECTS',
      'footer-transmit': 'CONTACT',

      // Global Telemetry Corners
      'telemetry-coords': '[ 40°47\'17.8" N, 29°22\'07.8" E // KOCAELI ]',
      'telemetry-core': '[ ARCHITECTURE CORE // LEVEL-00 ]',
      'telemetry-init': '+ 00 // INITIALIZED',
      'telemetry-cyber': 'SPECULATIVE CYBERNETICS +',

      // ==========================================
      // Home Page (index.html)
      // ==========================================
      'home-hero-state': 'STATE 01 // SYSTEM FORMATION',
      'home-hero-loc': 'LOC // 40°47\'17.8"N 29°22\'07.8"E',
      'home-hero-cycle': 'CYCLE // 2026.04',
      'home-hero-organism': 'ORGANISM: SYNTHETIC',
      'home-hero-intro-tag': '[ 01 / INTRODUCTION ]',
      'home-hero-role': 'SOFTWARE DEVELOPER & ARCHITECT',
      'home-hero-name-first': 'SINAN',
      'home-hero-name-last': 'KESKIN',
      'home-hero-subtitle': 'Building tools, automation, APIs, and digital experiences across high-concurrency systems and speculative cybernetic surfaces.',
      'home-hero-stack-label': 'CORE ENGINE STACK',
      'home-hero-stack-items': 'NODE // PYTHON // DOCKER // DISTRIBUTED ENGINES',
      'home-hero-cta-projects': 'EXPLORE PROJECTS',
      'home-hero-cta-contact': 'GET IN TOUCH',
      'home-hero-scroll': 'SCROLL TO WITNESS THE FORMATION',

      // Home - Section 2: Manifesto / Philosophy
      'home-manifesto-stage': 'STAGE 02 / SYSTEM RECONSTRUCTION',
      'home-manifesto-fps': '[ FPS: 60.00 ]',
      'home-manifesto-latency': '[ LATENCY: 12ms ]',
      'home-manifesto-threads': '[ THREADS: MULTI-CORE ]',
      'home-manifesto-tag': '[ 02 / CRAFT & DISCIPLINE ]',
      'home-manifesto-subhead': 'ENGINEERING DISCIPLINE & CRAFT',
      'home-manifesto-title': 'I BUILD THINGS TO UNDERSTAND HOW THEY WORK.',
      'home-manifesto-p1': 'I am a self-taught engineer obsessed with uncovering the subterranean mechanics beneath complex software layers. Rather than treating frameworks as opaque black boxes, I disassemble protocols, trace packets, construct memory-efficient services, and compose high-throughput automation pipelines from primary principles.',
      'home-manifesto-p2': 'My engineering discipline spans deterministic backend tooling, asynchronous event loops, autonomous AI orchestrations, containerized cloud infrastructure, and low-latency digital viewports where computational rigor meets tactile ergonomics.',
      'home-manifesto-telemetry-hdr': 'METRIC TELEMETRY',
      'home-manifesto-stat1': 'VERIFIED PRODUCTION COMMITS',
      'home-manifesto-stat2': 'AUTONOMOUS & SELF-TAUGHT',
      'home-manifesto-stat3': 'PURE ARCHITECTURE',
      'home-manifesto-stat4': 'ZERO UNNECESSARY ABSTRACTIONS',
      'home-manifesto-uptime': 'UPTIME: 99.98%',
      'home-manifesto-status-nominal': 'STATE: NOMINAL',
      'home-manifesto-quote-title': 'CORE HEURISTIC',
      'home-manifesto-quote-text': '"Computers are not magic; they are clockwork made of sand and lightning. If it can break, it can be debugged."',

      // Home - Section 3: Technology Ecosystem
      'home-tech-stage': '[ 03 / CONSTELLATION ]',
      'home-tech-synapse': 'SYNAPSE NODES',
      'home-tech-title': 'TECHNOLOGY ECOSYSTEM',
      'home-tech-subtitle': 'A dynamic topological landscape of interconnected logic, runtimes, persistent datastores, and neural interfaces.',
      'home-tech-network-status': 'NODE NETWORK: ONLINE',
      'home-tech-active-weight': 'ACTIVE WEIGHT: 16 SUB-SYSTEMS',
      'home-tech-hover-prompt': '[ HOVER OVER ANY NODE TO INSPECT ROLE ]',
      'home-tech-cat-backend': 'BACKEND & LOGIC',
      'home-tech-cat-systems': 'SYSTEMS & STORAGE',
      'home-tech-cat-interfaces': 'MODERN INTERFACES',
      'home-tech-cat-intelligence': 'INTELLIGENCE',
      'home-tech-proto-desc-hdr': 'SELECTED PROTOCOL DESCRIPTION',
      'home-tech-default-desc': 'Hover or tap on any node above to expose its architectural purpose in my active engineering stack.',
      'home-tech-status-active': 'STATUS: ACTIVE RUNTIME',

      // Home - Section 4: Data Landscape / Development Activity
      'home-lab-stage': '[ 05 / ARCHIVE ]',
      'home-lab-tag': 'SYNTHESIS & REPOSITORIES',
      'home-lab-title': 'DATA LANDSCAPE',
      'home-lab-matrix-hdr': 'ANNUAL ACTIVITY MATRIX',
      'home-lab-contrib-count': '487 CONTRIBUTIONS // LAST 365 DAYS',
      'home-lab-less': 'LESS',
      'home-lab-more': 'MORE ACTIVITY',
      'home-lab-volumetrics-hdr': 'RUNTIME REPOSITORY VOLUMETRICS',
      'home-lab-loc-label': 'AGGREGATED BY LOC',
      'home-lab-feed-hdr': 'TELEMETRY FEED',
      'home-lab-pulse-title': 'SYSTEM PULSE',
      'home-lab-synced': 'SYNCED',
      'home-lab-commit-title': 'Latest Commit: "feat: add vectorized similarity matrix"',
      'home-lab-commit-time': '2 hours ago on main',
      'home-lab-pipeline-agent': 'AUTONOMOUS AGENTS',
      'home-lab-pipeline-status': 'ACTIVE',
      'home-lab-pipeline-time': 'CI/CD Pipeline passed in 44s',
      'home-lab-pipeline-tests': '18 unit tests verified',
      'home-lab-bottom-tag': '[ COMPLETE MANIFEST ]',
      'home-lab-bottom-title': 'THE LIVING CODE LABORATORY',
      'home-lab-bottom-desc': 'Navigate the catalog of deployed automation frameworks, artificial intelligence workflows, and visual computing artifacts.',
      'home-lab-bottom-cta': 'EXPLORE THE CREATIONS',

      // ==========================================
      // Projects Page (projects.html)
      // ==========================================
      'projects-stage-tag': '02 // CREATION',
      'projects-github-status': 'CONNECTED TO GITHUB: @sinan-keskin • 7 PUBLIC REPOSITORIES LOADED',
      'projects-title': 'PROJECTS & EXPERIMENTS',
      'projects-subtitle': 'Every project is an organism carved from code — tested in production, forged in curiosity.',
      'filter-all': 'ALL',
      'filter-backend': 'BACKEND & AUTOMATION',
      'filter-apis': 'APIs',
      'filter-system': 'SYSTEM UTILITIES',
      'filter-python': 'PYTHON',
      'sort-label': 'SORT:',
      'sort-recent': 'MOST RECENT COMMITS',
      'sort-popular': 'STAR COUNT',

      // Project 1 - BASH-TOOLS
      'p1-index': '[01/07] • BASH / SHELL',
      'p1-badge': 'PRODUCTION-READY',
      'p1-desc': 'Production-ready Bash scripting helpers featuring structured JSON logging, exponential backoff, and robust error trapping.',
      'p1-meta1': 'STABLE // V2.4.0',
      'p1-meta2': 'POSIX COMPLIANT',
      'p1-meta3': 'ZERO DEPENDENCIES',
      'p1-term-container': 'SHELL_CONTAINER_V4',
      'p1-term-live': 'EXECUTION: LIVE',
      'p1-term-status': 'STATUS: 0 (SUCCESS)',
      'p1-terminal-comment': '# Initialize automated daemon runner with JSON-formatted metric streams',
      'p1-terminal-hooks': 'Mounted runtime hooks: SIGINT, SIGTERM, ERR',
      'p1-terminal-mem': 'MEM: 12.8MB // THREADS: 1',

      // Project 2 - PUBLIC-ALL-IN-ONE
      'p2-index': '[02/07] • PYTHON / STREAMLIT',
      'p2-badge': 'MULTI-UTILITY SUITE',
      'p2-desc': 'A high-performance Streamlit application housing real-time utilities: SteamID resolver, dynamic QR generator, image processor, and data encoders.',
      'p2-meta1': 'STREAMLIT CORE',
      'p2-meta2': 'PILLOW PIPELINE',
      'p2-meta3': 'ASYNC HTTPX',
      'p2-sim-hdr': 'SIMULATED WORKSPACE // REACTIVE PARAMETERS',
      'p2-sim-port': 'PORT: 8501 // READY',
      'p2-sim-slider-label': 'Image Compression Ratio',
      'p2-sim-fast': '10% (FAST)',
      'p2-sim-lossless': '100% (LOSSLESS)',
      'p2-sim-qr-label': 'QR Error Correction Level',
      'p2-sim-metrics-hdr': 'OUTPUT ARTIFACT METRICS',
      'p2-sim-status': 'PROCESSING: IDLE',
      'p2-sim-jobs': 'JOBS RESOLVED',
      'p2-sim-latency': 'AVERAGE LATENCY',
      'p2-sim-cache': 'CACHE HIT RATIO',

      // Project 3 - NODE-API
      'p3-index': '[03/07] • NODE.JS / EXPRESS',
      'p3-badge': 'SECURE REST STARTER',
      'p3-desc': 'Hardened Express REST API starter with strict schema validation via Zod, token bucket rate limiting, and automated Vitest integration.',
      'p3-meta1': 'JWT RSA-256',
      'p3-meta2': 'ZOD VALIDATION',
      'p3-meta3': 'VITEST RIG',
      'p3-coverage': 'COVERAGE: 98.4%',
      'p3-diag-hdr': 'ROUTE CONSTELLATION & LATENCY DIAGRAM',
      'p3-diag-arch': 'REST ARCHITECTURE',
      'p3-timeline': 'LATENCY BURST TIMELINE (LAST 60 SECONDS)',
      'p3-now': 'CURRENT',

      // Project 4 - WEB-STARTER
      'p4-index': '[04/07] • STARTER SETUP',
      'p4-badge': 'PUBLIC REPO',
      'p4-desc': 'Minimalist boilerplate designed for zero-friction experiments. Pre-configured with Tailwind, TypeScript compiler pipeline, and live reload.',
      'p4-commits': 'COMMITS: 84',

      // Project 5 - CPP-SNIPPETS
      'p5-index': '[05/07] • C++ / ALGORITHMS',
      'p5-badge': 'LOW-LEVEL',
      'p5-desc': 'Deep low-level memory allocations, custom allocators, cache-friendly data structures, and SIMD computational experiments for high-throughput execution.',
      'p5-profile': 'MEMORY PROFILED: VALGRIND',

      // Shared Project Buttons
      'view-repo-btn': 'VIEW REPOSITORY',
      'clone-snippet-btn': 'COPY SNIPPET',
      'launch-app-btn': 'LAUNCH APPLICATION',
      'inspect-source-btn': 'VIEW SOURCE',
      'open-repo-btn': 'OPEN REPO',
      'projects-next-chapter': 'CHAPTER TRANSITION // 03',
      'projects-next-cta': 'PROCEED TO CONTACT ↗',

      // ==========================================
      // Contact Page (contact.html)
      // ==========================================
      'contact-state-tag': '03 / CONNECTION',
      'contact-channel-status': 'STATE 06 // TRANSMISSION CHANNELS ACTIVE',
      'contact-gateway-status': 'GATEWAY OPEN // LATENCY: 14MS',
      'contact-hero-title': "LET'S BUILD",
      'contact-hero-title-highlight': 'SOMETHING GREAT.',
      'contact-invitation-tag': '[ DIRECT COMMUNICATION ]',
      'contact-invitation-desc': 'Have a project idea, complex automation requirement, backend system proposal, or technical inquiry? Reach out directly through any channel below.',
      'contact-relays-header': 'DIRECT COMMUNICATION CHANNELS',
      'contact-relays-envelope': 'DIRECT & VERIFIED CONTACT',

      // Relays
      'relay-1-name': 'CH_01 // SECURE EMAIL',
      'relay-1-desc': 'Primary direct channel for contracts, architecture consultations, and project proposals.',
      'relay-2-name': 'CH_02 // TELEGRAM',
      'relay-2-badge': 'TYPICAL RESPONSE < 2H',
      'relay-3-name': 'CH_03 // INSTAGRAM',
      'relay-3-badge': 'DEV LOGS & GENERATIVE ART',
      'relay-4-name': 'CH_04 // GITHUB REPOSITORIES',
      'relay-4-tag': 'PUBLIC NODES',
      'relay-4-badge': 'CONTRIBUTIONS WELCOME • OPEN SOURCE ADVOCATE',
      'relay-4-btn': 'VIEW REPOSITORIES',

      // Contact Sidebar Info
      'contact-locale-hdr': 'FIELD RESEARCH // LOCATION',
      'contact-locale-city': 'KOCAELI // 40°47\'17.8" N, 29°22\'07.8" E',
      'contact-telemetry-hdr': 'SYNAPSE TELEMETRY',
      'contact-telemetry-opt': 'OPTIMAL',
      'contact-cadence-label': 'RESPONSE CADENCE: RAPID',

      // Contact Form
      'form-terminal-title': 'DIRECT MESSAGE TERMINAL',
      'form-label-identity': '01 // YOUR NAME & COMPANY / ORGANIZATION',
      'form-placeholder-identity': 'e.g. Alex Smith / Horizon Labs',
      'form-label-channel': '02 // CONTACT INFORMATION (EMAIL / HANDLE)',
      'form-placeholder-channel': 'e.g. contact@domain.com or @telegram_user',
      'form-label-payload': '03 // MESSAGE (PROJECT BRIEF / SPECS / TIMELINE)',
      'form-placeholder-payload': 'Describe your project requirements, API specifications, or collaboration goals...',
      'form-gpg-badge': 'SECURE ENCRYPTED DISPATCH',
      'form-submit-btn': 'SEND MESSAGE',
      'copy-btn-text': 'COPY',
      'launch-btn-text': 'SEND MAIL',

      // Contact Bottom Cards
      'contact-uptime-hdr': 'SYSTEM STATUS',
      'contact-uptime-val': '99.998% OPERATIONAL',
      'contact-uptime-cores': 'DUAL CLOUD INFRASTRUCTURE // CONTINUOUS MONITORING',
      'contact-sub-role': 'SINAN KESKIN — SOFTWARE DEVELOPER & ARCHITECT',
      'contact-sub-loc': '40°47\'17.8" N, 29°22\'07.8" E • KOCAELI / TURKEY',
      'contact-sub-motto': 'BUILT WITH PRECISION COMPUTATION & CLEAN ARCHITECTURE',
      'contact-copied-toast': 'COPIED TO CLIPBOARD',

      // Notifications / HUD Toasts
      'toast-dispatched': '[ MESSAGE SENT // RECEIVED SUCCESSFULLY ]',
      'toast-email-copied': '[ EMAIL ADDRESS COPIED TO CLIPBOARD ]',
      'toast-audio-on': '[ AMBIENT AUDIO MATRIX: ONLINE // 108Hz RESONANCE ]',
      'toast-audio-off': '[ AMBIENT AUDIO MATRIX: MUTED ]'
    },

    tr: {
      // Page Titles
      'page-title-home': 'Sinan Keskin — Yazılım Geliştirici & Sistem Mimarı',
      'page-title-projects': 'Projeler & Deneyler — Sinan Keskin',
      'page-title-contact': 'İletişim & Mesaj İletim Odası — Sinan Keskin',
      // Global Header & Navigation
      'nav-home': 'ANA SAYFA',
      'nav-projects': 'PROJELER',
      'nav-contact': 'İLETİŞİM',
      'header-coords': 'ENLEM: 40°47\'17.8" K // BOYLAM: 29°22\'07.8" D // KOCAELİ',
      'header-sys-status': 'SİSTEM_AKTİF / 2026',

      // Mobile Drawer
      'drawer-nav': 'NAVİGASYON',
      'drawer-home': '01 // ANA SAYFA',
      'drawer-projects': '02 // PROJELER',
      'drawer-contact': '03 // İLETİŞİM',
      'drawer-channels': 'İLETİŞİM KANALLARI',
      'drawer-sys-version': 'SİSTEM_AKTİF // v2026.4',
      'drawer-link-github': 'GITHUB',
      'drawer-link-telegram': 'TELEGRAM',
      'drawer-link-email': 'E-POSTA',

      // Global Footer
      'footer-rights': '© 2026 SİNAN KESKİN. TÜM HAKLARI SAKLIDIR.',
      'footer-sync': 'GITHUB İLE SENKRONİZE // SH-2849F',
      'footer-index': 'GENEL BAKIŞ',
      'footer-repo': 'PROJELER',
      'footer-transmit': 'İLETİŞİM',

      // Global Telemetry Corners
      'telemetry-coords': '[ 40°47\'17.8" K, 29°22\'07.8" D // KOCAELİ ]',
      'telemetry-core': '[ ÇEKİRDEK MİMARİ // SEVİYE-00 ]',
      'telemetry-init': '+ 00 // BAŞLATILDI',
      'telemetry-cyber': 'DİJİTAL SİBERNETİK +',

      // ==========================================
      // Home Page (index.html)
      // ==========================================
      'home-hero-state': 'AŞAMA 01 // SİSTEM OLUŞUMU',
      'home-hero-loc': 'KONUM // 40°47\'17.8"K 29°22\'07.8"D',
      'home-hero-cycle': 'DÖNGÜ // 2026.04',
      'home-hero-organism': 'YAPI: SENTETİK',
      'home-hero-intro-tag': '[ 01 / GİRİŞ ]',
      'home-hero-role': 'YAZILIM GELİŞTİRİCİ & SİSTEM MİMARI',
      'home-hero-name-first': 'SİNAN',
      'home-hero-name-last': 'KESKİN',
      'home-hero-subtitle': 'Yüksek eşzamanlı sistemler, otomasyon altyapıları, dayanıklı API\'ler ve modern web mimarileri üzerinde; performans odaklı araçlar ve dijital deneyimler geliştiriyorum.',
      'home-hero-stack-label': 'ÇEKİRDEK TEKNOLOJİ YIĞINI',
      'home-hero-stack-items': 'NODE // PYTHON // DOCKER // DAĞITIK MOTORLAR',
      'home-hero-cta-projects': 'PROJELERİ KEŞFET',
      'home-hero-cta-contact': 'İLETİŞİME GEÇ',
      'home-hero-scroll': 'MİMARİYİ KEŞFETMEK İÇİN KAYDIRIN',

      // Home - Section 2: Manifesto / Philosophy
      'home-manifesto-stage': 'AŞAMA 02 // SİSTEM YENİDEN YAPILANDIRMASI',
      'home-manifesto-fps': '[ FPS: 60.00 ]',
      'home-manifesto-latency': '[ GECİKME: 12ms ]',
      'home-manifesto-threads': '[ İŞ PARÇACIĞI: ÇOK ÇEKİRDEK ]',
      'home-manifesto-tag': '[ 02 / MÜHENDİSLİK DİSİPLİNİ ]',
      'home-manifesto-subhead': 'YAZILIM MİMARİSİ VE YAKLAŞIM',
      'home-manifesto-title': 'NASIL ÇALIŞTIKLARINI DERİNDEN ANLAMAK İÇİN ÜRETİYORUM.',
      'home-manifesto-p1': 'Karmaşık yazılım katmanlarının altında yatan derin mekanizmaları keşfetmeye odaklanan bir mühendisim. Çatıları (framework) kapalı kutular olarak görmek yerine; protokolleri inceler, bellek optimizasyonlu servisler inşa eder ve temel prensiplerden hareketle yüksek verimli otomasyon hatları kurarım.',
      'home-manifesto-p2': 'Mühendislik disiplinim; deterministik arka yüz araçlarından asenkron olay döngülerine, otonom yapay zeka entegrasyonlarından konteyner tabanlı bulut altyapılarına ve düşük gecikmeli dijital arayüzlere kadar geniş bir yelpazeyi kapsar.',
      'home-manifesto-telemetry-hdr': 'METRİK TELEMETRİSİ',
      'home-manifesto-stat1': 'DOĞRULANMIŞ ÜRETİM COMMİTLERİ',
      'home-manifesto-stat2': 'OTONOM & SÜREKLİ GELİŞİM',
      'home-manifesto-stat3': 'TEMİZ VE SAĞLAM MİMARİ',
      'home-manifesto-stat4': 'GEREKSİZ SOYUTLAMALARDAN ARINMIŞ KOD',
      'home-manifesto-uptime': 'ÇALIŞMA ORANI: %99.98',
      'home-manifesto-status-nominal': 'SİSTEM DURUMU: NORMAL',
      'home-manifesto-quote-title': 'TEMEL FELSEFE',
      'home-manifesto-quote-text': '"Bilgisayarlar sihirli kutular değildir; kum ve elektrikten oluşan hassas saat mekanizmalarıdır. Bozulabilen her şey anlaşılabilir, çözülebilir ve daha güçlü biçimde yeniden inşa edilebilir."',

      // Home - Section 3: Technology Ecosystem
      'home-tech-stage': '[ 03 / TEKNOLOJİ AĞI ]',
      'home-tech-synapse': 'BAĞLANTI DÜĞÜMLERİ',
      'home-tech-title': 'TEKNOLOJİ EKOSİSTEMİ',
      'home-tech-subtitle': 'Birbiriyle bağlantılı mantık katmanları, çalışma zamanları, veri tabanları ve modern görselleştirme motorlarından oluşan dinamik topoloji.',
      'home-tech-network-status': 'DÜĞÜM AĞI: AKTİF',
      'home-tech-active-weight': 'AKTİF YIĞIN: 16 ALT SİSTEM',
      'home-tech-hover-prompt': '[ DETAYLARI İNCELEMEK İÇİN BİR DÜĞÜME DOKUNUN VEYA ÜZERİNE GELİN ]',
      'home-tech-cat-backend': 'BACKEND & İŞ MANTIĞI',
      'home-tech-cat-systems': 'SİSTEMLER & VERİTABANI',
      'home-tech-cat-interfaces': 'MODERN ARAYÜZLER',
      'home-tech-cat-intelligence': 'YAPAY ZEKA & OTOMASYON',
      'home-tech-proto-desc-hdr': 'SEÇİLEN PROTOKOL AÇIKLAMASI',
      'home-tech-default-desc': 'Aktif yazılım mimarisindeki rolünü ve kullanım amacını görüntülemek için yukarıdaki düğümlerden birinin üzerine gelin veya dokunun.',
      'home-tech-status-active': 'DURUM: PROJELERDE AKTİF',

      // Home - Section 4: Data Landscape / Development Activity
      'home-lab-stage': '[ 05 / ARŞİV ]',
      'home-lab-tag': 'KOD VE GELİŞTİRME AKTİVİTESİ',
      'home-lab-title': 'VERİ VE GELİŞTİRME MANZARASI',
      'home-lab-matrix-hdr': 'YILLIK KATKI VE AKTİVİTE MATRİSİ',
      'home-lab-contrib-count': '487 KATKI // SON 365 GÜN',
      'home-lab-less': 'AZ',
      'home-lab-more': 'ÇOK AKTİF',
      'home-lab-volumetrics-hdr': 'KOD TABANI DİL DAĞILIMI',
      'home-lab-loc-label': 'KOD SATIRI HACMİNE GÖRE',
      'home-lab-feed-hdr': 'CANLI TELEMETRİ AKIŞI',
      'home-lab-pulse-title': 'SİSTEM NABZI',
      'home-lab-synced': 'GÜNCEL',
      'home-lab-commit-title': 'Son Commit: "feat: add vectorized similarity matrix"',
      'home-lab-commit-time': '2 saat önce (main dalı)',
      'home-lab-pipeline-agent': 'OTONOM AJANLAR',
      'home-lab-pipeline-status': 'AKTİF',
      'home-lab-pipeline-time': 'CI/CD Pipeline 44 saniyede tamamlandı',
      'home-lab-pipeline-tests': '18 birim test başarıyla doğrulandı',
      'home-lab-bottom-tag': '[ TÜM ARŞİV ]',
      'home-lab-bottom-title': 'YAŞAYAN KOD LABORATUVARI',
      'home-lab-bottom-desc': 'Canlıya alınmış otomasyon altyapılarını, yapay zeka iş akışlarını ve görsel hesaplama araçlarını keşfedin.',
      'home-lab-bottom-cta': 'PROJELERİ VE ÇALIŞMALARI KEŞFET',

      // ==========================================
      // Projects Page (projects.html)
      // ==========================================
      'projects-stage-tag': '02 // ÜRETİM & ÇALIŞMALAR',
      'projects-github-status': 'GITHUB BAĞLANTISI: @sinan-keskin • 7 AÇIK KAYNAK PROJE YÜKLENDİ',
      'projects-title': 'PROJELER & DENEYLER',
      'projects-subtitle': 'Her proje kodla şekillendirilmiş bir sistemdir — prodüksiyonda test edilmiş, merakla üretilmiştir.',
      'filter-all': 'TÜMÜ',
      'filter-backend': 'BACKEND & OTOMASYON',
      'filter-apis': 'API & SERVİSLER',
      'filter-system': 'SİSTEM ARAÇLARI',
      'filter-python': 'PYTHON',
      'sort-label': 'SIRALA:',
      'sort-recent': 'EN YENİ COMMİTLER',
      'sort-popular': 'YILDIZ SAYISI',

      // Project 1 - BASH-TOOLS
      'p1-index': '[01/07] • BASH / SHELL',
      'p1-badge': 'ÜRETİME HAZIR',
      'p1-desc': 'Yapılandırılmış JSON loglama, üstel geri çekilme (exponential backoff) ve gelişmiş hata yakalama mimarisine sahip prodüksiyon odaklı Bash araçları.',
      'p1-meta1': 'KARARLI // V2.4.0',
      'p1-meta2': 'POSIX UYUMLU',
      'p1-meta3': 'SIFIR DIŞ BAĞIMLILIK',
      'p1-term-container': 'KABUK_ORTAMI_V4',
      'p1-term-live': 'ÇALIŞTIRMA: CANLI',
      'p1-term-status': 'DURUM: 0 (BAŞARILI)',
      'p1-terminal-comment': '# JSON formatlı metrik akışlarıyla otomatik daemon çalıştırıcıyı başlat',
      'p1-terminal-hooks': 'Bağlanan çalışma zamanı kancaları: SIGINT, SIGTERM, ERR',
      'p1-terminal-mem': 'BELLEK: 12.8MB // İŞ PARÇACIĞI: 1',

      // Project 2 - PUBLIC-ALL-IN-ONE
      'p2-index': '[02/07] • PYTHON / STREAMLIT',
      'p2-badge': 'ÇOK AMAÇLI ARAÇ SETİ',
      'p2-desc': 'Gerçek zamanlı yardımcı araçlar sunan yüksek performanslı Streamlit uygulaması: SteamID çözümleyici, dinamik QR oluşturucu, görsel işleme ve veri dönüştürücüler.',
      'p2-meta1': 'STREAMLIT MOTORU',
      'p2-meta2': 'PILLOW İŞLEME',
      'p2-meta3': 'ASENKRON HTTPX',
      'p2-sim-hdr': 'CANLI SİMÜLASYON // PARAMETRELER',
      'p2-sim-port': 'PORT: 8501 // HAZIR',
      'p2-sim-slider-label': 'Görsel Sıkıştırma Oranı',
      'p2-sim-fast': '%10 (HIZLI)',
      'p2-sim-lossless': '%100 (KAYIPSIZ)',
      'p2-sim-qr-label': 'QR Hata Düzeltme Seviyesi',
      'p2-sim-metrics-hdr': 'ÇIKTI PERFORMANS METRİKLERİ',
      'p2-sim-status': 'İŞLEM: BOŞTA',
      'p2-sim-jobs': 'ÇÖZÜLEN İŞLEMLER',
      'p2-sim-latency': 'ORTALAMA GECİKME',
      'p2-sim-cache': 'ÖNBELLEK İSABET ORANI',

      // Project 3 - NODE-API
      'p3-index': '[03/07] • NODE.JS / EXPRESS',
      'p3-badge': 'GÜVENLİ REST MİMARİSİ',
      'p3-desc': 'Zod şema doğrulaması, token-bucket hız sınırlandırması (rate limiting) ve otomatik Vitest test entegrasyonuna sahip güçlendirilmiş Express REST API altyapısı.',
      'p3-meta1': 'JWT RSA-256',
      'p3-meta2': 'ZOD DOĞRULAMA',
      'p3-meta3': 'VITEST TESTLERİ',
      'p3-coverage': 'TEST KAPSAMI: %98.4',
      'p3-diag-hdr': 'ROTA TOPOLOJİSİ & GECİKME GRAFİĞİ',
      'p3-diag-arch': 'REST MİMARİSİ',
      'p3-timeline': 'GECİKME ZAMAN ÇİZELGESİ (SON 60 SANİYE)',
      'p3-now': 'ŞU AN',

      // Project 4 - WEB-STARTER
      'p4-index': '[04/07] • BAŞLANGIÇ ŞABLONU',
      'p4-badge': 'AÇIK KAYNAK PROJE',
      'p4-desc': 'Hızlı prototip ve deneysel projeler için tasarlanmış minimalist başlangıç şablonu. Tailwind CSS, TypeScript derleme hattı ve anlık yenileme desteği.',
      'p4-commits': 'COMMİT: 84',

      // Project 5 - CPP-SNIPPETS
      'p5-index': '[05/07] • C++ / ALGORİTMALAR',
      'p5-badge': 'DÜŞÜK SEVİYE',
      'p5-desc': 'Özel bellek tahsis ediciler (custom allocators), önbellek dostu veri yapıları ve yüksek işlem gücü için SIMD hesaplama algoritmaları.',
      'p5-profile': 'BELLEK ANALİZİ: VALGRIND',

      // Shared Project Buttons
      'view-repo-btn': 'DEPODA İNCELE',
      'clone-snippet-btn': 'KODU KOPYALA',
      'launch-app-btn': 'UYGULAMAYI BAŞLAT',
      'inspect-source-btn': 'KAYNAĞI GÖRÜNTÜLE',
      'open-repo-btn': 'DEPOYA GİT',
      'projects-next-chapter': 'BÖLÜM GEÇİŞİ // 03',
      'projects-next-cta': 'İLETİŞİME GEÇİN ↗',

      // ==========================================
      // Contact Page (contact.html)
      // ==========================================
      'contact-state-tag': '03 / BAĞLANTI',
      'contact-channel-status': 'DURUM 06 // İLETİŞİM KANALLARI AKTİF',
      'contact-gateway-status': 'AĞ GEÇİDİ AÇIK // GECİKME: 14MS',
      'contact-hero-title': 'BİRLİKTE BİR ŞEYLER',
      'contact-hero-title-highlight': 'İNŞA EDELİM.',
      'contact-invitation-tag': '[ DOĞRUDAN İLETİŞİM ]',
      'contact-invitation-desc': 'Bir proje fikriniz, otomasyon ihtiyacınız, backend sistemi talebiniz veya teknik bir sorunuz mu var? Aşağıdaki kanallardan doğrudan bana ulaşabilirsiniz.',
      'contact-relays-header': 'DOĞRUDAN İLETİŞİM KANALLARI',
      'contact-relays-envelope': 'GÜVENLİ VE DOĞRUDAN İLETİŞİM',

      // Relays
      'relay-1-name': 'KANAL 01 // E-POSTA',
      'relay-1-desc': 'Sözleşmeler, mimari danışmanlık ve proje teklifleri için doğrudan iletişim adresi.',
      'relay-2-name': 'KANAL 02 // TELEGRAM',
      'relay-2-badge': 'ORTALAMA YANIT SÜRESİ < 2 SAAT',
      'relay-3-name': 'KANAL 03 // INSTAGRAM',
      'relay-3-badge': 'GELİŞTİRME GÜNLÜKLERİ & GÖRSEL SANAT',
      'relay-4-name': 'KANAL 04 // GITHUB KOD ARŞİVİ',
      'relay-4-tag': 'AÇIK KAYNAK PROJELER',
      'relay-4-badge': 'KATKILARA AÇIK • AÇIK KAYNAK GELİŞTİRİCİ',
      'relay-4-btn': 'KODLARI İNCELE',

      // Contact Sidebar Info
      'contact-locale-hdr': 'LOKASYON & ÇALIŞMA ALANI',
      'contact-locale-city': 'KOCAELİ // 40°47\'17.8" K, 29°22\'07.8" D',
      'contact-telemetry-hdr': 'BAĞLANTI TELEMETRİSİ',
      'contact-telemetry-opt': 'OPTİMAL',
      'contact-cadence-label': 'YANIT HIZI: YÜKSEK',

      // Contact Form
      'form-terminal-title': 'DOĞRUDAN MESAJ İLETİMİ',
      'form-label-identity': '01 // ADINIZ & KURUM / ŞİRKET',
      'form-placeholder-identity': 'Örn: Sinan Keskin / Şirket A.Ş.',
      'form-label-channel': '02 // İLETİŞİM BİLGİNİZ (E-POSTA / TELEGRAM)',
      'form-placeholder-channel': 'Örn: iletisim@sirket.com veya @kullanici_adi',
      'form-label-payload': '03 // MESAJINIZ (PROJE ÖZETİ / TALEPLER / ZAMAN PLANI)',
      'form-placeholder-payload': 'Proje detaylarını, teknik gereksinimleri veya iş birliği hedeflerinizi yazın...',
      'form-gpg-badge': 'GÜVENLİ & ŞİFRELİ İLETİM',
      'form-submit-btn': 'MESAJI GÖNDER',
      'copy-btn-text': 'KOPYALA',
      'launch-btn-text': 'E-POSTA GÖNDER',

      // Contact Bottom Cards
      'contact-uptime-hdr': 'SİSTEM DURUMU',
      'contact-uptime-val': '%99.998 KESİNTİSİZ ÇALIŞMA',
      'contact-uptime-cores': 'ÇİFT BULUT ALTYAPISI // KESİNTİSİZ İZLEME',
      'contact-sub-role': 'SİNAN KESKİN — YAZILIM GELİŞTİRİCİ & SİSTEM MİMARI',
      'contact-sub-loc': '40°47\'17.8" K, 29°22\'07.8" D • KOCAELİ / TÜRKİYE',
      'contact-sub-motto': 'MÜHENDİSLİK DİSİPLİNİ VE TEMİZ MİMARİ İLE GELİŞTİRİLDİ',
      'contact-copied-toast': 'PANAYA KOPYALANDI',

      // Notifications / HUD Toasts
      'toast-dispatched': '[ MESAJINIZ İLETİLDİ // BAŞARIYLA ALINDI ]',
      'toast-email-copied': '[ E-POSTA ADRESİ PANAYA KOPYALANDI ]',
      'toast-audio-on': '[ ORTAM SES MATRİSİ: AKTİF // 108Hz REZONANS ]',
      'toast-audio-off': '[ ORTAM SES MATRİSİ: SESSİZ ]'
    }
  };

  // Node tech info translations for the interactive graph (all 18 nodes)
  const techNodeTranslations = {
    en: {
      'PYTHON': 'Automated scripts, algorithmic workflows, backend ingestion engines, and neural API integration.',
      'NODE.JS': 'Event-driven asynchronous services, high-throughput microservices, and socket communication layers.',
      'JAVA': 'Strict typing structures, concurrent data architectures, and algorithmic modeling.',
      'EXPRESS': 'Minimalist HTTP routing layers, high-speed middleware, and JSON API payloads.',
      'BASH': 'Automated environment bootstrapping, cron execution, POSIX scripts, and server orchestration.',
      'DOCKER': 'Containerized micro-architectures, idempotent deploy chains, and reproducible runtime environments.',
      'POSTGRESQL': 'Relational integrity, ACID compliance, optimized indexing, and JSONB document hybrid queries.',
      'LINUX': 'Kernel space tuning, SSH tunnels, permission hierarchies, and headless VPS daemon management.',
      'GIT': 'Atomic revisions, trunk-based releases, rebase workflows, and repository governance.',
      'REST APIS': 'Clean OpenAPI contracts, token bucket rate limiting, tokenized authentication, and webhooks.',
      'REACT': 'State machines, reactive component lifecycles, and modular interface architectures.',
      'TYPESCRIPT': 'Static type verification, zero-runtime contract safety, and expressive modern interfaces.',
      'TAILWINDCSS': 'Design token enforcement, sub-atomic styling primitives, and fluid responsive layout systems.',
      'WEBGL / THREE.JS': 'Hardware-accelerated fragment shaders, vertex manipulations, and interactive 3D spatial environments.',
      'STREAMLIT': 'Rapid telemetry dashboards, model evaluation canvases, and automated analytical web apps.',
      'OPENAI API': 'Semantic embeddings, structured JSON outputs, vector synthesis, and inference orchestration.',
      'AGENTS': 'Autonomous tool-calling loops, multi-agent goal resolution, and task execution pipelines.',
      'DATA PIPELINES': 'ETL batch scripts, continuous data transformations, structured scrapers, and sanitization filters.'
    },
    tr: {
      'PYTHON': 'Otomasyon betikleri, algoritmik iş akışları, veri işleme motorları ve yapay zeka entegrasyonları.',
      'NODE.JS': 'Olay güdümlü (event-driven) asenkron servisler, yüksek eşzamanlı mikroservisler ve WebSocket katmanları.',
      'JAVA': 'Güçlü tip güvenliği, eşzamanlı (concurrent) veri mimarileri ve kurumsal ölçekli algoritmik modelleme.',
      'EXPRESS': 'Hafif ve yüksek performanslı HTTP yönlendirme katmanları, ara yazılımlar ve RESTful API servisleri.',
      'BASH': 'Otomatik ortam kurulumları, cron zamanlayıcıları, POSIX betikleri ve sunucu orkestrasyonu.',
      'DOCKER': 'Konteyner tabanlı mikro mimariler, tekrarlanabilir çalışma ortamları ve izole dağıtım altyapısı.',
      'POSTGRESQL': 'İlişkisel veri bütünlüğü, ACID uyumluluğu, gelişmiş indeksleme ve JSONB hibrit sorgulama.',
      'LINUX': 'Çekirdek optimizasyonu, SSH tünelleme, yetki hiyerarşisi ve sunucu arka plan servisleri (daemon).',
      'GIT': 'Atomik versiyon kontrolü, trunk-based dağıtımlar, rebase iş akışları ve kod yönetişimi.',
      'REST APIS': 'Açık OpenAPI standartları, hız sınırlama (rate limiting), güvenli kimlik doğrulama ve webhook sistemleri.',
      'REACT': 'Durum makineleri (state machines), reaktif bileşen yaşam döngüleri ve modüler kullanıcı arayüzleri.',
      'TYPESCRIPT': 'Statik tip doğrulaması, çalışma zamanı hata önleme ve ölçeklenebilir tip sözleşmeleri.',
      'TAILWINDCSS': 'Tasarım token sistemleri, modern CSS yardımcı sınıfları ve akıcı duyarlı (responsive) yerleşimler.',
      'WEBGL / THREE.JS': 'Donanım hızlandırmalı shader programlama, 3D matematik ve interaktif uzamsal görselleştirmeler.',
      'STREAMLIT': 'Hızlı telemetri panelleri, model değerlendirme arayüzleri ve veri analitiği web uygulamaları.',
      'OPENAI API': 'Vektör gömmeleri (embeddings), yapılandırılmış JSON çıktıları ve model çıkarım orkestrasyonu.',
      'AGENTS': 'Otonom araç çağırma döngüleri, çoklu ajan hedef çözümleme ve görev yürütme hatları.',
      'DATA PIPELINES': 'ETL veri dönüşüm hatları, sürekli veri akışları, yapılandırılmış veri madenciliği ve filtreleme.'
    }
  };

  const STORAGE_KEY = 'sinan_portfolio_lang';

  function getLanguage() {
    return localStorage.getItem(STORAGE_KEY) || 'tr';
  }

  function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'tr') lang = 'tr';
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;

    const dict = translations[lang] || translations.tr;

        // 0. Dynamic Document Title Translation
    const currentPath = (window.location.pathname || '').toLowerCase();
    let newTitle = '';
    if (currentPath.includes('project')) {
      newTitle = dict['page-title-projects'] || 'Projects & Experiments — Sinan Keskin';
    } else if (currentPath.includes('contact')) {
      newTitle = dict['page-title-contact'] || 'Contact & Transmission Chamber — Sinan Keskin';
    } else {
      newTitle = dict['page-title-home'] || 'Sinan Keskin — Software Developer & System Architect';
    }
    document.title = newTitle;
    const titleElement = document.querySelector('title');
    if (titleElement) {
      titleElement.textContent = newTitle;
    }

    // 1. Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = (el.getAttribute('data-i18n') || '').trim();
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // 2. Update all inputs/textareas with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.placeholder = dict[key];
      }
    });

    // 3. Update active flag button styling across all instances
    updateFlagButtons(lang);

    // 4. Update dynamic tech node descriptions if on home page
    updateTechNodes(lang);

    // 5. Update sort dropdown options if on projects page
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
      if (sortSelect.options[0]) sortSelect.options[0].text = dict['sort-recent'];
      if (sortSelect.options[1]) sortSelect.options[1].text = dict['sort-popular'];
    }

    // 6. Dispatch custom event for other scripts
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang, dict } }));
  }

  function updateFlagButtons(lang) {
    const trBtns = document.querySelectorAll('.lang-btn-tr, #lang-btn-tr');
    const enBtns = document.querySelectorAll('.lang-btn-en, #lang-btn-en');

    const activeCls = ['bg-primary/20', 'ring-2', 'ring-primary', 'opacity-100', 'scale-105'];
    const inactiveCls = ['opacity-45', 'hover:opacity-100', 'hover:bg-surface-container-highest'];

    if (lang === 'tr') {
      trBtns.forEach(b => {
        b.classList.remove(...inactiveCls);
        b.classList.add(...activeCls);
        b.setAttribute('aria-pressed', 'true');
      });
      enBtns.forEach(b => {
        b.classList.remove(...activeCls);
        b.classList.add(...inactiveCls);
        b.setAttribute('aria-pressed', 'false');
      });
    } else {
      enBtns.forEach(b => {
        b.classList.remove(...inactiveCls);
        b.classList.add(...activeCls);
        b.setAttribute('aria-pressed', 'true');
      });
      trBtns.forEach(b => {
        b.classList.remove(...activeCls);
        b.classList.add(...inactiveCls);
        b.setAttribute('aria-pressed', 'false');
      });
    }
  }

  function updateTechNodes(lang) {
    const nodes = document.querySelectorAll('.tech-node');
    if (!nodes.length) return;
    const nodeDict = techNodeTranslations[lang] || techNodeTranslations.tr;

    nodes.forEach(node => {
      const tech = (node.getAttribute('data-tech') || '').trim().toUpperCase();
      if (nodeDict[tech]) {
        node.setAttribute('data-desc', nodeDict[tech]);
      }
    });

    const descEl = document.getElementById('node-inspector-desc');
    const titleEl = document.getElementById('node-inspector-title');
    const dict = translations[lang] || translations.tr;

    if (descEl && titleEl && !titleEl.textContent.includes('//')) {
      titleEl.textContent = dict['home-tech-proto-desc-hdr'];
      descEl.textContent = dict['home-tech-default-desc'];
    }
  }

  // Global Attach Event Listeners
  function initLanguageButtons() {
    document.addEventListener('click', (e) => {
      const trTarget = e.target.closest('.lang-btn-tr, #lang-btn-tr');
      if (trTarget) {
        setLanguage('tr');
        if (window.showHUDToast) {
          window.showHUDToast('[ DİL DEĞİŞTİRİLDİ: TÜRKÇE (TR) ]');
        }
        return;
      }

      const enTarget = e.target.closest('.lang-btn-en, #lang-btn-en');
      if (enTarget) {
        setLanguage('en');
        if (window.showHUDToast) {
          window.showHUDToast('[ LANGUAGE SWITCHED: ENGLISH (EN) ]');
        }
        return;
      }
    });

    // Apply saved or initial language
    setLanguage(getLanguage());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageButtons);
  } else {
    initLanguageButtons();
  }

  // Expose to window
  window.i18n = {
    setLanguage,
    getLanguage,
    translations,
    techNodeTranslations
  };
})();
