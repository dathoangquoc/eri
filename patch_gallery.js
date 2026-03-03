const fs = require('fs');
const file = 'src/components/circular-gallery.tsx';
let txt = fs.readFileSync(file, 'utf8');

// Update init() function
txt = txt.replace(
  /const width = rect\.width \+ spacing;/g,
  `const containerWidth = containerRef.current?.offsetWidth || window.innerWidth;
        const scale = Math.max(0.4, Math.min(1, containerWidth / 1200));
        const responsiveSpacing = spacing * scale;
        const width = rect.width + responsiveSpacing;`
);

// Update bend dynamically inside update function
txt = txt.replace(
  /if \(bend !== 0\) \{/g,
  `const scale = Math.max(0.4, Math.min(1, containerWidth / 1200));
        const responsiveBend = bend * scale;
        if (responsiveBend !== 0) {`
);

// Replace B_abs calculation
txt = txt.replace(
  /const B_abs = Math\.abs\(bend\) \* \(containerWidth \/ 30\);/g,
  `const B_abs = Math.abs(responsiveBend) * (containerWidth / 30);`
);

// Replace arc pushing edges logic
txt = txt.replace(
  /if \(bend > 0\) \{/g,
  `if (responsiveBend > 0) {`
);

// Replace baseShift calculation
txt = txt.replace(
  /const baseShift = bend > 0 \? \(Math\.abs\(bend\) \* \(containerWidth \/ 30\)\) \/ 2 : 0;/g,
  `const baseShift = responsiveBend > 0 ? (Math.abs(responsiveBend) * (containerWidth / 30)) / 2 : 0;`
);

// Update image tailwind width constraints
txt = txt.replace(
  /w-\[70vw\] sm:w-\[45vw\] md:w-\[35vw\] lg:w-\[25vw\] max-w-\[400px\]/g,
  `w-[45vw] sm:w-[35vw] md:w-[25vw] lg:w-[20vw] max-w-[350px]`
);

fs.writeFileSync(file, txt);
console.log('Done patch_gallery.js');
