'use client'

import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import pageAnimation from "./page-animation";

interface BlackKeyProps {
  children?: React.ReactNode;
  path?: string;
}

export default function BlackKey({ children, path }: BlackKeyProps) {
  const content = (
    <div
      className={`z-10 h-13 lg:h-20 absolute -translate-y-1/2 w-1/3 
        rounded-r-lg bg-dark shadow-lg/30
        text-white text-md lg:text-2xl 
        transition duration-300
        ${path ? "hover:bg-[#E4D0EB] hover:text-dark" : ""}
        flex items-center justify-center`}
    >
      {children ?? " "}
    </div>
  );

  const router = useTransitionRouter();
  return path ? (
    <Link
      href={path}
      onClick={(e) => {
        e.preventDefault();
        router.push(path, {
          onTransitionReady: pageAnimation,
        });
      }}
    >
      {content}
    </Link>
  ) : (
    content
  );
}
