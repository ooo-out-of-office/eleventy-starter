module.exports = {
  mount: {
    _site: { url: "/", static: true },
    src: "/",
  },
  plugins: [
    "@snowpack/plugin-postcss",
    ["@snowpack/plugin-run-script", { cmd: "eleventy", watch: "$1 --watch" }],
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: "es2018",
  },
  devOptions: {
    hmrDelay: 300,
  },
};
