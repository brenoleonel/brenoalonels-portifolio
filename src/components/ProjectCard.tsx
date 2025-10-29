import React from "react";
import Chip from "./Chip";
import { Code, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  title,
  description,
  stack,
  demo,
  github,
  image,
}: Project) {
  return (
    <div className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-[16/9] bg-zinc-100 dark:bg-zinc-900">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full grid place-items-center text-zinc-400">
            <Code className="w-10 h-10" />
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {stack.map((s) => (
            <Chip key={s} label={s} />
          ))}
        </div>
        <div className="flex items-center gap-3">
          {demo && (
            <a
              className="inline-flex items-center gap-1 text-sm underline underline-offset-4"
              href={demo}
              target="_blank"
              rel="noreferrer"
            >
              Demo <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {github && (
            <a
              className="inline-flex items-center gap-1 text-sm underline underline-offset-4"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
