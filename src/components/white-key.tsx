import Link from "next/link";

export default function WhiteKey({
  content,
  path,
}: {
  content?: string;
  path?: string;
}) {
  return (
    <div className="h-18 lg:h-28 
    p-4
    bg-white hover:bg-gray-700 my-0.5 rounded-r-lg text-black hover:text-white 
    text-md lg:text-2xl 
    flex items-center justify-end lg:justify-center 
    transition duration-300 hover:shadow-[inset_0_0_40px_rgba(0,0,0,0.6)]">
      {content && path ? <Link href={path!}>{content ?? " "}</Link> : " "}
    </div>
  );
}
