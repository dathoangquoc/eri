import Link from "next/link";
import clsx from "clsx";

export default function WhiteKey({
  children,
  path,
  video,
  tags,
}: {
  children?: React.ReactNode;
  path?: string;
  video?: string; // path to .webm
  tags?: string[];
}) {
  const hasVideo = Boolean(video);

  const Container = (
    <div
      className={clsx(
        `
        relative
        h-18 lg:h-28
        p-4
        my-0.5
        rounded-r-lg
        bg-white
        text-black
        text-md lg:text-2xl
        flex items-center justify-center
        overflow-hidden
        `,
        hasVideo &&
          `
          group
          transition duration-300
          hover:text-white
          cursor-pointer
          `,
      )}
    >
      {/* Background video */}
      {hasVideo && (
        <video
          src={video!}
          autoPlay
          loop
          muted
          playsInline
          className="
            absolute inset-0
            w-full h-full
            object-cover
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            pointer-events-none
          "
        />
      )}

      {/* Inset shadow overlay */}
      {hasVideo && (
        <div
          className="
            absolute inset-0
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            pointer-events-none
            inset-shadow-xl
          "
        />
      )}

      {/* Purple overlay */}
      {hasVideo && (
        <div
          className="
            absolute inset-0
            bg-accent/40
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            pointer-events-none
          "
        />
      )}

      {/* Foreground content */}
      {children && (
        <div className="flex w-full h-full items-center justify-center">
          <span className="relative z-10 w-full lg:w-[40%] text-end">
            {children}
          </span>
          {tags &&
            tags.map((tag) => (
              <div
                key={tag}
                className="text-lg z-20 ml-5 p-2 bg-[#E4D0EBB2]/70 text-white border border-white"
              >
                {tag}
              </div>
            ))}
        </div>
      )}
    </div>
  );

  return path ? <Link href={path}>{Container}</Link> : Container;
}
