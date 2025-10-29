import React, { JSX } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiNestjs,
  SiDocker,
  SiInsomnia,
  SiJsonwebtokens,
} from "react-icons/si";

type Props = {
  label: string;
};

// Mapeia o nome da tecnologia ao ícone correspondente
const icons: Record<string, JSX.Element> = {
  JavaScript: <SiJavascript className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
  PostgreSQL: <SiPostgresql className="text-blue-600" />,
  Prisma: <SiPrisma className="text-gray-700 dark:text-white" />,
  NestJS: <SiNestjs className="text-pink-600" />,
  Docker: <SiDocker className="text-blue-500" />,
  Insomnia: <SiInsomnia className="text-purple-500" />,
  "JWT/Auth": <SiJsonwebtokens className="text-yellow-500" />,
};

export default function Chip({ label }: Props) {
  const icon = icons[label] || null;

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 transition-all hover:bg-green-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-green-600">
      {icon}
      {label}
    </span>
  );
}
