/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
    // "./src/pages/**/*.tsx",
    // "./src/components/**/*.tsx",
    // "./src/layouts/**/*.tsx",
  ],
  // 禁止tailwindcss的默认属性，减去对其他UI的影响
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
