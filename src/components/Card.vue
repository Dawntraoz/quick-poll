<template>
  <div class="w-full p-4 min-h-card" :class="classes">
    <div class="bg-white shadow-lg rounded-lg p-6 h-full">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['classes']
}
</script>
