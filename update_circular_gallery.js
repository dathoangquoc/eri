const fs = require('fs');
const file = 'src/components/circular-gallery.tsx';
let txt = fs.readFileSync(file, 'utf8');

txt = txt.replace(/items\?: \{ image: string; text: string \}\[\];/g, "items?: { image: string; text: string }[];\n  offsetY?: number; // Added for vertical adjustment");

txt = txt.replace(/items\n\}: CircularGalleryProps\) {/g, "items,\n  offsetY = 0\n}: CircularGalleryProps) {");

txt = txt.replace(
  /const yOffset = bend > 0 \? \(Math\.abs\(bend\) \* \(containerWidth \/ 30\)\) \/ 2 : 0;/g, 
  "const baseShift = bend > 0 ? (Math.abs(bend) * (containerWidth / 30)) / 2 : 0;"
);

txt = txt.replace(
  /data\.element\.style\.transform = `translate3d\\(calc\\(-50% \+ \$\{x\}px\\), calc\\(-50% \+ \$\{-\(y - yOffset\)\}px\\), 0\\) rotateZ\\(\$\{rotationZ\}rad\\)`;/g,
  "data.element.style.transform = `translate3d(calc(-50% + ${x}px), calc(-50% + ${-(y - baseShift)}px + ${offsetY}px), 0) rotateZ(${rotationZ}rad)`;"
);

fs.writeFileSync(file, txt);
console.log('Done modifying', file);
