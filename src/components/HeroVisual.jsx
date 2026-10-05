import React, { useEffect, useRef } from 'react';
import { Cpu, Sparkles, Terminal, Activity } from 'lucide-react';

export default function HeroVisual() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let isVisible = true;

    // Responsive sizing with DevicePixelRatio
    const resize = () => {
      if (!containerRef.current || !canvas) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Mouse coordinates relative to canvas
    let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Nodes setup
    const nodeCount = 36;
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * (width || 400),
        y: Math.random() * (height || 400),
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.5,
        baseAlpha: Math.random() * 0.4 + 0.3,
        pulseSpeed: 0.02 + Math.random() * 0.02,
        pulseOffset: Math.random() * Math.PI * 2,
        color: i % 3 === 0 ? '#38BDF8' : i % 3 === 1 ? '#818CF8' : '#34D399',
      });
    }

    let tick = 0;

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      tick += 1;
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle circular focal gradient in center
      const centerX = width * 0.5;
      const centerY = height * 0.5;
      const radial = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, width * 0.45);
      radial.addColorStop(0, 'rgba(56, 189, 248, 0.06)');
      radial.addColorStop(0.5, 'rgba(129, 140, 248, 0.03)');
      radial.addColorStop(1, 'rgba(8, 10, 16, 0)');
      ctx.fillStyle = radial;
      ctx.fillRect(0, 0, width, height);

      // Draw subtle orbital rings around center
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, Math.min(width, height) * 0.35, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX, centerY, Math.min(width, height) * 0.22, 0, Math.PI * 2);
      ctx.stroke();

      // Update and connect nodes
      const maxDistance = 110;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Move
        n.x += n.vx;
        n.y += n.vy;

        // Bounce inside boundary
        if (n.x < 10 || n.x > width - 10) n.vx *= -1;
        if (n.y < 10 || n.y > height - 10) n.vy *= -1;

        // Mouse gentle repulsion / pull
        const dxMouse = mouse.x - n.x;
        const dyMouse = mouse.y - n.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 120 && distMouse > 0) {
          const force = (120 - distMouse) / 120;
          n.x -= (dxMouse / distMouse) * force * 1.5;
          n.y -= (dyMouse / distMouse) * force * 1.5;
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = m.x - n.x;
          const dy = m.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.25;
            ctx.strokeStyle = `rgba(129, 140, 248, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        }
      }

      // Draw node points
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const pulse = Math.sin(tick * n.pulseSpeed + n.pulseOffset);
        const radius = Math.max(1, n.radius + pulse * 0.6);
        const alpha = Math.min(1, Math.max(0.2, n.baseAlpha + pulse * 0.2));

        ctx.fillStyle = n.color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
        ctx.fill();

        // Subtle outer glow for primary nodes
        if (i % 4 === 0) {
          ctx.strokeStyle = n.color;
          ctx.globalAlpha = alpha * 0.4;
          ctx.beginPath();
          ctx.arc(n.x, n.y, radius + 3, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    // Pause rendering when scrolled out of view to preserve resources
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.1 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    render();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[480px] mx-auto flex items-center justify-center select-none"
    >
      {/* Decorative ambient backdrop */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/10 via-indigo-500/5 to-transparent blur-2xl pointer-events-none" />

      {/* Glass card container */}
      <div className="relative w-full h-full rounded-3xl border border-slate-800/80 bg-[#0c101c]/80 backdrop-blur-xl shadow-2xl shadow-black/60 overflow-hidden flex flex-col">
        {/* Card header / tech status */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800/80 bg-slate-900/40 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 font-medium">Neural Node Active</span>
          </div>
          <div className="flex items-center gap-3 text-slate-500 text-[11px]">
            <span className="flex items-center gap-1">
              <Activity className="w-3 h-3 text-cyan-400" /> 60 FPS
            </span>
            <span>Python 3.12</span>
          </div>
        </div>

        {/* Interactive Canvas */}
        <div className="relative flex-1 w-full h-full min-h-[300px]">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full cursor-crosshair"
          />

          {/* Central AI core icon badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-600/30 border border-cyan-500/40 shadow-lg shadow-cyan-500/20 backdrop-blur-md">
              <Cpu className="w-8 h-8 text-cyan-300 animate-pulse-subtle" />
              <div className="absolute -inset-1 rounded-2xl border border-cyan-400/20 animate-ping opacity-25" style={{ animationDuration: '3s' }} />
            </div>
          </div>
        </div>

        {/* Card bottom telemetry */}
        <div className="grid grid-cols-3 divide-x divide-slate-800/60 border-t border-slate-800/80 bg-slate-950/60 px-2 py-2.5 text-center text-[11px] font-mono text-slate-400">
          <div>
            <span className="block text-cyan-400 font-semibold text-xs">AI / ML</span>
            <span className="text-[10px] text-slate-500">Models</span>
          </div>
          <div>
            <span className="block text-indigo-400 font-semibold text-xs">Workflows</span>
            <span className="text-[10px] text-slate-500">Pipelines</span>
          </div>
          <div>
            <span className="block text-emerald-400 font-semibold text-xs">Clean Code</span>
            <span className="text-[10px] text-slate-500">Architecture</span>
          </div>
        </div>
      </div>
    </div>
  );
}
