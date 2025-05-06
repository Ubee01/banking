// tailwind.config.js

module.exports = {
  theme: {
    extend: {
      colors: {
        whyte: "#f7f7f7", // White color
        blu: "#446d9b", // Blue color
        blak: "#101010", // Black color
      },
    },
  },
  plugins: [],
};

// tailwind.config.js

module.exports = {
  theme: {
    extend: {},
    screens: {
      xs: "320px", // Add this custom 'xs' breakpoint
      sm: "640px", // Default small breakpoint
      md: "768px", // Medium breakpoint
      lg: "1024px", // Large breakpoint
      xl: "1280px", // Extra large breakpoint
      "2xl": "1536px", // 2x extra large breakpoint
    },
  },
};
