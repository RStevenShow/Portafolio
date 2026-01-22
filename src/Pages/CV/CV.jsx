"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, FileText, ArrowLeft, ShieldCheck } from "lucide-react";
import { BackgroundPaths } from "@/Components/background-paths";
import { Link } from "react-router-dom"; // O "next/link" si usas Next.js

export default function CV() {
  const cvPath = "/cv/cvRamonLopez.pdf"; // Asegúrate de que el PDF esté en la carpeta 'public'

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col items-center">
      {/* Fondo Dinámico */}
      <div className="absolute inset-0 z-0">
        <BackgroundPaths title="" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-12 flex flex-col items-center">
        {/* Navegación y Título */}
        <div className="w-full flex justify-between items-center mb-12">
          <Link to="/" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
            <ArrowLeft size={20} /> Volver
          </Link>
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Mi Trayectoria</h1>
          <div className="w-20"></div> {/* Espaciador para centrar el título */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          {/* Columna Izquierda: Información Rápida */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-blue-500/20 rounded-2xl border border-blue-500/30 text-blue-400 mb-4">
                  <FileText size={40} />
                </div>
                <h2 className="text-2xl font-bold text-white mb-1 text-pretty">Ramon Steven Lopez Esquivel</h2>
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-6">Ingeniería de Sistemas</p>
                
                <div className="w-full space-y-3 text-left border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3 text-gray-300 text-sm">
                    <ShieldCheck size={18} className="text-green-500 shrink-0" />
                    <span>Estudiante Avanzado(Quinto año)</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 text-sm">
                    <ShieldCheck size={18} className="text-green-500 shrink-0" />
                    <span>Apasionado Por las Tecnologias de Desarrollo y Analisis de</span>
                  </div>

                    <div className="flex items-center gap-3 text-gray-300 text-sm">
                    <ShieldCheck size={18} className="text-green-500 shrink-0" />
                    <span>Autodidacta,responsable y Adaptable</span>
                  </div>
                </div>

                <motion.a
                  href={cvPath}
                  download="CV_Ramon_Lopez_Esquivel.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-8 bg-white text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Download size={20} /> DESCARGAR PDF
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha: Vista Previa del PDF */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 h-[600px] md:h-[800px] w-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            {/* Embed del PDF para visualización directa */}
            <iframe
              src={`${cvPath}#toolbar=0&navpanes=0`}
              className="w-full h-full border-none"
              title="Vista previa del CV"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}