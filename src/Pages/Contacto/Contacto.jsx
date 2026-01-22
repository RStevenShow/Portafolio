/* eslint-disable no-undef */
"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, MessageCircle } from "lucide-react";
import { BackgroundPaths } from "@/Components/background-paths";
import { AnimatedShinyText } from "@/Components/ui/animated-shiny-text";
import { Toaster, toast } from "sonner";

export default function Contacto() {
  const form = useRef();
  const [cargando, setCargando] = useState(false);

  const enviarEmail = (e) => {
    e.preventDefault();
    setCargando(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Variables de entorno no configuradas");
      setCargando(false);
      return;
    }

    const promise = emailjs.sendForm(serviceId, templateId, form.current, publicKey);

    toast.promise(promise, {
      loading: 'Enviando tu mensaje...',
      success: () => {
        form.current.reset();
        setCargando(false);
        return "¡Mensaje enviado con éxito a Ramon Steven!";
      },
      error: (err) => {
        setCargando(false);
        return "Error al enviar: " + (err?.text || "Problema con el servidor");
      },
    });
  };

  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center py-10 sm:py-16 md:py-20 overflow-x-hidden">
      {/* COMPONENTE DE NOTIFICACIONES */}
      <Toaster position="bottom-right" theme="dark" richColors />

      <div className="absolute inset-0 z-0">
        <BackgroundPaths />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header className="text-center mb-10 sm:mb-16" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-3 sm:mb-4 tracking-tighter uppercase">
              <AnimatedShinyText className="w-full flex justify-center py-2 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                Conversemos
              </AnimatedShinyText>
            </h1>
          </motion.div>
          <p className="text-gray-100 text-base sm:text-lg md:text-xl font-medium max-w-xl mx-auto">
            ¿Tienes un proyecto en mente? Estoy listo para ayudarte a construir el futuro.
          </p>
        </motion.header>

        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-black/80 backdrop-blur-3xl border border-white/20 p-6 sm:p-10 md:p-14 rounded-[2rem] lg:rounded-[3rem] shadow-2xl">
          
          {/* INFO DE CONTACTO */}
          <div className="space-y-8 sm:space-y-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">Contacto</h2>
            <div className="space-y-6 sm:space-y-8 text-white">
              <div className="flex items-center gap-4 sm:gap-6 group">
                <div className="p-4 sm:p-5 bg-white/10 rounded-2xl border border-white/10 text-blue-400 group-hover:scale-105 transition-transform duration-300">
                  <Mail size={28} className="sm:!w-8 sm:!h-8" />
                </div>
                <span className="text-base sm:text-xl font-bold tracking-wide break-all">ramonsteven10@yahoo.es</span>
              </div>
              <div className="flex items-center gap-4 sm:gap-6 group">
                <div className="p-4 sm:p-5 bg-white/10 rounded-2xl border border-white/10 text-green-400 group-hover:scale-105 transition-transform duration-300">
                  <MessageCircle size={28} className="sm:!w-8 sm:!h-8" />
                </div>
                <span className="text-base sm:text-xl font-bold tracking-wide">+505 8587 2276</span>
              </div>
            </div>
          </div>

          {/* FORMULARIO */}
          <form ref={form} onSubmit={enviarEmail} className="flex flex-col gap-4 sm:gap-5">
            <input 
              name="user_name" 
              placeholder="Tu Nombre" 
              required 
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 sm:px-6 py-3 sm:py-5 text-white text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-gray-500" 
            />
            <input 
              name="user_email" 
              type="email" 
              placeholder="Tu Email" 
              required 
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 sm:px-6 py-3 sm:py-5 text-white text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-gray-500" 
            />
            <textarea 
              name="message" 
              placeholder="¿Cómo puedo ayudarte?" 
              rows="4" 
              required 
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 sm:px-6 py-3 sm:py-5 text-white text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none placeholder:text-gray-500" 
            />

            <motion.button
              disabled={cargando}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-white text-black font-black py-3 sm:py-5 rounded-2xl text-base sm:text-xl uppercase shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {cargando ? "Enviando..." : "Enviar Mensaje"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
