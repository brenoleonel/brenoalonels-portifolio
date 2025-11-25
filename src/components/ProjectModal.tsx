import React, { useEffect } from "react";
import { X, CheckCircle2 } from "lucide-react";
import type { Project } from "@/data/projects";
import Chip from "./Chip";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-100 dark:border-zinc-800">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5 text-zinc-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
          <div className="mb-8">
            <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3">
              Sobre o Projeto
            </h3>
            <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {project.features && project.features.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3">
                Principais Funcionalidades
              </h3>
              <ul className="grid gap-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3">
              Tecnologias
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Chip key={tech} label={tech} />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
