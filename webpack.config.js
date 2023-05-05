const path = require('path');
const glob = require('glob');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');

// The rest of your Webpack configuration

module.exports = {
  // Your existing Webpack configuration

  plugins: [
    // Your existing plugins

    // Add the PurifyCSS plugin
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.resolve(__dirname, 'src')}/**/*`, { nodir: true }),
      safelist: {
        // standard: [/^your-prefix-/], // Optional: specify a safelist of CSS classes to keep (useful for third-party libraries)
      },
    }),
  ],
};
