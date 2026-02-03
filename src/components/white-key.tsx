import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export default function WhiteKey({
  content,
  path,
  gif,
}: {
  content?: string;
  path?: string;
  gif?: string;
}) {
  const hasGif = Boolean(gif);

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
        hasGif &&
          `
          group
          transition duration-300
          hover:text-white
          cursor-pointer
          `
      )}
    >
      {/* Background gif */}
      {hasGif && (
        <Image
          src={gif!}
          alt="gif"
          fill
          className="
            object-cover
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            pointer-events-none
          "
        />
      )}

      {/* Inset shadow overlay */}
      {hasGif && (
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
      {hasGif && (
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
      {content && (
        <span className="relative z-10">{content}</span>
      )}
    </div>
  );

  // Wrap whole container in Link if path exists
  return path ? <Link href={path}>{Container}</Link> : Container;
}
