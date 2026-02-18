const TREBLE_CLEF_SRC = "/icons/treble.png";

const MusicStaff = () => {
  return (
    <div className="w-[85vw] flex flex-col items-center">
        <div className="flex justify-between w-[90%] sheet-notes">
            <span>Largo <span className="not-italic text-2xl">♩</span> = 66</span>
            <span>Apr 2025</span>
        </div>
      <svg
        viewBox="0 0 1000 100"
        className="w-full h-auto stroke-current text-black"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* --- Staff Lines --- */}
        {/* Y coordinates: 40, 60, 80, 100, 120 */}
        <g strokeWidth="1" strokeLinecap="round">
          <line x1="0" y1="10" x2="1000" y2="10" />
          <line x1="0" y1="20" x2="1000" y2="20" />
          <line x1="0" y1="30" x2="1000" y2="30" />
          <line x1="0" y1="40" x2="1000" y2="40" />
          <line x1="0" y1="50" x2="1000" y2="50" />
        </g>

        {/* --- Vertical End Bars --- */}
        <g strokeWidth="2">
          <line x1="999" y1="10" x2="999" y2="50" />
        </g>

        {/* --- Treble Clef Image --- */}
        {/* Using <image> ensures the clef scales perfectly with the staff lines.
            Adjust x, y, and height to fit your specific SVG file's whitespace.
        */}
        <image
          href={TREBLE_CLEF_SRC} 
          x="-10" 
          y="-8" 
          height="80" 
          width="80"
        />
      </svg>
    </div>
  );
};

export default MusicStaff;