import Image from "next/image";
import Link from "next/link";

export default function Tiktok({
  src,
  alt,
  text,
  href = "#",
  likes = "0",
  comments = "0",
  saves = "0",
  views = "0",
}: {
  src: string;
  alt: string;
  text: string;
  href?: string;
  likes?: string;
  comments?: string;
  saves?: string;
  views?: string;
}) {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden group">
      <Image
        src={src}
        alt={alt}
        width={290}
        height={544}
        className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-accent/90 via-accent/30 to-transparent flex items-end p-4 md:p-5">
        <div className="flex justify-between items-end w-full gap-2">
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold text-sm md:text-lg leading-tight drop-shadow-sm hover:underline shrink-0"
          >
            {text}
          </Link>
          <div className="flex flex-col items-end text-white/90 text-xs md:text-sm font-medium tabular-nums">
            <div className="flex items-center gap-1">
              <span>{likes}</span>
              <span className="opacity-60 text-[10px] uppercase tracking-wider">
                likes
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span>{comments}</span>
              <span className="opacity-60 text-[10px] uppercase tracking-wider">
                cmts
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span>{saves}</span>
              <span className="opacity-60 text-[10px] uppercase tracking-wider">
                saves
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span>{views}</span>
              <span className="opacity-60 text-[10px] uppercase tracking-wider">
                views
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
