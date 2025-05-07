import antfu from '@antfu/eslint-config'
import { createSimplePlugin } from 'eslint-factory'
import { createAutoInsert } from 'eslint-plugin-unimport'
import nuxt from './.nuxt/eslint.config.mjs'

export default antfu(
  {
    formatters: true,
    unocss: true,
  },
  createAutoInsert({
    imports: [
      {
        from: 'vue',
        name: 'shallowRef',
      },
      {
        from: 'vue',
        name: 'ref',
        as: 'deepRef',
      },
    ],
  }),
  createSimplePlugin({
    name: 'no-ref',
    exclude: ['**/*.md', '**/*.md/**'],
    create(context) {
      return {
        CallExpression(node) {
          if (node.callee.type === 'Identifier' && node.callee.name === 'ref') {
            context.report({
              node,
              message: 'Usage of ref() is restricted. Use shallowRef() or deepRef() instead.',
            })
          }
        },
      }
    },
  }),
).append(nuxt({
  rules: {
    'nuxt/nuxt-config-keys-order': 'error',
  },
}))
