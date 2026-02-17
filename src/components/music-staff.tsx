const TREBLE_CLEF_SRC = "/icons/treble.png";

const MusicStaff = () => {
  return (
    <div className=" max-w-[90vw] w-[90vw] border border-amber-400">
        <div className="flex justify-between">
            <span>Largo</span>
            <span>Apr 2025</span>
        </div>
      <svg
        viewBox="0 0 1000 150"
        className="w-full h-auto stroke-current text-black"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* --- Staff Lines --- */}
        {/* Y coordinates: 40, 60, 80, 100, 120 */}
        <g strokeWidth="1" strokeLinecap="round">
          <line x1="0" y1="40" x2="1000" y2="40" />
          <line x1="0" y1="60" x2="1000" y2="60" />
          <line x1="0" y1="80" x2="1000" y2="80" />
          <line x1="0" y1="100" x2="1000" y2="100" />
          <line x1="0" y1="120" x2="1000" y2="120" />
        </g>

        {/* --- Vertical End Bars --- */}
        <g strokeWidth="2">
          <line x1="999" y1="40" x2="999" y2="120" />
        </g>

        {/* --- Treble Clef Image --- */}
        {/* Using <image> ensures the clef scales perfectly with the staff lines.
            Adjust x, y, and height to fit your specific SVG file's whitespace.
        */}
        <image
          href={TREBLE_CLEF_SRC} 
          x="-10" 
          y="10" 
          height="150" 
          width="150"
        />
      </svg>
    </div>
  );
};

export default MusicStaff;