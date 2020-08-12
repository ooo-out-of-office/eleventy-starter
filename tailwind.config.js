module.exports = {
  purge: ["./src/site/**/*.html", "./src/site/**/*.njk", "./src/site/**/*.md"],
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
        "100": "#f5f5f5",
        "200": "#eeeeee",
        "300": "#e0e0e0",
        "400": "#bdbdbd",
      },
    },
    backgroundColor: (theme) => theme("colors"),
    borderColor: (theme) => ({
      ...theme("colors"),
      default: "currentColor",
    }),
    borderRadius: {
      none: "0",
    },
    borderWidth: (theme) => ({
      ...theme("spacing"),
      default: "1px",
    }),
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
      serif: [
        "Unna",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif",
      ],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
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
    height: (theme) => ({
      auto: "auto",
      full: "100%",
      screen: "100vh",
    }),
    inset: (theme) => ({
      ...theme("spacing"),
      "0": "0",
      auto: "auto",
    }),
    lineHeight: {
      normal: "calc(1em + 6px)",
    },
    margin: (theme) => ({
      ...theme("spacing"),
      auto: "auto",
    }),
    maxHeight: {
      full: "100%",
      screen: "100vh",
    },
    maxWidth: (theme, { breakpoints }) => ({
      none: "none",
      full: "100%",
      ...breakpoints(theme("screens")),
    }),
    minHeight: {
      "0": "0",
      full: "100%",
      screen: "100vh",
    },
    minWidth: {
      "0": "0",
      full: "100%",
    },

    padding: (theme) => theme("spacing"),
    spacing: {
      0: "0",
      1: "1px",
      sm: "12px",
      md: "18px",
      lg: "24px",
      xl: "30px",
    },
    width: (theme) => ({
      auto: "auto",
      full: "100%",
      screen: "100vw",
    }),
    zIndex: {
      "0": "0",
      "10": "10",
      "20": "20",
    },
    gap: (theme) => ({
      ...theme("spacing"),
    }),
  },
  variants: {},
  plugins: [],
};
