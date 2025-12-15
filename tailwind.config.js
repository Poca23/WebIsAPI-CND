// Who: Développeur frontend
// What: Configuration de TailwindCSS pour Angular
// When: Après installation de Tailwind
// Where: Racine du projet
// Why: Activer Tailwind sur tous les fichiers HTML/TS + support 3 thèmes
// Which: Configuration content + extend avec couleurs custom
// How: Scan des fichiers src/** pour classes CSS + palette de couleurs

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}', // Scanner tous les fichiers HTML et TS
  ],
  theme: {
    extend: {
      // Who: Designer UI/UX
      // What: Couleurs personnalisées pour les 3 thèmes
      // When: Utilisées dans tout le projet
      // Where: Classes Tailwind custom
      // Why: Support Dark/Light/Daltonien avec WCAG
      // Which: Palette de couleurs accessibles
      // How: Extension du thème par défaut avec valeurs hex
      colors: {
        // Thème Dark (repos oculaire)
        dark: {
          bg: '#1a1a1a', // Fond principal
          surface: '#2d2d2d', // Surfaces élevées
          text: '#e0e0e0', // Texte principal
          primary: '#60a5fa', // Couleur primaire (bleu)
          secondary: '#34d399', // Couleur secondaire (vert)
        },
        // Thème Light (classique)
        light: {
          bg: '#ffffff', // Fond blanc
          surface: '#f3f4f6', // Surfaces grises claires
          text: '#1f2937', // Texte foncé
          primary: '#3b82f6', // Bleu standard
          secondary: '#10b981', // Vert standard
        },
        // Thème Daltonien (contraste WCAG AAA)
        daltonien: {
          bg: '#000000', // Noir pur
          surface: '#1a1a1a', // Gris très foncé
          text: '#ffff00', // Jaune vif (contraste max)
          primary: '#00ffff', // Cyan (détectable)
          secondary: '#ff00ff', // Magenta (détectable)
        },
      },
    },
  },
  plugins: [],
};
