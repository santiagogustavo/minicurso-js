const { injectBabelPlugin } = require('react-app-rewired');

module.exports = config => (
  injectBabelPlugin(
    ['module-resolver', { root: 'src' }],
    config,
  )
);
