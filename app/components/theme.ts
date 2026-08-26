// Where the theme choice lives, and the two lines that have to run before the
// page paints. Kept out of theme-flip.tsx because that file is "use client" and
// the root layout — a server component — needs the script string.
//
// There is no "system" value to store. Following the device IS the absence of a
// choice: no key in storage, no [data-theme] on <html>, and every colour token
// resolves from the device's own color-scheme (see app/globals.css). So the
// stored value is only ever "light" or "dark", and only ever exists while the
// visitor is deliberately overriding what their device says.
export const THEME_KEY = "raban-theme";

// Runs as the first thing in <body>, before any content is painted: it re-pins
// the stored override so a dark-mode visitor never gets a white flash on load.
// It cannot be a React effect — effects run after paint, which is exactly the
// flash. Deliberately tiny and dependency-free; it is parsed on every page load.
// Everything is inside a try because Safari's private mode throws on
// localStorage access, and a theme preference is not worth a blank page.
export const THEME_SCRIPT = `try{var t=localStorage.getItem(${JSON.stringify(THEME_KEY)});if(t==="dark"||t==="light")document.documentElement.dataset.theme=t}catch(e){}`;
