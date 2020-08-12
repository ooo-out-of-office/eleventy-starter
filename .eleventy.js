const htmlmin = require("html-minifier");
const fs = require("fs");

require("dotenv").config();

module.exports = function (config) {
  // A useful way to reference the context we are runing eleventy in
  let env = process.env.ELEVENTY_ENV;
  let dev = env === "dev";

  // Layout aliases can make templates more portable
  config.addLayoutAlias("default", "layouts/base.njk");

  // Add some utility filters
  config.addNunjucksAsyncFilter(
    "hashed",
    require("./src/utils/filters/hashed.js")
  );

  // pass some assets right through
  config.addPassthroughCopy("./src/site/service-worker.js");
  config.addPassthroughCopy("./src/site/fonts");
  config.addPassthroughCopy("./src/site/images");
  config.addPassthroughCopy("./src/site/js");
  config.addPassthroughCopy("./src/site/favicon.ico");
  config.addPassthroughCopy("./src/site/browserconfig.xml");

  config.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync("_site/404.html");
          // Provides the 404 content without redirect.
          res.write(content_404);
          // Add 404 http status code in request header.
          // res.writeHead(404, { "Content-Type": "text/html" });
          res.writeHead(404);
          res.end();
        });
      },
    },
  });

  config.addTransform("htmlmin", function (content, outputPath) {
    if (!dev && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  return {
    dir: {
      input: "src/site",
      data: `_data`,
    },
    templateFormats: ["njk", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};
