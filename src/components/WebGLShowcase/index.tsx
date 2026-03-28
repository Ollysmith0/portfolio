import { useLayoutEffect, useRef } from 'react';
import * as THREE from 'three';
import { useGsapReveal } from '@/hooks/useGsapReveal';

const FEATURE_LIST = [
  'Pointer-reactive 3D sculpture',
  'Ambient particle field with layered depth',
  'Built in raw Three.js to stay flexible',
] as const;

export default function WebGLShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLDivElement | null>(null);

  useGsapReveal(sectionRef, { selector: '[data-webgl-reveal]', y: 46, stagger: 0.1 });

  useLayoutEffect(() => {
    const canvasHost = canvasRef.current;

    if (!canvasHost) {
      return;
    }

    let frameId = 0;
    let width = canvasHost.clientWidth;
    let height = canvasHost.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x050507, 7, 15);

    const camera = new THREE.PerspectiveCamera(42, width / Math.max(height, 1), 0.1, 100);
    camera.position.set(0, 0.2, 6.8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    canvasHost.appendChild(renderer.domElement);

    const root = new THREE.Group();
    scene.add(root);

    const ambientLight = new THREE.AmbientLight(0xfff3df, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.PointLight(0xff7a2f, 18, 20, 2);
    keyLight.position.set(2.6, 1.4, 4.6);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0x8df6cf, 12, 24, 2);
    fillLight.position.set(-3.4, -1.8, 3.8);
    scene.add(fillLight);

    const coreGeometry = new THREE.IcosahedronGeometry(1.25, 18);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#ffefe2'),
      emissive: new THREE.Color('#ff7a2f'),
      emissiveIntensity: 0.18,
      roughness: 0.18,
      metalness: 0.22,
      clearcoat: 1,
      clearcoatRoughness: 0.22,
      transmission: 0.08,
      thickness: 1.4,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    root.add(coreMesh);

    const wireMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#8df6cf'),
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const wireMesh = new THREE.Mesh(coreGeometry, wireMaterial);
    wireMesh.scale.setScalar(1.18);
    root.add(wireMesh);

    const ringGeometry = new THREE.TorusGeometry(2.05, 0.015, 16, 220);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#87a7ff'),
      transparent: true,
      opacity: 0.5,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI * 0.42;
    ringMesh.rotation.y = Math.PI * 0.16;
    scene.add(ringMesh);

    const particleCount = 1400;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const colorA = new THREE.Color('#ff7a2f');
    const colorB = new THREE.Color('#8df6cf');
    const colorC = new THREE.Color('#87a7ff');

    for (let index = 0; index < particleCount; index += 1) {
      const stride = index * 3;
      const radius = 2.1 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[stride] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[stride + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[stride + 2] = radius * Math.cos(phi);

      const mixedColor = [colorA, colorB, colorC][index % 3];
      particleColors[stride] = mixedColor.r;
      particleColors[stride + 1] = mixedColor.g;
      particleColors[stride + 2] = mixedColor.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.032,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const orbiters = Array.from({ length: 3 }, (_, index) => {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.11 + index * 0.04, 24, 24),
        new THREE.MeshBasicMaterial({
          color: [0xff7a2f, 0x8df6cf, 0x87a7ff][index],
          transparent: true,
          opacity: 0.9,
        }),
      );

      scene.add(mesh);
      return mesh;
    });

    const pointer = { x: 0, y: 0 };
    const targetRotation = new THREE.Vector2(0.12, -0.2);
    const currentRotation = new THREE.Vector2(0.12, -0.2);
    const targetCamera = new THREE.Vector3(0, 0.2, 6.8);

    const resize = () => {
      width = canvasHost.clientWidth;
      height = canvasHost.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvasHost);

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = canvasHost.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;

      pointer.x = THREE.MathUtils.clamp(x * 2 - 1, -1, 1);
      pointer.y = THREE.MathUtils.clamp(y * 2 - 1, -1, 1);
      targetRotation.set(pointer.y * 0.45, pointer.x * 0.55);
      targetCamera.set(pointer.x * 0.45, 0.2 + pointer.y * -0.35, 6.8);
    };

    const handlePointerLeave = () => {
      pointer.x = 0;
      pointer.y = 0;
      targetRotation.set(0.12, -0.2);
      targetCamera.set(0, 0.2, 6.8);
    };

    canvasHost.addEventListener('pointermove', handlePointerMove);
    canvasHost.addEventListener('pointerleave', handlePointerLeave);

    const clock = new THREE.Clock();

    const renderFrame = () => {
      const elapsedTime = clock.getElapsedTime();

      currentRotation.lerp(targetRotation, 0.045);
      root.rotation.x = currentRotation.x;
      root.rotation.y = currentRotation.y + elapsedTime * 0.18;
      wireMesh.rotation.z += 0.0022;
      ringMesh.rotation.z = elapsedTime * 0.24;
      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.x = Math.sin(elapsedTime * 0.2) * 0.08;

      camera.position.lerp(targetCamera, 0.05);
      camera.lookAt(0, 0, 0);

      orbiters.forEach((orbiter, index) => {
        const orbitRadius = 1.9 + index * 0.58;
        const speed = 0.55 + index * 0.18;
        orbiter.position.set(
          Math.cos(elapsedTime * speed + index * 2.4) * orbitRadius,
          Math.sin(elapsedTime * (speed + 0.25) + index) * (0.8 + index * 0.15),
          Math.sin(elapsedTime * speed + index * 1.6) * 1.5,
        );
      });

      keyLight.position.x = 2.6 + pointer.x * 1.2;
      keyLight.position.y = 1.4 + pointer.y * -0.8;
      fillLight.position.x = -3.4 + pointer.x * -1.1;

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(renderFrame);
    };

    renderFrame();

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      canvasHost.removeEventListener('pointermove', handlePointerMove);
      canvasHost.removeEventListener('pointerleave', handlePointerLeave);

      coreGeometry.dispose();
      ringGeometry.dispose();
      particleGeometry.dispose();
      coreMaterial.dispose();
      wireMaterial.dispose();
      ringMaterial.dispose();
      particleMaterial.dispose();
      orbiters.forEach((orbiter) => {
        (orbiter.geometry as THREE.BufferGeometry).dispose();
        (orbiter.material as THREE.Material).dispose();
      });
      renderer.dispose();
      canvasHost.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section ref={sectionRef} className="px-5 pb-24 md:px-10 md:pb-28">
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
        <div className="flex flex-col gap-6">
          <span data-webgl-reveal className="section-kicker">WebGL playground</span>
          <h2
            data-webgl-reveal
            className="font-display text-5xl leading-[0.92] tracking-[-0.05em] text-[var(--color-text)] md:text-7xl"
          >
            A live Three.js pocket
            <span className="block text-[var(--color-accent)]">for playful interaction.</span>
          </h2>
          <p
            data-webgl-reveal
            className="max-w-xl text-base leading-8 text-[var(--color-muted)] md:text-lg"
          >
            Move your cursor across the sculpture to bend the camera, lights, and orbiting particles. This gives the homepage one interactive beat that feels less template-like and more authored.
          </p>

          <div data-webgl-reveal className="grid gap-3">
            {FEATURE_LIST.map((feature) => (
              <div
                key={feature}
                className="section-panel rounded-[1.5rem] border border-[var(--color-line)] px-5 py-4"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent-alt)]">
                  Interactive layer
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div data-webgl-reveal className="section-panel rounded-[2.4rem] border border-[var(--color-line)] p-4 md:p-5">
          <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(245,239,230,0.08)] bg-[radial-gradient(circle_at_top,rgba(255,122,47,0.14),rgba(5,5,7,0.9)_55%)]">
            <div
              ref={canvasRef}
              className="h-[26rem] w-full cursor-grab active:cursor-grabbing md:h-[34rem]"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[rgba(5,5,7,0.55)] to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[rgba(5,5,7,0.7)] to-transparent" />
            <div className="absolute left-5 top-5 rounded-full border border-[rgba(245,239,230,0.12)] bg-[rgba(5,5,7,0.38)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
              move cursor
            </div>
            <div className="absolute bottom-5 right-5 max-w-[14rem] rounded-[1.4rem] border border-[rgba(245,239,230,0.12)] bg-[rgba(5,5,7,0.42)] px-4 py-3 backdrop-blur-md">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--color-accent-alt)]">
                Scene note
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text)]">
                One self-contained WebGL section is enough to add surprise without slowing the whole site down.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}