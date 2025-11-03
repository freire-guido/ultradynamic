"use client";

import Link from "next/link";
import { projects } from "@/lib/projects";
import { useEffect, useRef } from "react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosRef = useRef({ x: -1000, y: -1000 });
  const scrollOffsetRef = useRef(0);

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

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePosRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    // Scroll tracking
    const handleScroll = () => {
      scrollOffsetRef.current = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // City-like sparse growth - nodes appearing randomly and spreading organically
    let time = 0;
    
    const nodes: Array<{ 
      x: number; 
      y: number; 
      growthProgress: number;
      size: number;
      neighborCount: number;
      phase: number;
      age: number;
    }> = [];
    
    // Seed initial random nodes
    const numSeeds = 12;
    for (let i = 0; i < numSeeds; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        growthProgress: Math.random() * 0.5,
        size: Math.random() * 3 + 2,
        neighborCount: 0,
        phase: Math.random() * Math.PI * 2,
        age: Math.random() * 10
      });
    }

    // Spawn new nodes randomly
    setInterval(() => {
      if (nodes.length < 50 && Math.random() > 0.4) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          growthProgress: 0,
          size: Math.random() * 2 + 1.5,
          neighborCount: 0,
          phase: Math.random() * Math.PI * 2,
          age: 0
        });
      }
    }, 1000);

    const animate = () => {
      time += 0.015;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update nodes
      nodes.forEach((node, idx) => {
        node.age += 0.015;
        node.growthProgress = Math.min(node.growthProgress + 0.015, 1);
        
        // Calculate influence from mouse
        const dx = mousePosRef.current.x - node.x;
        const dy = mousePosRef.current.y - node.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        const mouseInfluence = distToMouse < 150 ? (150 - distToMouse) / 150 : 0;
        
        // Calculate scroll influence
        const scrollInfluence = Math.sin(scrollOffsetRef.current * 0.02 + idx) * 0.5 + 0.5;
        
        // Draw connections to nearby nodes
        nodes.slice(idx + 1).forEach(otherNode => {
          const dx = otherNode.x - node.x;
          const dy = otherNode.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 150) {
            // Connection strength based on distance
            const connectionStrength = 1 - dist / 150;
            const pulse = Math.sin(time * 3 + node.phase) * 0.4 + 0.6;
            
            ctx.strokeStyle = `rgba(0, 0, 0, ${0.08 * connectionStrength * pulse * node.growthProgress * otherNode.growthProgress})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        });
        
        // Draw node with effects
        const pulseAmount = Math.sin(time + node.phase) * 0.2 + 1;
        const finalSize = node.size * node.growthProgress * pulseAmount * (1 + mouseInfluence * 0.3);
        
        // Glow effect on hover
        if (mouseInfluence > 0.5) {
          ctx.fillStyle = `rgba(0, 0, 0, ${0.05 * mouseInfluence})`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, finalSize + 15 * mouseInfluence, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Main node
        const opacity = 0.15 * node.growthProgress * (1 + scrollInfluence * 0.4);
        ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, finalSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Secondary glow
        if (node.growthProgress > 0.8) {
          ctx.fillStyle = `rgba(0, 0, 0, ${opacity * 0.3})`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, finalSize * 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b border-black/[0.08] bg-white/40 backdrop-blur-xl z-50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight hover:opacity-70 transition-opacity">
            ULTRA<span className="font-light">DYNAMIC</span>
          </Link>
          <div className="flex gap-6 text-sm text-black/50">
            <a href="#projects" className="hover:text-black/80 transition-colors duration-200">
              Projects
            </a>
            <Link href="/about" className="hover:text-black/80 transition-colors duration-200">
              About
            </Link>
            <Link href="/join" className="hover:text-black/80 transition-colors duration-200">
              Join
            </Link>
          </div>
        </div>
      </nav>

      {/* Animated Hero Section */}
      <section className="relative h-[600px] bg-white overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-8 py-32">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05] mb-8 relative z-10">
              Making everything smarter with AI
            </h1>
            <p className="text-lg md:text-xl text-black/50 max-w-2xl leading-relaxed relative z-10">
              Ultradynamic Systems builds intelligent systems that push people and processes 
              to be smarter, more capable, and more effective.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light mb-20 text-black/70 tracking-tight">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, idx) => (
              <Link
                key={idx}
                href={`/projects/${project.id}`}
                className="border border-black/[0.08] p-10 hover:border-black/[0.12] transition-all duration-300 group cursor-pointer"
              >
                <h3 className="text-2xl font-medium mb-5 text-black/90 group-hover:text-black transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-black/50 mb-8 leading-relaxed text-[15px]">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="text-[11px] uppercase tracking-wider px-3 py-1.5 bg-black/[0.04] text-black/50 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/[0.08] mt-24 px-8">
        <div className="max-w-7xl mx-auto py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-lg font-semibold mb-3 tracking-tight">
                ULTRA<span className="font-light">DYNAMIC</span>
              </div>
              <p className="text-sm text-black/40 mb-4">
                ultradynamic.capital
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-black/30">
                <Link href="/privacy" className="hover:text-black/50 transition-colors">Privacy</Link>
                <Link href="/terms" className="hover:text-black/50 transition-colors">Terms</Link>
                <Link href="/ethos" className="hover:text-black/50 transition-colors">Ethos</Link>
                <Link href="/uds-login" className="hover:text-black/50 transition-colors">UDS Login</Link>
              </div>
            </div>
            <div className="text-sm text-black/40 leading-relaxed">
              <p className="mb-4">Building the future of intelligent systems.</p>
              <div className="text-xs text-black/30">
                © 2024 Ultradynamic Systems. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

