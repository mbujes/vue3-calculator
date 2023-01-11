<script setup lang="ts">
defineProps({
  value: {
    type: [String],
    default: '',
  },
});
</script>

<template>
  <button
    class="h-24 p-5 text-2xl rounded-lg font-bold focus:outline-none text-white hover:opacity-80"
  >
    {{ value }}
  </button>
</template>
