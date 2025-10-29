import React from "react";
import { PROFILE } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-10 text-sm text-zinc-500">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <span>
          © {new Date().getFullYear()} {PROFILE.name}. Todos os direitos
          reservados.
        </span>
        <div className="flex items-center gap-4 opacity-90">
          {PROFILE.links.site && (
            <a href={PROFILE.links.site} className="underline underline-offset-4">
              {PROFILE.links.site}
            </a>
          )}
          {PROFILE.links.github && (
            <a href={PROFILE.links.github} className="underline underline-offset-4">
              GitHub
            </a>
          )}
          {PROFILE.links.linkedin && (
            <a
              href={PROFILE.links.linkedin}
              className="underline underline-offset-4"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
