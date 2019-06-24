const ENV = process.env.BABEL_ENV;

let presets;

if (ENV === 'es') {
  presets = [];
} else {
  presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          ie: 11,
          edge: 14,
          firefox: 45,
          chrome: 49,
          safari: 10,
          node: '6.10',
        },
        modules: ENV === 'modules' ? false : 'commonjs',
      },
    ],
  ];
}

module.exports = {
  "presets": presets,
};