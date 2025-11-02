"use client";

import { useEffect, useRef } from "react";

interface AnimatedHeaderProps {
  projectName: string;
  tags: string[];
  projectId: string;
}

export default function AnimatedHeader({ projectName, tags, projectId }: AnimatedHeaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 600;
    };
    resize();
    window.addEventListener("resize", resize);

    // Different animations based on project ID
    const animations: Record<string, () => void> = {
      ultravending: () => {
        // Dot matrix grid that rotates
        const gridSize = 40;
        const cols = Math.ceil(canvas.width / gridSize);
        const rows = Math.ceil(canvas.height / gridSize);
        let angle = 0;

        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          angle += 0.005;

          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;

          for (let x = 0; x < cols; x++) {
            for (let y = 0; y < rows; y++) {
              const px = x * gridSize;
              const py = y * gridSize;

              // Rotate around center
              const dx = px - centerX;
              const dy = py - centerY;
              const dist = Math.sqrt(dx * dx + dy * dy);
              const baseAngle = Math.atan2(dy, dx);
              const rotatedAngle = baseAngle + angle;

              const rotX = centerX + Math.cos(rotatedAngle) * dist;
              const rotY = centerY + Math.sin(rotatedAngle) * dist;

              const opacity = Math.abs(Math.sin(dist / 100 + angle * 5)) * 0.3;
              ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
              ctx.beginPath();
              ctx.arc(rotX, rotY, 2, 0, Math.PI * 2);
              ctx.fill();
            }
          }

          requestAnimationFrame(animate);
        };
        animate();
      },

      ultragaucho: () => {
        // Network of connected particles (existing animation)
        const particles: Array<{
          x: number;
          y: number;
          vx: number;
          vy: number;
          size: number;
          opacity: number;
        }> = [];

        const particleCount = 80;
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.3 + 0.1,
          });
        }

        const getDistance = (p1: typeof particles[0], p2: typeof particles[0]) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          return Math.sqrt(dx * dx + dy * dy);
        };

        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          particles.forEach((particle) => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;
          });

          ctx.strokeStyle = "rgba(0, 0, 0, 0.08)";
          ctx.lineWidth = 0.5;
          for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
              const distance = getDistance(particles[i], particles[j]);
              if (distance < 150) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
              }
            }
          }

          particles.forEach((particle) => {
            ctx.fillStyle = `rgba(0, 0, 0, ${particle.opacity})`;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
          });

          requestAnimationFrame(animate);
        };
        animate();
      },

      ultrastudy: () => {
        // Wave patterns
        let time = 0;
        const waveCount = 8;
        const waveSpacing = canvas.height / (waveCount + 1);

        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          time += 0.02;

          for (let i = 0; i < waveCount; i++) {
            const y = waveSpacing + i * waveSpacing;
            const amplitude = 30 + Math.sin(time + i) * 10;
            const frequency = 0.02 + (i * 0.003);
            const phase = time * 0.5 + i * 0.5;

            ctx.strokeStyle = `rgba(0, 0, 0, ${0.15 - i * 0.01})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();

            for (let x = 0; x < canvas.width; x += 2) {
              const pointY = y + Math.sin(x * frequency + phase) * amplitude;
              if (x === 0) {
                ctx.moveTo(x, pointY);
              } else {
                ctx.lineTo(x, pointY);
              }
            }

            ctx.stroke();

            // Add dots along the wave
            for (let x = 0; x < canvas.width; x += 40) {
              const pointY = y + Math.sin(x * frequency + phase) * amplitude;
              ctx.fillStyle = `rgba(0, 0, 0, ${0.2 - i * 0.015})`;
              ctx.beginPath();
              ctx.arc(x, pointY, 2, 0, Math.PI * 2);
              ctx.fill();
            }
          }

          requestAnimationFrame(animate);
        };
        animate();
      },

      ctrlshift: () => {
        // Concentric circles with particles
        let time = 0;
        const circles = 5;

        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          time += 0.01;

          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;

          // Draw concentric circles
          for (let i = 0; i < circles; i++) {
            const radius = 60 + i * 60;
            const expansion = Math.sin(time * 0.5 + i * 0.5) * 20;
            const finalRadius = radius + expansion;

            ctx.strokeStyle = `rgba(0, 0, 0, ${0.15 - i * 0.02})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(centerX, centerY, finalRadius, 0, Math.PI * 2);
            ctx.stroke();
          }

          // Add rotating particles
          for (let i = 0; i < 12; i++) {
            const angle = (time + i * (Math.PI / 6)) * 0.3;
            const radius = 120 + Math.sin(time * 2 + i) * 30;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;

            ctx.fillStyle = `rgba(0, 0, 0, ${0.4})`;
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fill();
          }

          // Connection lines
          ctx.strokeStyle = "rgba(0, 0, 0, 0.08)";
          ctx.lineWidth = 0.5;
          for (let i = 0; i < 12; i++) {
            const angle1 = (time + i * (Math.PI / 6)) * 0.3;
            const angle2 = (time + ((i + 4) % 12) * (Math.PI / 6)) * 0.3;
            const radius = 120;
            const x1 = centerX + Math.cos(angle1) * radius;
            const y1 = centerY + Math.sin(angle1) * radius;
            const x2 = centerX + Math.cos(angle2) * radius;
            const y2 = centerY + Math.sin(angle2) * radius;

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }

          requestAnimationFrame(animate);
        };
        animate();
      }
    };

    // Select animation based on project ID
    const animation = animations[projectId] || animations.ultragaucho;
    animation();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [projectId]);

  return (
    <div className="relative h-[600px] bg-white overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-8 py-32 text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-8 relative z-10">
            {projectName}
          </h1>
          <div className="flex flex-wrap gap-3 justify-center">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs uppercase tracking-wider px-4 py-2 bg-black/[0.04] text-black/50 font-medium relative z-10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
