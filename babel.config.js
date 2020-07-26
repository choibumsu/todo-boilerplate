module.exports = function (api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: '> 0.25%, not dead',
        useBuiltIns: 'usage',
        corejs: '3',
        modules: false,
      },
    ],
  ]

  const plugins = [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          api: './frontend/api',
          components: './frontend/components',
          shared: './shared',
          store: './frontend/store',
          styles: './frontend/styles',
          utils: './frontend/utils',
        },
      },
    ],
  ]

  return {
    presets,
    plugins,
  }
}
