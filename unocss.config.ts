import {
  defineConfig,
  presetAttributify,
  presetWebFonts,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'text-base': 'text-$c-text-base',
    'bg-base': 'bg-$c-bg-base',
    'text-secondary': 'text-$c-text-secondary',
    'bg-secondary': 'bg-$c-bg-secondary',
    'position-x-center': 'left-1/2 -translate-x-1/2',
    'position-y-center': 'top-1/2 -translate-y-1/2',
    'position-center': 'position-x-center position-y-center',
  },
  presets: [
    presetWind3(),
    presetAttributify(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
})
