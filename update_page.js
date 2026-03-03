const fs = require('fs');
const file = 'src/app/pepero-day/page.tsx';
let txt = fs.readFileSync(file, 'utf8');

txt = txt.replace(/<CircularGallery>/g, "<CircularGallery offsetY={100}> // Shift items down");
fs.writeFileSync(file, txt);
