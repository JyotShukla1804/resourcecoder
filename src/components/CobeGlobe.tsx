"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import ThreeGlobe from "three-globe";

export function CobeGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.offsetWidth || 440;
    const height = containerRef.current.offsetHeight || 440;
    let animationFrameId: number;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 265; // Closer camera distance for a larger display

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.max(window.devicePixelRatio, 2.0)); // Super-sample resolution for pixel-sharp edges
    
    // Force style overrides directly on the canvas DOM element to clear outlines
    renderer.domElement.style.outline = "none";
    renderer.domElement.style.border = "none";
    renderer.domElement.style.boxShadow = "none";
    
    // Clear any previous elements to prevent duplicate canvases during Hot Reload
    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(renderer.domElement);

    // 4. Globe Config & Setup
    const globeConfig = {
      pointSize: 4,
      globeColor: "#f1f3f9", // Very light gray-blue ocean base for a light theme
      showAtmosphere: true,
      atmosphereColor: "#4B56D2", // Brand blue atmosphere glow
      atmosphereAltitude: 0.08,
      emissive: "#e2e8f0", // Soft light emissive
      emissiveIntensity: 0.45,
      shininess: 15,
      polygonColor: "#dbe2ff", // Soft light lavender-blue honeycomb continents for high contrast
      ambientLight: "#ffffff", // Pure white ambient light
      directionalLeftLight: "#ffffff",
      directionalTopLight: "#ffffff",
      pointLight: "#4B56D2",
      arcTime: 2600, // Slowed down connection animation speeds to be elegant and calm
      arcLength: 0.85, // Long dashes to keep lines mostly continuous
      rings: 1,
      maxRings: 3,
      initialPosition: { lat: 22.3193, lng: 114.1694 },
      autoRotate: true,
      autoRotateSpeed: 0.5,
    };

    const colors = ["#4B56D2", "#4B56D2", "#4B56D2"]; // Single project brand blue color for high-contrast visibility
    const sampleArcs = [
      // Western Hemisphere Connections (original altitudes)
      { order: 1, startLat: 40.7128, startLng: -74.0060, endLat: 51.5074, endLng: -0.1278, arcAlt: 0.12, color: colors[0] }, // USA (NY) -> UK
      { order: 1, startLat: -22.9068, startLng: -43.1729, endLat: 40.7128, endLng: -74.0060, arcAlt: 0.1, color: colors[1] }, // Brazil -> USA (NY)
      { order: 1, startLat: 37.7749, startLng: -122.4194, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.22, color: colors[2] }, // USA (SF) -> Hong Kong
      { order: 2, startLat: 40.7128, startLng: -74.0060, endLat: 23.0225, endLng: 72.5714, arcAlt: 0.2, color: colors[0] }, // USA (NY) -> India
      
      // Eastern Hemisphere Connections (original altitudes)
      { order: 2, startLat: 51.5074, startLng: -0.1278, endLat: 23.0225, endLng: 72.5714, arcAlt: 0.14, color: colors[1] }, // UK -> India
      { order: 2, startLat: 25.2048, startLng: 55.2708, endLat: 23.0225, endLng: 72.5714, arcAlt: 0.08, color: colors[2] }, // UAE -> India
      { order: 3, startLat: 23.0225, startLng: 72.5714, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.16, color: colors[0] }, // India -> Australia
      { order: 3, startLat: 51.5074, startLng: -0.1278, endLat: 52.5200, endLng: 13.4050, arcAlt: 0.05, color: colors[1] }, // UK -> Germany
      { order: 3, startLat: 52.5200, startLng: 13.4050, endLat: 23.0225, endLng: 72.5714, arcAlt: 0.12, color: colors[2] }, // Germany -> India
      { order: 4, startLat: 23.0225, startLng: 72.5714, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.12, color: colors[0] }, // India -> Hong Kong
      { order: 4, startLat: 22.3193, startLng: 114.1694, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.15, color: colors[1] }, // Hong Kong -> Australia
      { order: 4, startLat: 25.2048, startLng: 55.2708, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.13, color: colors[2] } // UAE -> Hong Kong
    ];

    const globe = new ThreeGlobe()
      .showGlobe(true)
      .showAtmosphere(globeConfig.showAtmosphere)
      .atmosphereColor(globeConfig.atmosphereColor)
      .atmosphereAltitude(globeConfig.atmosphereAltitude);

    // Style the globe material (using high specular values to prevent the flat matte disk look)
    const globeMaterial = globe.globeMaterial() as THREE.MeshPhongMaterial;
    globeMaterial.color = new THREE.Color(globeConfig.globeColor);
    globeMaterial.emissive = new THREE.Color(globeConfig.emissive);
    globeMaterial.emissiveIntensity = 0.15; // Soft emissive glow
    globeMaterial.shininess = 30; // Glassy reflection
    globeMaterial.specular = new THREE.Color("#ffffff"); // Glossy specular highlight
    globeMaterial.transparent = true;
    globeMaterial.opacity = 0.08; // Set ocean base to be highly transparent/glassy

    // Load landmass GeoJSON
    fetch("/globe.json")
      .then((res) => res.json())
      .then((countries) => {
        globe
          .hexPolygonsData(countries.features)
          .hexPolygonResolution(4)
          .hexPolygonMargin(0.18) // Fills honeycomb grid nodes for solid high-detail landmasses
          .hexPolygonColor(() => globeConfig.polygonColor)
          .hexPolygonAltitude(0.008);
      })
      .catch((err) => console.error("Error loading globe geojson:", err));

    // Track soft shadow materials to animate their opacity in the render loop
    const activeHaloMaterials: THREE.SpriteMaterial[] = [];

    // Helper function to generate a soft circular radial gradient shadow texture
    const createShadowTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, "rgba(75, 86, 210, 0.95)"); // Center glow
        gradient.addColorStop(0.35, "rgba(75, 86, 210, 0.45)");
        gradient.addColorStop(1, "rgba(75, 86, 210, 0)"); // Fades out to edge
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const shadowTexture = createShadowTexture();

    // Load the K.svg logo as a texture sprite
    const kTexture = new THREE.TextureLoader().load("/K.svg");

    // Get unique hub coordinates to place K logo sprites
    const uniquePointsMap = new Map<string, { lat: number; lng: number; color: string }>();
    sampleArcs.forEach((arc) => {
      uniquePointsMap.set(`${arc.startLat},${arc.startLng}`, { lat: arc.startLat, lng: arc.startLng, color: arc.color });
      uniquePointsMap.set(`${arc.endLat},${arc.endLng}`, { lat: arc.endLat, lng: arc.endLng, color: arc.color });
    });
    const pointsData = Array.from(uniquePointsMap.values());

    // Highlight rings under every K logo hub
    const ringsData = pointsData;

    globe
      .customLayerData(pointsData)
      .customThreeObject((d: any) => {
        const group = new THREE.Group();

        // 1. Soft Circular Glowing Radial Shadow (Blinks)
        const shadowMaterial = new THREE.SpriteMaterial({
          map: shadowTexture,
          transparent: true,
          color: new THREE.Color("#4B56D2"), // Project UI brand blue shadow glow
          depthWrite: false,
          depthTest: true
        });
        activeHaloMaterials.push(shadowMaterial);
        const shadowSprite = new THREE.Sprite(shadowMaterial);
        shadowSprite.scale.set(11.0, 11.0, 1.0); // Larger soft halo aura extending around K
        group.add(shadowSprite);

        // 2. Solid "K" Logo Sprite (Static opacity, slightly scaled up)
        const spriteMaterial = new THREE.SpriteMaterial({
          map: kTexture,
          transparent: true,
          color: new THREE.Color("#4B56D2"), // Project UI brand blue for unified matching
          depthWrite: false,
          depthTest: true
        });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.scale.set(5.5, 5.5, 1.0); // Made K logo a little larger as requested
        sprite.position.set(0, 0, 0.1); // Positioned slightly in front of the shadow disk
        group.add(sprite);

        return group;
      })
      .customThreeObjectUpdate((obj: any, d: any) => {
        // Place the K logo group slightly above the surface to prevent depth clipping
        Object.assign(obj.position, globe.getCoords(d.lat, d.lng, 0.045));
      })
      .arcsData(sampleArcs)
      .arcColor((d: any) => d.color)
      .arcDashLength(globeConfig.arcLength)
      .arcDashGap(1.5) // Tiny gap so lines stay mostly continuous but look textured/bumpy
      .arcDashAnimateTime(globeConfig.arcTime)
      .arcStroke(0.48)
      .arcAltitude((d: any) => d.arcAlt)
      .ringsData(ringsData)
      .ringColor((d: any) => (t: number) => {
        const c = new THREE.Color(d.color);
        return `rgba(${Math.round(c.r * 255)}, ${Math.round(c.g * 255)}, ${Math.round(c.b * 255)}, ${1 - t})`;
      })
      .ringMaxRadius(3.5) // Expand wider
      .ringPropagationSpeed(1.8) // Pulse faster
      .ringRepeatPeriod(1500);

    // Initial position orientation
    const phi = (90 - globeConfig.initialPosition.lat) * (Math.PI / 180);
    const theta = (globeConfig.initialPosition.lng + 180) * (Math.PI / 180);
    globe.rotation.set(phi, theta, 0);

    scene.add(globe);

    // 5. Lights
    const ambientLight = new THREE.AmbientLight(globeConfig.ambientLight, 0.8);
    scene.add(ambientLight);

    const dLightLeft = new THREE.DirectionalLight(globeConfig.directionalLeftLight, 0.9);
    dLightLeft.position.set(-200, 100, 100);
    scene.add(dLightLeft);

    const dLightTop = new THREE.DirectionalLight(globeConfig.directionalTopLight, 0.9);
    dLightTop.position.set(0, 200, 100);
    scene.add(dLightTop);

    const pointLight = new THREE.PointLight(globeConfig.pointLight, 0.4, 500);
    pointLight.position.set(100, 100, 200);
    scene.add(pointLight);

    // 6. Orbit Controls
    const controls = new OrbitControls(camera, containerRef.current);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.enablePan = false; // Prevent globe from shifting off-center when dragging
    controls.autoRotate = true; // built-in auto-rotation around target
    controls.autoRotateSpeed = 1.2; // auto-rotation speed



    // 8. Animation loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Make the background halo gradient breathe/blink dynamically (leaving K solid)
      const time = Date.now() * 0.007;
      const opacity = 0.15 + Math.sin(time) * 0.45; // Breathe cycle between 0.15 and 0.60 opacity
      activeHaloMaterials.forEach((material) => {
        material.opacity = opacity;
      });

      controls.update(); // handles both damping and auto-rotation updates
      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth || 440;
      const h = containerRef.current.offsetHeight || 440;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Set correct dimensions immediately, and trigger again with a timeout to catch layout shifts
    handleResize();
    const timeoutId = setTimeout(handleResize, 100);

    // 10. Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
      controls.dispose();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      aria-label="Interactive 3D World Globe"
      ref={containerRef} 
      className="w-full max-w-[400px] sm:max-w-[560px] aspect-square mx-auto relative z-10 flex items-center justify-center cursor-grab active:cursor-grabbing focus:outline-none"
      style={{ outline: "none", border: "none" }}
    >
      <style>{`
        div, canvas {
          outline: none !important;
          outline-width: 0 !important;
          border: none !important;
          border-width: 0 !important;
          box-shadow: none !important;
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </div>
  );
}
