import React from "react";

interface SectionHeadingProps {
  title: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export default function SectionHeading({
  title,
  left,
  right,
}: SectionHeadingProps) {
  return (
    <div className="relative mt-24 mb-5">
      <div className="mb-4 md:absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <h3>{title}</h3>
      </div>
      <p className="flex justify-between">
        <span className="body-1 lg:w-fit">{left ?? ""}</span>
        <span className="body-1 lg:w-fit">{right ?? ""}</span>
      </p>
    </div>
  );
}
