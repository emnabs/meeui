module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['> 1%', 'last 2 versions', 'not dead']
        },
        useBuiltIns: 'usage',
        corejs: 3
      }
    ],
    '@vue/cli-plugin-babel/preset'
  ],
  env: {
    development: {
      // babel-plugin-dynamic-import-node plugin only does one thing by converting all import() to require().
      // This plugin can significantly increase the speed of hot updates, when you have a large number of pages.
      // https://panjiachen.github.io/vue-element-admin-site/guide/advanced/lazy-loading.html
      plugins: ['dynamic-import-node']
    }
  },
  plugins: [
    [
      'component',
      {
        libraryName: 'meeui',
        styleLibraryName: 'theme'
      }
    ]
  ]
};