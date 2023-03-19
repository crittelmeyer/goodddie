const path = require('path')

const modulesDir = path.join(process.cwd(), 'node_modules')

//SEE: https://github.com/storybookjs/storybook/pull/13300#issuecomment-756675536
const updateEmotionAliases = config => ({
  ...config,
  resolve: {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@emotion/core': path.join(modulesDir, '@emotion/react'),
      '@emotion/styled': path.join(modulesDir, '@emotion/styled'),
      '@emotion/styled-base': path.join(modulesDir, '@emotion/styled'),
      'emotion-theming': path.join(modulesDir, '@emotion/react')
    },
    modules: [path.resolve(__dirname, '../src'), modulesDir]
  }
})

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  managerWebpack: updateEmotionAliases,
  webpackFinal: updateEmotionAliases
}