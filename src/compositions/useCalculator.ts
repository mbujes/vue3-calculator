import { ref, readonly } from 'vue';

const operators = ['/', '*', '+', '-'];

export function useCalculator() {
  const memory = ref('');
  const error = ref('');
  const clearOnNextDigit = ref(false);

  function lastCharIsOperator(string: string) {
    return operators.includes(string.charAt(string.length - 1));
  }

  function addDigit(digit: string) {
    const lastDigit = memory.value.charAt(memory.value.length - 1);

    if (lastDigit === '.' && digit === '.') return;
    if (lastDigit === '0' && memory.value.length === 1) clear();
    if (clearOnNextDigit.value) clear();
    if ((!memory.value || lastCharIsOperator(memory.value)) && digit === '.')
      memory.value += '0';

    clearOnNextDigit.value = false;
    memory.value += `${digit}`;
  }

  function addOperator(operator: string) {
    if (!memory.value && operator !== '-') return;
    if (lastCharIsOperator(memory.value)) eraseLast();

    clearOnNextDigit.value = false;
    memory.value += `${operator}`;
  }

  function calculate() {
    if (!memory.value) return;

    if (lastCharIsOperator(memory.value)) {
      memory.value = memory.value.slice(0, memory.value.length - 1);
    }

    try {
      const mathExpression = memory.value.replace(
        /\b0*((\d+\.\d+|\d+))\b/g,
        '$1'
      ); // remove octal numeric
      memory.value = `${eval(mathExpression)}`;
    } catch (e: any) {
      error.value = e.message;
      memory.value = '';
    } finally {
      clearOnNextDigit.value = true;
    }
  }

  function eraseLast() {
    if (!memory.value.length) return;

    memory.value = memory.value.slice(0, memory.value.length - 1);
    clearOnNextDigit.value = false;
  }

  function clear() {
    memory.value = '';
    error.value = '';
  }

  return {
    memory: readonly(memory),
    error: readonly(error),
    addDigit,
    addOperator,
    calculate,
    eraseLast,
    clear,
  };
}
