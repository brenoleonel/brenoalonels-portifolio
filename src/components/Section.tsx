import React from "react";
import clsx from "clsx";

type Props = {
  id: string;
  title: string;
  children: React.ReactNode;

  /** alinhamento do título (default: left) */
  titleAlign?: "left" | "center";

  /** classe extra para o wrapper do conteúdo (onde fica o children) */
  contentClassName?: string;

  /** largura máxima da seção; ex: 'max-w-6xl' (default) / 'max-w-5xl' / 'max-w-3xl' */
  maxW?: string;
};

export default function Section({
  id,
  title,
  children,
  titleAlign = "left",
  contentClassName = "",
  maxW = "max-w-6xl",
}: Props) {
  return (
    <section id={id} className="py-16">
      <div className={clsx(maxW, "mx-auto px-4 md:px-6 lg:px-8")}>
        <h2
          className={clsx(
            "mb-10 text-3xl font-bold tracking-tight sm:text-4xl",
            titleAlign === "center" && "text-center"
          )}
        >
          {title}
        </h2>

        {/* wrapper do conteúdo - você controla com contentClassName por seção */}
        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  );
}
