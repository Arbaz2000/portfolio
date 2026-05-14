const fs = require('fs');
const path = require('path');

const projectsDir = path.join(process.cwd(), 'src', 'app', 'projects');
const dirs = fs.readdirSync(projectsDir);

for (const dir of dirs) {
  const pagePath = path.join(projectsDir, dir, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    const searchString = 'const Flipcard = dynamic(() => import("@/component/filpcard"), { ssr: false });\r\nimport dynamic from "next/dynamic";';
    const searchString2 = 'const Flipcard = dynamic(() => import("@/component/filpcard"), { ssr: false });\nimport dynamic from "next/dynamic";';
    const replaceString = 'import dynamic from "next/dynamic";\nconst Flipcard = dynamic(() => import("@/component/filpcard"), { ssr: false });';
    
    if (content.includes(searchString)) {
        content = content.replace(searchString, replaceString);
        fs.writeFileSync(pagePath, content);
        console.log('Fixed', pagePath);
    } else if (content.includes(searchString2)) {
        content = content.replace(searchString2, replaceString);
        fs.writeFileSync(pagePath, content);
        console.log('Fixed', pagePath);
    }
  }
}
