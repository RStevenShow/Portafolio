"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, FileText, ArrowLeft, ShieldCheck } from "lucide-react";
import { BackgroundPaths } from "@/Components/background-paths";
import { Link } from "react-router-dom"; // O "next/link" si usas Next.js

export default function CV() {
  const cvPath = "/cv/cvRamonLopez.pdf"; // Asegúrate de que el PDF esté en la carpeta 'public'

  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden flex flex-col items-center">
      {/* Fondo Dinámico */}
      <div className="absolute inset-0 z-0">
        <BackgroundPaths title="" />
      </div>

      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 flex flex-col items-center">
        
        {/* Navegación y Título */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12">
          <Link to="/" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors mb-4 sm:mb-0">
            <ArrowLeft size={20} /> Volver
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter text-center">
            Mi Trayectoria
          </h1>
          <div className="w-0 sm:w-20"></div> {/* Espaciador para centrar el título */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 w-full">
          
          {/* Columna Izquierda: Información Rápida */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-2xl lg:rounded-[2.5rem] shadow-2xl flex flex-col items-center">
              
              <div className="p-3 sm:p-4 bg-blue-500/20 rounded-2xl border border-blue-500/30 text-blue-400 mb-4">
                <FileText size={36} className="sm:!w-10 sm:!h-10" />
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 text-center">
                Ramon Steven Lopez Esquivel
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest mb-6 text-center">
                Ingeniería de Sistemas
              </p>

              <div className="w-full space-y-2 sm:space-y-3 text-left border-t border-white/10 pt-4 sm:pt-6">
                <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                  <ShieldCheck size={16} className="text-green-500 shrink-0" />
                  <span>Estudiante Avanzado (Quinto año)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                  <ShieldCheck size={16} className="text-green-500 shrink-0" />
                  <span>Apasionado por Tecnologías de Desarrollo y Análisis</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                  <ShieldCheck size={16} className="text-green-500 shrink-0" />
                  <span>Autodidacta, responsable y adaptable</span>
                </div>
              </div>

              <motion.a
                href={cvPath}
                download="CV_Ramon_Lopez_Esquivel.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 sm:mt-8 bg-white text-black font-black py-3 sm:py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg transition-all text-sm sm:text-base"
              >
                <Download size={18} /> DESCARGAR PDF
              </motion.a>
            </div>
          </motion.div>

          {/* Columna Derecha: Vista Previa del PDF */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 w-full"
          >
            <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-[2.5rem] overflow-hidden shadow-2xl">
              <iframe
                src={`${cvPath}#toolbar=0&navpanes=0`}
                className="w-full h-full border-none"
                title="Vista previa del CV"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
