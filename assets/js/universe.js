/**
 * Interactive 3D Digital Universe Organism for Sinan Keskin Portfolio
 * Responsive to scroll state, mouse movement, and page narrative:
 * - State 01: Creation (particles constructing)
 * - State 02: Understanding (neural connections & network lines)
 * - State 03: Constellation (orbital geometry)
 * - State 04: Projects (crystallized data structure)
 * - State 06: Connection (resolving into SK monogram particles)
 */

(function() {
  function init() {
    const container = document.getElementById('threejs-container-ANIMATION_2') || 
                      document.getElementById('three-universe-container') || 
                      document.body;

    if (!container || !window.THREE) {
      console.warn('[Universe] Three.js or target container not ready yet.');
      return;
    }

    // Avoid duplicate initializations
    if (container.querySelector('canvas')) {
      return;
    }

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x090a0f, 0.0018);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 2000);
    camera.position.set(0, 0, 85);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.pointerEvents = 'none';
    container.appendChild(renderer.domElement);

    // Group for the central digital organism
    const organismGroup = new THREE.Group();
    scene.add(organismGroup);

    // 1. Primary Particle Core (Constantly constructing itself)
    const particleCount = 2800;
    const positions = new Float32Array(particleCount * 3);
    const targetPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const colorCyan = new THREE.Color(0x38e1ff);
    const colorBlue = new THREE.Color(0x60a5fa);
    const colorWhite = new THREE.Color(0xf1f5f9);
    const colorDark = new THREE.Color(0x1e293b);

    for (let i = 0; i < particleCount; i++) {
      // Generate organic phyllotaxis / celestial cluster
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      const r = 18 + 14 * Math.sin(phi * 4.0 + theta * 2.0) * (0.5 + Math.random() * 0.5);

      positions[i * 3] = r * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = r * Math.cos(phi);

      targetPositions[i * 3] = positions[i * 3];
      targetPositions[i * 3 + 1] = positions[i * 3 + 1];
      targetPositions[i * 3 + 2] = positions[i * 3 + 2];

      const mixVal = Math.random();
      let c = mixVal > 0.6 ? colorCyan : (mixVal > 0.3 ? colorBlue : (mixVal > 0.1 ? colorWhite : colorDark));
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      sizes[i] = Math.random() * 2.4 + 0.8;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Soft round particle canvas texture
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.3, 'rgba(56,225,255,0.8)');
    gradient.addColorStop(0.7, 'rgba(96,165,250,0.2)');
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
    const pTexture = new THREE.CanvasTexture(canvas);

    const particleMat = new THREE.PointsMaterial({
      size: 2.2,
      map: pTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    organismGroup.add(particleSystem);

    // 2. Wireframe / Crystalline Neural Lattice (Lines & Structural Nodes)
    const lineCount = 180;
    const linePositions = [];
    for (let i = 0; i < lineCount; i++) {
      const idx1 = Math.floor(Math.random() * (particleCount / 3));
      const idx2 = Math.floor(Math.random() * (particleCount / 3));
      linePositions.push(
        positions[idx1 * 3], positions[idx1 * 3 + 1], positions[idx1 * 3 + 2],
        positions[idx2 * 3], positions[idx2 * 3 + 1], positions[idx2 * 3 + 2]
      );
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x38e1ff,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending
    });
    const neuralNetworkLines = new THREE.LineSegments(lineGeo, lineMat);
    organismGroup.add(neuralNetworkLines);

    // 3. Floating Orbital Rings & Crystalline Polygonal Rings
    const ringGeo1 = new THREE.TorusGeometry(32, 0.08, 16, 120);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.28 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI * 0.35;
    organismGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(42, 0.06, 16, 160);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x38e1ff, transparent: true, opacity: 0.15 });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI * 0.45;
    organismGroup.add(ring2);

    // 4. Subtle Ambient & Point Lights for depth
    const ambLight = new THREE.AmbientLight(0x0e1726, 1.5);
    scene.add(ambLight);

    const pointLight1 = new THREE.PointLight(0x38e1ff, 2.5, 200);
    pointLight1.position.set(20, 20, 30);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x818cf8, 1.8, 200);
    pointLight2.position.set(-25, -20, 20);
    scene.add(pointLight2);

    // Mouse interaction state
    let mouseX = 0, mouseY = 0;
    let targetMouseX = 0, targetMouseY = 0;
    window.addEventListener('mousemove', (e) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    }, { passive: true });

    // Scroll narrative integration (Global Hook)
    window.universeState = {
      scrollProgress: 0,
      targetMode: 'creation',
      burstPulse: 0
    };

    window.addEventListener('scroll', () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
      window.universeState.scrollProgress = progress;
    }, { passive: true });

    // Animation Loop
    let clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      // Continuous celestial rotation + responsive tilt
      organismGroup.rotation.y = elapsed * 0.12 + mouseX * 0.45;
      organismGroup.rotation.x = Math.sin(elapsed * 0.08) * 0.15 + mouseY * 0.35;
      organismGroup.rotation.z = Math.cos(elapsed * 0.05) * 0.1;

      ring1.rotation.z = elapsed * 0.08;
      ring2.rotation.x = Math.PI * 0.45 + Math.sin(elapsed * 0.1) * 0.2;

      // Scroll narrative transformations
      const scrollP = window.universeState.scrollProgress;
      
      // Scale and position adjustment according to page progression
      const targetScale = 1.0 + Math.sin(scrollP * Math.PI) * 0.35;
      organismGroup.scale.set(targetScale, targetScale, targetScale);
      
      // Slight shift to the right/left dynamically as sections scroll
      const targetPosX = (mouseX * 12) + (Math.sin(scrollP * Math.PI * 2) * 14);
      const targetPosY = (mouseY * 8) - (scrollP * 25);
      organismGroup.position.x += (targetPosX - organismGroup.position.x) * 0.05;
      organismGroup.position.y += (targetPosY - organismGroup.position.y) * 0.05;

      // Pulsing particles subtle harmonic deformation
      const posAttr = particleGeo.attributes.position;
      const pArray = posAttr.array;
      for (let i = 0; i < particleCount; i += 7) {
        const idx = i * 3;
        pArray[idx] += Math.sin(elapsed * 2.0 + i) * 0.03;
        pArray[idx + 1] += Math.cos(elapsed * 1.8 + i) * 0.03;
        pArray[idx + 2] += Math.sin(elapsed * 1.5 + i) * 0.03;
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    }

    animate();

    // Resize handler
    window.addEventListener('resize', () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
