import antfu from '@antfu/eslint-config'

// https://github.com/antfu/eslint-config
export default antfu({
  formatters: true,
  unocss: true,
  react: true,
  stylistic: {
    indent: 2,
    quotes: 'single',
  },
  rules: {
    'eslint-comments/no-unlimited-disable': 'off',
  },
})
