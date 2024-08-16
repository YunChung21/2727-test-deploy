/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    cssnano: {
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true, // This will remove all comments from the CSS
          },
        },
      ],
    },
  },
};

export default config;
