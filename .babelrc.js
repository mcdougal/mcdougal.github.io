module.exports = {
  env: {
    /**
     * Babel settings for dev environment. Use with `BABEL_ENV=development`.
     *
     * In a development environment, the app runs using `babel-node`. This
     * builds both the server and the Next.js pages so it must include presets
     * that are compatible with both.
     */
    development: {
      presets: [
        `@babel/preset-env`,
        [
          `next/babel`,
          {
            'transform-runtime': {
              // Next 8 switched this flag to true so they could use ES modules
              // for their build in order to support tree shaking and reduce the
              // bundle size. This flag is incompatible with our server code
              // because we use the Node runtime which doesn't support ES
              // modules (yet).
              //
              // In a development environment we don't care about tree shaking,
              // so we can safely turn this off.
              //
              // See a discussion of this issue here:
              // https://github.com/zeit/next.js/issues/6273
              useESModules: false,
            },
          },
        ],
      ],
    },
    /**
     * Babel settings for building Next.js pages. Use with `BABEL_ENV=client`.
     *
     * Next.js packages all of its required plugins in a single preset.
     * See: https://nextjs.org/docs/#customizing-babel-config.
     *
     * The Next.js build outputs two versions of every page: one to be executed
     * during server-side rendering and the other to be executed in the browser.
     * The Next preset ensures the output is compatible with both runtimes.
     */
    client: {
      presets: ['next/babel'],
    },
  },
  plugins: [
    [
      `module-resolver`,
      {
        alias: {
          components: `./src/components`,
        },
      },
    ],
  ],
};
