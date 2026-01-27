import Link from "next/link";

export default function WhiteKey({ content, path }: { content?: string, path?: string }) {
    return (
        <div className="h-28 bg-white hover:bg-gray-700 border-2 border-gray-200 text-black hover:text-white text-2xl flex items-center justify-center transition duration-300">
            {content && path ? <Link href={path!}>{content ?? " "}</Link> : " " }
        </div>
    );
}
