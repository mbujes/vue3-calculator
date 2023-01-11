<script setup lang="ts">
import { useCalculator } from '@/compositions/useCalculator';
import AppKeyboard from './AppKeyboard.vue';
import AppDisplay from './AppDisplay.vue';

const { memory, error, addDigit, addOperator, calculate, eraseLast, clear } =
  useCalculator();
</script>

<template>
  <div class="max-w-md mx-auto p-4 bg-slate-500 rounded-lg">
    <AppDisplay :text="memory" :error="error" />
    <AppKeyboard
      @add-operator="addOperator"
      @add-digit="addDigit"
      @calculate="calculate"
      @erase-last="eraseLast"
      @clear="clear"
    />
  </div>
</template>
