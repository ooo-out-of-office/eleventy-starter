const fs = require("fs").promises;

module.exports = async (filename, callback) => {
  try {
    const manifest = await fs.readFile("./src/.webpack/manifest.json");
    const parsed = await JSON.parse(manifest);
    callback(null, parsed[filename]);
  } catch (error) {
    callback(error);
  }
};
