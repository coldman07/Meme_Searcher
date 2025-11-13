Project Folder Setup Desktop par ek new folder create kiya aur 
Folder name lowercase hona chahiye (Vite/CRA uppercase allow nahi karta).
Us folder ke andar jaakar Vite project banaya.
React + Vite Project Create Kiya, Terminal me run kiya:
npm create vite@latest . -- --template react
npm install

Isse:
src/
public/
index.html
package.json
sab auto-generate ho gaya.

Phir maine tailwindCSS ko Setup Krdiya : npm install -D tailwindcss@3 postcss autoprefixer && npx tailwindcss init -p
Tailwind Configuration Set Kiya
tailwind.config.cjs me ye content paths add kiye:

content: [
  "./index.html",
  "./src/**/*.{js,jsx}"
]

aur phir TailwindCSS Import kardiye
src/index.css me edit kiya:
@tailwind base;
@tailwind components;
@tailwind utilities; etc etc 
Isse Tailwind project me enable ho gaya.
React Components Banadiye
App.jsx

Meme list fetch kiya using:
https://api.imgflip.com/get_memes

Search bar banaya aur Filter logic lagaya and Grid UI ready kiya to create MemeCard.jsx
Ek ek meme card show kiya using Image Name Box count etc etc
API Integration Kiya React ke useEffect() me fetch call likha:

const response = await fetch("https://api.imgflip.com/get_memes");
const json = await response.json();
setMemes(json.data.memes);
