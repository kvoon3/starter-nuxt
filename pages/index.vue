<script setup lang="ts">
import { shallowRef } from 'vue'

const count = shallowRef(0)
</script>

<template>
  <div relative h-full>
    <TheNav sticky top-0 />
    <div of-auto p4>
      <div grid="~ cols-3 gap-10">
        <div
          v-for="i in count" :key="i"
          aspect-ratio="1/1" relative rounded bg-secondary text-secondary
        >
          <span absolute text-xl position-center>
            {{ i }}
          </span>
        </div>
      </div>
    </div>
    <button fixed bottom-10 h-15 w-50 rounded-full bg-green py1 text-xl color-white position-x-center @click="count++">
      Add Block ({{ count }})
    </button>
  </div>
</template>
