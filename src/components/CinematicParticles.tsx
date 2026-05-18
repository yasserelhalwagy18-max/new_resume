import React, { useEffect, useRef, memo } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  color: string;
  noiseOffset: number;
}

const grad3 = [
  [1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],
  [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],
  [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]
];
const p = new Uint8Array(512);
const permutation = Array.from({ length: 256 }, () => Math.floor(Math.random() * 256));
for (let i = 0; i < 512; i++) p[i] = permutation[i & 255];
const dot = (g: number[], x: number, y: number, z: number) => g[0]*x + g[1]*y + g[2]*z;

const t3 = (x: number, y: number, z: number, i: number, j: number, k: number) => {
  let t = 0.6 - x*x - y*y - z*z;
  if (t < 0) return 0;
  t *= t;
  return t*t*dot(grad3[p[i+p[j+p[k]]]%12], x, y, z);
};

const noise3D = (xin: number, yin: number, zin: number) => {
  const F3 = 1/3, s = (xin+yin+zin)*F3;
  const i = Math.floor(xin+s), j = Math.floor(yin+s), k = Math.floor(zin+s);
  const G3 = 1/6, t = (i+j+k)*G3;
  const X0 = i-t, Y0 = j-t, Z0 = k-t;
  const x0 = xin-X0, y0 = yin-Y0, z0 = zin-Z0;
  let i1,j1,k1,i2,j2,k2;
  if (x0>=y0) {
    if (y0>=z0) { i1=1;j1=0;k1=0;i2=1;j2=1;k2=0; }
    else if (x0>=z0) { i1=1;j1=0;k1=0;i2=1;j2=0;k2=1; }
    else { i1=0;j1=0;k1=1;i2=1;j2=0;k2=1; }
  } else {
    if (y0<z0) { i1=0;j1=0;k1=1;i2=0;j2=1;k2=1; }
    else if (x0<z0) { i1=0;j1=1;k1=0;i2=0;j2=1;k2=1; }
    else { i1=0;j1=1;k1=0;i2=1;j2=1;k2=0; }
  }
  const x1=x0-i1+G3, y1=y0-j1+G3, z1=z0-k1+G3;
  const x2=x0-i2+2*G3, y2=y0-j2+2*G3, z2=z0-k2+2*G3;
  const x3=x0-1+3*G3, y3=y0-1+3*G3, z3=z0-1+3*G3;
  const ii=i&255, jj=j&255, kk=k&255;
  return 32*(t3(x0,y0,z0,ii,jj,kk)+t3(x1,y1,z1,ii+i1,jj+j1,kk+k1)+t3(x2,y2,z2,ii+i2,jj+j2,kk+k2)+t3(x3,y3,z3,ii+1,jj+1,kk+1));
};

export const CinematicParticles: React.FC = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(0);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let particles: Particle[] = [];
    const particleCount = 35;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const newW = parent.clientWidth;
      const newH = parent.clientHeight;
      if (Math.abs(canvas.width - newW) > 10 || Math.abs(canvas.height - newH) > 10 || !hasInitialized.current) {
        canvas.width = newW;
        canvas.height = newH;
        if (!hasInitialized.current) { initParticles(); hasInitialized.current = true; }
      }
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle(true));
      }
    };

    const createParticle = (isInitial = false): Particle => {
      const isAmber = Math.random() > 0.7;
      return {
        x: Math.random() * canvas.width,
        y: isInitial ? Math.random() * canvas.height : canvas.height + 20,
        size: Math.random() * 1.5 + 0.5,
        speedY: Math.random() * 0.03 + 0.01,
        speedX: Math.random() * 0.02 + 0.005,
        opacity: Math.random() * 0.15 + 0.05,
        color: isAmber ? "201, 168, 76" : "212, 210, 205",
        noiseOffset: Math.random() * 1000,
      };
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const t = time * 0.0003;

      particles.forEach((pt, index) => {
        const driftX = noise3D(pt.x * 0.002, pt.y * 0.002, t + pt.noiseOffset);
        const driftY = noise3D(pt.y * 0.002, pt.x * 0.002, t + pt.noiseOffset + 100);

        pt.x += driftX * pt.speedX;
        pt.y -= pt.speedY + driftY * 0.05;

        if (pt.y < -30) particles[index] = createParticle(false);
        if (pt.x < -30) pt.x = canvas.width + 30;
        if (pt.x > canvas.width + 30) pt.x = -30;

        // Soft radial glow — dust in light beam
        const g = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, pt.size * 4);
        g.addColorStop(0, `rgba(${pt.color}, ${pt.opacity})`);
        g.addColorStop(1, `rgba(${pt.color}, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const debouncedResize = () => { clearTimeout(resizeTimeout); resizeTimeout = setTimeout(resizeCanvas, 250); };
    window.addEventListener("resize", debouncedResize);
    resizeCanvas();
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1, willChange: "transform" }}
    />
  );
});
