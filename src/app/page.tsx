"use client";

import React, { useMemo } from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Chip from "@/components/Chip";
import ProjectCard from "@/components/ProjectCard";
import { TECH, LEARNING_TECH } from "@/data/tech";
import { PROJECTS } from "@/data/projects";
import { EXPERIENCE } from "@/data/experience";
import { useTheme } from "@/utils/theme";
import { Moon, Sun } from "lucide-react";

export default function Page() {
  const { isDark, toggleTheme } = useTheme();

  const techChunks = useMemo(() => {
    const size = 5;
    const chunks: string[][] = [];
    for (let i = 0; i < TECH.length; i += size) chunks.push(TECH.slice(i, i + size));
    return chunks;
  }, []);

  const handleDownloadCV = () => {
    const cvUrl = "/Breno-Leonel-CV.pdf"; // coloque seu PDF em public/
    const a = document.createElement("a");
    a.href = cvUrl;
    a.download = "Breno-Leonel-CV.pdf";
    a.click();
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 transition-colors dark:bg-zinc-950 dark:text-zinc-50">
      {/* Topbar */}
      <div className="sticky top-0 z-50 border-b border-zinc-200 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-900 dark:supports-[backdrop-filter]:bg-zinc-950/60">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-6 lg:px-8">
          <a href="#" className="font-semibold tracking-tight">
            brenoleonel.dev
          </a>
          <div className="flex items-center gap-2">
            <a
              href="#projects"
              className="rounded-xl px-3 py-1 text-sm hover:bg-green-200 dark:hover:bg-green-600"
            >
              Projetos
            </a>
            <a
              href="#experience"
              className="rounded-xl px-3 py-1 text-sm hover:bg-green-200 dark:hover:bg-green-600"
            >
              Experiência
            </a>
            <a
              href="#contact"
              className="rounded-xl px-3 py-1 text-sm hover:bg-green-200 dark:hover:bg-green-600"
            >
              Contato
            </a>
            <button
              onClick={toggleTheme}
              className="ml-2 inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-3 py-2 transition hover:bg-green-200 dark:border-zinc-700 dark:hover:bg-zinc-900"
              aria-label="Alternar tema"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span className="hidden text-sm sm:inline">{isDark ? "Claro" : "Escuro"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <Hero onDownloadCV={handleDownloadCV} />

      {/* Tecnologias */}
      <Section
        id="tech"
        title="Tecnologias & Stack"
        titleAlign="center"
        contentClassName="max-w-5xl mx-auto"
      >
        <div className="flex flex-wrap justify-center gap-3">
          {TECH.map((t) => (
            <Chip key={t} label={t} />
          ))}
        </div>
      </Section>

      <Section
        id="learning"
        title="No Radar"
        titleAlign="center"
        contentClassName="max-w-4xl mx-auto"
      >
        <p className="mb-4 text-center text-sm text-zinc-600 dark:text-zinc-400">
          Tecnologias que estou explorando e pronto para aplicar quando o time precisar.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {LEARNING_TECH.map((tech) => (
            <Chip key={tech} label={tech} />
          ))}
        </div>
      </Section>

      {/* Projetos */}
      <Section id="projects" title="Projetos em Destaque" titleAlign="center">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Section>

      {/* Experiência */}
      <Section
        id="experience"
        title="Experiência"
        titleAlign="center"
        contentClassName="max-w-3xl mx-auto"
      >
        <div className="space-y-6">
          {EXPERIENCE.map((exp) => (
            <div
              key={exp.title}
              className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">{exp.period}</span>
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
                {exp.points.map((pt: string, i: number) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Contato */}
      <Section
        id="contact"
        title="Contato"
        titleAlign="center"
        contentClassName="max-w-3xl mx-auto"
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <a
            href="mailto:breno@email.com"
            className="flex items-center justify-center rounded-2xl border border-zinc-200 p-4 text-sm transition hover:bg-green-200 dark:border-zinc-800 dark:hover:bg-green-600"
          >
            <span className="font-medium">Email</span>
          </a>
          <a
            href="https://github.com/brenoleonel"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-2xl border border-zinc-200 p-4 text-sm transition hover:bg-green-200 dark:border-zinc-800 dark:hover:bg-green-600"
          >
            <span className="font-medium">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/breno-leonel-869045329/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-2xl border border-zinc-200 p-4 text-sm transition hover:bg-green-200 dark:border-zinc-800 dark:hover:bg-green-600"
          >
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
