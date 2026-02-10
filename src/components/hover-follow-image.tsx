'use client';

import { useState } from "react";
import Image from "next/image";

export default function HoverFollowImage({children, imageSrc}: {children: React.ReactNode, imageSrc: string}) {
    const [isHovering, setIsHovering] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };
  return (
    <div>
        <h2 className="lg:border-b-2 border-dotted cursor-default"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
        >{children}</h2>
        {isHovering && (
            <Image src={imageSrc} width={150} height={150} style={{ position: 'absolute', left: position.x, top: position.y }} className="z-50 pointer-events-none" alt="Hover Image"/>
        )}
    </div>
  );
}