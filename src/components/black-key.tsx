import Link from "next/link"

interface BlackKeyProps {
    children?: React.ReactNode,
    path?: string
}

export default function BlackKey({ children, path }: BlackKeyProps) {
    const content = (
        <div className="z-10 h-13 lg:h-20 absolute -translate-y-1/2 w-1/3 
        rounded-r-lg bg-dark shadow-lg/30
        text-white text-md lg:text-2xl 
        flex items-center justify-center">
            {children ?? " "}
        </div>
    )
    
    return path ? <Link href={path}>{content}</Link> : content
}