import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
}

export default function SectionHeading({
  title,
  left,
  right,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("relative mt-24 mb-5", className)}>
      <div className="mb-4 md:absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <h3>{title}</h3>
      </div>
      <p className="flex justify-between">
        <span className="body-1 lg:w-fit">{left ?? ""}</span>
        <span className="body-1 lg:w-fit text-end">{right ?? ""}</span>
      </p>
    </div>
  );
}
