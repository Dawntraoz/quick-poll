<template>
  <div>
    <graph-bar
            :height="400"
            :labels="labels"
            :values="points"
            :colors="colors">
    </graph-bar>
  </div>
</template>

<script>
export default {
  name: 'Graph',
  props: ['value'],
  computed: {
    points: function () {
      return this.value.options.filter(option => option.votes > 0).map(option => option.votes)
    },
    labels: function () {
      return this.value.options.filter(option => option.votes > 0).map(option => option.answer)
    },
    colors: function() {
      return this.value.options.map(() => '#11998e')
    }
  }
}
</script>
