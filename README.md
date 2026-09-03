# Sinan Keskin — Digital Universe Portfolio (Aetheric Terminal)

A speculative cyber-editorial portfolio and interactive digital universe designed for creative technologist and software engineer Sinan Keskin.

Built directly from StitchMCP design specifications, featuring custom WebGL/Three.js cosmic background simulation, responsive telemetry HUD, dynamic interaction components, and multi-page routing.

---

## 🌌 Core Architectural Features

### 1. Interactive 3D Digital Universe (`assets/js/universe.js`)
- **Three.js WebGL Organism**: 2,800 celestial cluster particles arranged with organic phyllotaxis distribution and responsive additive blending.
- **Neural Network Lattice**: Dynamic wireframe lines connecting active nodes in real-time.
- **Concentric Orbital Rings**: Torus geometries radiating subtle cyan and azure illumination.
- **Responsive Physics**: Interactive cursor tilt lerping, scroll progression transformations, and harmonic particle deformations.

### 2. Pages & Layout Architecture
- **Home (`index.html`)**:
  - Monumental typography using `Space Grotesk`, `Geist`, and `JetBrains Mono`.
  - Creative technologist manifesto & philosophy section.
  - Interactive **Technology Ecosystem Node Inspector** (hovering or clicking nodes dynamically updates active telemetry specs).
  - Data landscape terminal visualization.
- **Projects (`projects.html`)**:
  - Live category filters (`ALL`, `SYSTEM`, `BACKEND & AUTOMATION`, `PYTHON`, `APIs`).
  - Interactive project cards with repo links, code inspect links, and clone snippet clipboard triggers.
  - Sorting and simulated memory ratio controls.
- **Transmission Room (`contact.html`)**:
  - Communication relays (Encrypted Email, Telegram, Instagram, GitHub Matrix).
  - Real-time cryptographic payload byte counter (`Blob.size` calculation).
  - Bilingual language switcher (`EN` / `TR`) with instant Turkish translation.
  - One-click copy email button with animated HUD toast feedback.
  - Interactive transmission dispatch form.

### 3. Audio & HUD Systems (`assets/js/main.js`)
- **Web Audio API Ambient Drone**: Integrated sci-fi drone synthesizer (108Hz harmonic) triggered by the header equalizer button (`graphic_eq`).
- **Mobile Responsive Drawer**: Off-canvas futuristic navigation drawer for mobile and tablet devices.
- **Live Chronometer**: Real-time header timestamp with second-by-second updates.

---

## 🚀 How to Run Locally

You can serve the application using any static HTTP server. For example:

### Using Python:
```bash
python -m http.server 8080
```
Open [http://localhost:8080/index.html](http://localhost:8080/index.html) in your browser.

### Using Node.js / npx:
```bash
npx serve .
```

---

## 📁 Directory Structure

```
Stitch Test/
├── assets/
│   ├── css/
│   │   └── style.css            # Custom cyberpunk glassmorphism, scrollbars, and HUD styling
│   └── js/
│       ├── main.js              # Site controller: mobile drawer, Web Audio ambient drone, live HUD
│       └── universe.js          # Modular Three.js 3D cosmic organism simulation
├── contact.html                 # Transmission Room / Contact page
├── index.html                   # Home page & Technology Ecosystem
├── projects.html                # Projects & Experiments directory with live filtering
└── README.md                    # Project documentation
```
