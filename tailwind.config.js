import {
  withUt
} from "uploadthing/tw";

export default withUt({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#6D28D9", 
        topHeadingPrimary: "#1E1B24", 
        topHeadingSecondary: "#312E38", 
        pink: "#A78BFA", 
      },

      container: {
        center: true,
        padding: "15px",
      },
    },
  },
  plugins: [],
});
