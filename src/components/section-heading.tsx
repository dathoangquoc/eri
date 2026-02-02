interface SectionHeadingProps {
  title: string;
  left?: string;
  right?: string;
}

export default function SectionHeading({
  title,
  left,
  right,
}: SectionHeadingProps) {
  return (
    <div className="relative mt-24 mb-4">
      <div className="mb-4 md:absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <h3>{title}</h3>
      </div>
      <p className="flex justify-between">
        <span className="body-1 w-20">{left ?? "left"}</span>
        <span className="body-1 w-20">{right ?? "right"}</span>
      </p>
    </div>
  );
}
