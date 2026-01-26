export default function BlackKey({ content }: { content?: string }) {
    return (
        <div className="h-20 absolute -translate-y-1/2 w-2/7 bg-black border-2 border-gray-200 text-white text-2xl flex items-center justify-center">
            {content ?? " "}
        </div>
    )
}