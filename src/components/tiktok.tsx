import Image from "next/image";

export default function Tiktok({
  src,
  alt,
  text,
}: {
  src: string;
  alt: string;
  text: string;
}) {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={290}
        height={544}
        className="w-full h-auto block"
      />
      <div className="absolute inset-0 bg-linear-to-t from-accent/80 via-accent/20 to-transparent flex items-end p-5">
        <p className="text-white text- font-bold md:text-lg leading-tight drop-shadow-sm">
          {text}
        </p>
      </div>
    </div>
  );
}
