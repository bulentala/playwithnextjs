module.exports = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    POST_URL: process.env.POST_URL,
  },
};
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
});
