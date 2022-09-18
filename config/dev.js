const path = require("path");

module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  plugins: [path.resolve(__dirname, "plugins/minifyMainPackage.js")],
  defineConstants: {},
  mini: {},
  h5: {},
};
