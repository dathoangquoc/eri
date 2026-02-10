'use client';

import { useState } from "react";
import Image from "next/image";

export default function HoverFollowImage({
  children,
  imageSrc,
}: {
  children: React.ReactNode;
  imageSrc: string;
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="relative">
      <h2
        className="lg:border-b-2 border-dotted cursor-default"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        {children}
      </h2>

      <Image
        src={imageSrc}
        width={150}
        height={150}
        alt="Hover Image"
        className={`
          pointer-events-none absolute z-50
          transition-all duration-200 ease-out
          ${isHovering ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
        style={{
          left: position.x + 20,
          top: position.y + 20,
        }}
      />
    </div>
  );
}
