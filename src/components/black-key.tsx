export default function BlackKey({ content }: { content?: string }) {
    return (
        <div className="z-10 h-13 lg:h-20 absolute -translate-y-1/2 w-1/3 
        rounded-r-lg bg-dark shadow-lg/30
        text-white text-md lg:text-2xl 
        flex items-center justify-center">
            {content ?? " "}
        </div>
    )
}