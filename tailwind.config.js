/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-texture": "url('/src/assets/banner.png')",
        "footer-texture": "url('/src/assets/footer.png')",
      },
    },
  },
  plugins: [],
};
