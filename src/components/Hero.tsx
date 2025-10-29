"use client";

import React from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { PROFILE } from "@/data/profile";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "800"],
});

export default function Hero({ onDownloadCV }: { onDownloadCV: () => void }) {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 text-center transition-colors duration-500">
      {/* vinheta preta centralizada no WHITE */}
      <div className="absolute inset-0 -z-10 dark:hidden">
        <div className="absolute left-1/2 top-1/2 h-[380px] w-[900px] max-w-[92vw] -translate-x-1/2 -translate-y-[58%] rounded-[999px] bg-black/70 blur-3xl" />
      </div>

      {/* radial suave no DARK */}
      <div className="absolute inset-0 -z-10 hidden bg-[radial-gradient(ellipse_at_top,rgba(30,30,60,0.3),transparent)] dark:block" />

      <div className="z-10 max-w-2xl text-center">
        {/* Nome com glow verde e fonte Poppins */}
        <h1
          className={`${poppins.className} animate-glow mb-3 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl`}
        >
          Breno <span className="text-green-300">Leonel</span>
        </h1>

        <h2 className="mb-4 text-3xl font-semibold text-black dark:text-zinc-400 sm:text-4xl">
          {PROFILE.role}
        </h2>

        <p className="mb-6 text-zinc-800 dark:text-zinc-400">{PROFILE.about}</p>

        {/* botões: hover com sombra no WHITE, ghost no DARK */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {PROFILE.links.github && (
            <a
              href={PROFILE.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm transition hover:bg-green-200 hover:shadow-md dark:border-zinc-700 dark:bg-transparent dark:text-zinc-100 dark:hover:bg-green-600"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          )}
          {PROFILE.links.linkedin && (
            <a
              href={PROFILE.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm transition hover:bg-green-200 hover:shadow-md dark:border-zinc-700 dark:bg-transparent dark:text-zinc-100 dark:hover:bg-green-600"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          )}
          {PROFILE.links.email && (
            <a
              href={PROFILE.links.email}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm transition hover:bg-green-200 hover:shadow-md dark:border-zinc-700 dark:bg-transparent dark:text-zinc-100 dark:hover:bg-green-600"
            >
              <Mail className="h-4 w-4" /> Contato
            </a>
          )}
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Breno-Augusto-Leonel-da-Silva.docx";
              link.download = "Breno-Augusto-Leonel-da-Silva.docx";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm transition hover:bg-green-200 hover:shadow-md dark:border-zinc-700 dark:bg-transparent dark:text-zinc-100 dark:hover:bg-green-600"
          >
            <Download className="h-4 w-4" /> Baixar CV
          </button>
        </div>
      </div>

      {/* fade preto → branco (só no WHITE) */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-transparent to-white dark:hidden" />
    </section>
  );
}
