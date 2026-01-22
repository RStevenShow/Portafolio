import React, { useState } from "react";
import { TextAnimate } from "./ui/text-animate.jsx";
import { AnimatedGridPattern } from "./ui/animated-grid-pattern.jsx"; 
import { useNavigate } from "react-router-dom";
import { cn } from "../lib/utils"; 

const Hero = () => {
  const navigate = useNavigate();
  const [tocado, setTocado] = useState(false);

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 md:py-32 max-w-7xl mx-auto gap-12 overflow-hidden">
      {/* FONDO ANIMADO */}
      <AnimatedGridPattern
        numSquares={50}
        maxOpacity={0.2}
        duration={5}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "absolute inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 opacity-50",
        )}
      />

      {/* LADO IZQUIERDO: TEXTO */}
      <div className="relative z-10 flex-1 flex flex-col items-start space-y-6">
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="text-6xl sm:text-7xl md:text-8xl font-bold text-white tracking-tighter"
        >
          Perfil
        </TextAnimate>

        <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl text-pretty">
          Estudiante avanzado de Ingeniería en Sistemas con enfoque en desarrollo de software y programación. Poseo sólidos conocimientos en bases de datos relacionales (SQL Server, MySQL) y dominio de lenguajes como C#, Python y JavaScript, así como conocimiento en frameworks modernos como React, Next.js y Django. Me caracterizo por ser autodidacta, proactivo y orientado a la resolución de problemas.
        </p>

        <button
          onClick={() => navigate("/contacto")}
          className="bg-white text-black px-8 py-3 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95"
        >
          Contacto
        </button>
      </div>

      {/* LADO DERECHO: FOTO */}
      <div className="relative z-10 flex-1 flex justify-end w-full">
        <div 
          className="relative group w-full max-w-[420px]" 
          onTouchStart={() => setTocado(true)}
          onTouchEnd={() => setTocado(false)}
        >
          {/* Resplandor detrás de la foto */}
          <div className={`
            absolute -inset-1 bg-gradient-to-r from-gray-500 to-gray-800 rounded-[2.5rem] blur 
            opacity-20 transition duration-1000
            ${tocado ? "opacity-40" : "group-hover:opacity-40"}
          `}></div>

          {/* Contenedor de la imagen */}
          <div className="relative bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden border border-white/10 aspect-[5/5] shadow-2xl">
            <img
              src="/Fot/ft.png"
              alt="Ramon Lopez"
              className={`
                w-full h-full object-cover object-center grayscale transition-all duration-700 ease-in-out scale-105
                ${tocado ? "grayscale-0 scale-100" : "group-hover:grayscale-0 group-hover:scale-100"}
              `}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
