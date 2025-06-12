import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

import Sudev from "../assets/Sudev.png";
import { useData } from "../ContextData";

const MainLayout = ({ children, classname }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  let data = useData();
  let contacts = data.contacts;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const canvas = document.getElementById("bg-canvas");
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const minV = 0.1;
    const maxV = 0.5;
    const minR = 1;
    const maxR = 3;
    const maxDistToConnect = 200;
    const numOfParticles = 50;
    const particles = [];
    const bgColTop = "#000724";
    const bgColBottom = "#000000";
    const pointColor = "#000464";

    function random(min, max) {
      if (max === undefined) {
        max = min;
        min = 0;
      }
      return Math.random() * (max - min) + min;
    }
    function map(val, inMin, inMax, outMin, outMax) {
      return ((val - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
    }
    function dist(x1, y1, x2, y2) {
      return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    class Vector {
      constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
      }
      add(other) {
        this.x += other.x;
        this.y += other.y;
      }
      set(x, y) {
        this.x = x;
        this.y = y;
      }
      limit(max) {
        const mag = Math.sqrt(this.x ** 2 + this.y ** 2);
        if (mag > max) {
          this.x = (this.x / mag) * max;
          this.y = (this.y / mag) * max;
        }
      }
    }

    class Particle {
      constructor(x, y, vx, vy, r) {
        this.pos = new Vector(x, y);
        this.vel = new Vector(vx, vy);
        this.acc = new Vector();
        this.rad = r;
        this.col = 0;
      }
      update() {
        const n = 0.02;
        this.acc.set(random(-n, n), random(-n, n));

        this.vel.add(this.acc);
        this.pos.add(this.vel);

        this.vel.limit(0.5);
        if (this.col < 255) this.col += 5;
      }
      show() {
        ctx.fillStyle = pointColor;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.rad, 0, Math.PI * 2);
        ctx.fill();
      }

      connect(other) {
        if (this !== other) {
          const d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
          if (d < maxDistToConnect) {
            const alpha = map(d, 0, maxDistToConnect, 1, 0); // 1 (solid) to 0 (transparent)
            ctx.strokeStyle = `rgba(0, 4, 100, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(this.pos.x, this.pos.y);
            ctx.lineTo(other.pos.x, other.pos.y);
            ctx.stroke();
          }
        }
      }

      isVisible() {
        return (
          this.pos.x - this.rad >= 0 &&
          this.pos.y - this.rad >= 0 &&
          this.pos.x + this.rad <= width &&
          this.pos.y + this.rad <= height
        );
      }
    }

    function createParticle() {
      const v = random(minV, maxV);
      const a = random(2 * Math.PI);
      particles.push(
        new Particle(
          random(width),
          random(height),
          v * Math.cos(a),
          v * Math.sin(a),
          random(minR, maxR)
        )
      );
    }

    function killParticle(p) {
      const index = particles.indexOf(p);
      if (index !== -1) {
        particles.splice(index, 1);
      }
    }

    function draw() {
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, bgColTop);
      gradient.addColorStop(1, bgColBottom);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      for (let p of particles) {
        p.update();
        for (let q of particles) p.connect(q);
        p.show();
        if (!p.isVisible()) {
          killParticle(p);
          createParticle();
        }
      }
      requestAnimationFrame(draw);
    }

    window.addEventListener("resize", () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });

    // initialize particles
    for (let i = 0; i < numOfParticles; i++) {
      createParticle();
    }

    draw();
  }, []);

  return (
    <>
      <canvas
        id="bg-canvas"
        className="fixed top-0 left-0 w-screen h-screen z-[-1] pointer-events-none"
      />
      <div className="min-h-screen font-[Rubik]">
        <div className="flex flex-col lg:flex-row text-white items-around">
          {/* left side */}
          <div className="lg:flex-3 flex flex-col p-10 md:p-30 md:py-15 lg:pr-10 lg:sticky lg:h-0 lg:top-0">
            <>
              <img
                src={Sudev}
                className="rounded-full w-25 sm:w-30 md:w-35 lg:35"
              />
              <h1 className="text-2xl sm:text-4xl text-slate-100 font-bold mt-3 capitalize">
                Sudev Dahitule
              </h1>
              <h1 className="text-2xl text-slate-500 font-semibold uppercase">
                Full Stack Web Developer
              </h1>
              <h1 className="text-lg text-slate-300 mt-2 font-semibold flex items-center gap-1">
                <MapPin className="w-4 h-4" /> Mumbai, India
              </h1>
              <p className="text-md text-slate-300 mt-5 font-medium">
                Coding enthusiast turning ideas into interactive experiences and
                tools
              </p>
              <div className="flex flex-row gap-4 mt-4">
                {contacts.map((btn, index) => (
                  <a
                    key={index}
                    href={btn.href}
                    target={btn.label === "Resume" ? "_self" : "_blank"}
                    rel={
                      btn.label === "Resume" ? undefined : "noopener noreferrer"
                    }
                    download={btn.label === "Resume"}
                    className="flex gap-1 items-center px-3 py-2 rounded-full cursor-pointer transition
                      text-slate-300 bg-slate-500/20 hover:bg-slate-500/40 active:bg-slate-500/90
                      border border-white/60 hover:border-white backdrop-blur-xs"
                  >
                    {btn.icon}
                    {btn.label && (
                      <span className="pl-1 pr-2">{btn.label}</span>
                    )}
                  </a>
                ))}
              </div>
            </>
          </div>
          {/* Right Side */}
          <div
            className={`lg:flex-5 flex flex-col p-10 pt-0 md:p-30 md:pt-0
              lg:p-35 lg:pt-20 lg:pl-0 overflow-x-hidden ${classname}`}
          >
            {children}
          </div>
        </div>

        {/* vertical scroll progress bar */}
        <div className="fixed inset-y-0 right-0 w-1 z-50 pointer-events-none">
          <div
            className="bg-sky-800 w-full transition-all duration-300 ease-linear rounded-b"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        {/* remove default scrollbar */}
        <style>
          {`
            ::-webkit-scrollbar {
              display: none;
            }
            body {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default MainLayout;
