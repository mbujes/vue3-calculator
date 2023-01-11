<script setup lang="ts">
defineProps({
  error: String,
  text: String,
});
</script>

<template>
  <div
    class="h-24 px-5 mb-5 rounded-lg bg-gray-800 text-white text-3xl text-right flex items-center justify-end overflow-hidden"
  >
    <template v-if="error"> {{ error }} </template>
    <template v-else>
      {{ text }}
    </template>
  </div>
</template>
