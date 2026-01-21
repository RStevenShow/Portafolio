"use client";

import React from "react";
import { Link } from "react-router-dom"; // O "next/link" si usas Next.js
import { Github, Instagram, Mail, MessageCircle, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/Components/ui/tooltip"; 
import { Dock, DockIcon } from "@/Components/ui/dock"; 

const DATA = {
  navbar: [
    { href: "/", icon: Home, label: "Inicio" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/RStevenShow",
        icon: Github,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/50585872276?text=Hola,%20vi%20tu%20portafolio%20y%20me%20gustaría%20ponerme%20en%20contacto%20contigo.",
        icon: MessageCircle,
      },
      Email: {
        name: "Correo",
        url: "mailto:ramonsteven10@yahoo.es",
        icon: Mail,
      },
   
    },
  },
};

export function FloatingDock() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] pointer-events-none">
      <div className="pointer-events-auto">
        <TooltipProvider>
          <Dock 
            direction="middle" 
            className="bg-black/20 backdrop-blur-lg border border-white/10 p-2 rounded-full shadow-2xl"
          >
            {/* Sección Inicio */}
            {DATA.navbar.map((item) => (
              <DockIcon key={item.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      to={item.href}
                      className={cn(
                        "flex size-12 items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                      )}
                    >
                      <item.icon className="size-5" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}

            <div className="w-[1px] h-8 bg-white/10 mx-2 self-center" />

            {/* Sección Contacto */}
            {Object.entries(DATA.contact.social).map(([name, social]) => (
              <DockIcon key={name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex size-12 items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                      )}
                    >
                      <social.icon className="size-5" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{social.name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
          </Dock>
        </TooltipProvider>
      </div>
    </div>
  );
}