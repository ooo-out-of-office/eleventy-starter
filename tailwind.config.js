module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./site/**/*.html", "./site/**/*.njk", "./site/**/*.md"],
  theme: {
    screens: {
      md: "768px",
      lg: "1024px",
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: {
        default: "#fff",
        mask: "rgba(255, 255, 255, .5)",
      },
      gray: {
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
      },
    },
    fontSize: {
      base: "20px",
      sm: "16px",
      md: "24px",
      lg: "36px",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
    lineHeight: {
      normal: "calc(1em + 6px)",
    },
    maxHeight: {
      full: "100%",
      screen: "100vh",
    },
    minHeight: {
      0: "0",
      full: "100%",
      screen: "100vh",
    },
    minWidth: {
      0: "0",
      full: "100%",
    },
    spacing: {
      0: "0",
      1: "1px",
      sm: "12px",
      md: "18px",
      lg: "24px",
      xl: "30px",
    },
    extend: {
      borderWidth: {
        default: "1px",
      },
      fontFamily: {
        sans: [
          "Inter",
          "Sen",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      height: {
        auto: "auto",
        full: "100%",
        screen: "100vh",
      },
      maxWidth: {
        none: "none",
        full: "100%",
      },
    },
  },
  variants: {},
  plugins: [],
};
