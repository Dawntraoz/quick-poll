<template>
  <div class="w-full md:w-1/2 lg:w-1/3 p-4 min-h-card">
    <div class="bg-white shadow-lg rounded-lg p-6 h-full">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
