import React, { useState } from "react";
import Chip from "./Chip";
import { Code, ExternalLink, Lock, Eye } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

export default function ProjectCard(project: Project) {
  const { title, description, stack, demo, github, image, isPrivate } = project;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
        <div className="aspect-[16/9] bg-zinc-100 dark:bg-zinc-900 relative overflow-hidden">
          {isPrivate ? (
            <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <div className="text-zinc-600 dark:text-zinc-700">
                <Lock className="w-12 h-12 opacity-20" />
              </div>
            </div>
          ) : image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full grid place-items-center text-zinc-400">
              <Code className="w-10 h-10" />
            </div>
          )}
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-auto">
            {stack.map((s) => (
              <Chip key={s} label={s} />
            ))}
          </div>
          <div className="flex items-center gap-3 mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
            {isPrivate ? (
              <div className="flex items-center justify-between w-full">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 bg-zinc-100 dark:bg-zinc-800/50 px-2.5 py-1 rounded-full">
                  <Lock className="w-3 h-3" />
                  Projeto Privado
                </span>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline underline-offset-4"
                >
                  Ver Detalhes <Eye className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <>
                {demo && (
                  <a
                    className="inline-flex items-center gap-1 text-sm underline underline-offset-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {github && (
                  <a
                    className="inline-flex items-center gap-1 text-sm underline underline-offset-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
