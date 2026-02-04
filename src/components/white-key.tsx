import Link from "next/link";
import clsx from "clsx";

export default function WhiteKey({
  children,
  path,
  video,
}: {
  children?: React.ReactNode
  path?: string;
  video?: string; // path to .webm
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
          `
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
            shadow-[inset_0_0_40px_rgba(0,0,0,0.6)]
          "
        />
      )}

      {/* Purple overlay */}
      {hasVideo && (
        <div
          className="
            absolute inset-0
            bg-[#3A1C36]/40
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            pointer-events-none
          "
        />
      )}

      {/* Foreground content */}
      {children && (
        <span className="relative z-10 w-full text-end md:text-center">{children}</span>
      )}
    </div>
  );

  return path ? <Link href={path}>{Container}</Link> : Container;
}
