import { cn } from "@/lib/utils";
import Link from "next/link";
import { BoxReveal } from "../reveal-animations";
import { ReactNode } from "react";

type SectionHeaderProps = {
  id?: string; // ✅ optional
  title: string | ReactNode;
  desc?: string;
  className?: string;
};

export const SectionHeader = ({
  id,
  title,
  desc,
  className,
}: SectionHeaderProps) => {
  const Heading = (
    <BoxReveal width="100%">
      <h2
        className={cn(
          "text-4xl md:text-7xl font-bold text-center text-foreground"
        )}
      >
        {title}
      </h2>
    </BoxReveal>
  );

  return (
    <div
      className={cn(
        "sticky top-24 mb-32", // 🔧 reduced from mb-96
        className
      )}
    >
      {id ? (
        <Link href={`#${id}`} scroll>
          {Heading}
        </Link>
      ) : (
        Heading
      )}

      {desc && (
        <p className="mx-auto mt-4 max-w-3xl text-center text-base text-muted-foreground">
          {desc}
        </p>
      )}
    </div>
  );
};
