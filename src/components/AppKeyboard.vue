<script setup lang="ts">
import AppButton from './AppButton.vue';

defineEmits(['clear', 'eraseLast', 'addOperator', 'addDigit', 'calculate']);
</script>

<template>
  <div class="grid grid-rows-5 grid-cols-4 gap-2">
    <AppButton
      value="Clear"
      class="bg-red-400 col-span-2"
      @click="$emit('clear')"
    />
    <AppButton value="Del" class="bg-orange-400" @click="$emit('eraseLast')" />
    <AppButton
      value="/"
      class="bg-green-400"
      @click="$emit('addOperator', '/')"
    />

    <AppButton
      v-for="num in ['7', '8', '9']"
      :key="num"
      :value="num"
      class="bg-blue-400"
      @click="$emit('addDigit', num)"
    />
    <AppButton
      value="*"
      class="bg-green-400"
      @click="$emit('addOperator', '*')"
    />

    <AppButton
      v-for="num in ['4', '5', '6']"
      :key="num"
      :value="num"
      class="bg-blue-400"
      @click="$emit('addDigit', num)"
    />
    <AppButton
      value="-"
      class="bg-green-400"
      @click="$emit('addOperator', '-')"
    />

    <AppButton
      v-for="num in ['1', '2', '3']"
      :key="num"
      :value="num"
      class="bg-blue-400"
      @click="$emit('addDigit', num)"
    />
    <AppButton
      value="+"
      class="bg-green-400"
      @click="$emit('addOperator', '+')"
    />

    <AppButton
      value="0"
      class="bg-blue-400 col-span-2"
      @click="$emit('addDigit', 0)"
    />
    <AppButton value="." class="bg-blue-400" @click="$emit('addDigit', '.')" />
    <AppButton value="=" class="bg-green-400" @click="$emit('calculate')" />
  </div>
</template>
