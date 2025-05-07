<script setup lang="ts">
const colorMode = useColorMode()

function toggleColorMode() {
  const modes = ['light', 'dark', 'system']
  const currentIndex = modes.indexOf(colorMode.preference)
  const nextIndex = (currentIndex + 1) % modes.length
  colorMode.preference = modes[nextIndex]
}
</script>

<template>
  <button
    class="px-4 py-2"
    @click="toggleColorMode"
  >
    {{ colorMode.preference }}
  </button>
</template>
