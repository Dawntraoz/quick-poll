<template>
  <div id="app" class="min-h-screen bg-gradient">
    <header class="pt-12 pb-8 md:pt-20 md:pb-12 text-white text-center">
      <h1 class="font-bold text-3xl tracking-wide uppercase">Quick Poll</h1>
    </header>
    <div class="container mx-auto flex flex-wrap justify-center text-gray-700 md:px-4">
      <Card classes="md:w-1/2 lg:w-1/3">
        <Question v-model="pollQuestion" />
      </Card>
      <Card classes="md:w-1/2 lg:w-1/3">
        <Vote v-model="pollQuestion" />
      </Card>
      <Card classes="lg:w-1/3">
        <Graph v-model="pollQuestion" />
      </Card>
    </div>
  </div>
</template>

<script>
import Card from './components/Card.vue'
import Question from './components/Question.vue'
import Vote from './components/Vote.vue'
import Graph from './components/Graph.vue'

export default {
  name: 'App',
  components: {
    Card,
    Question,
    Vote,
    Graph
  },
  data() {
    return {
      pollQuestion: {
        question: '',
        options: [
          { answer: '', votes: 0 }
        ]
      }
    };
  }
}
</script>

<style>
body {
  word-break: break-word;
}
.bg-gradient {

  background: #11998e; /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #38ef7d, #11998e);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #38ef7d, #11998e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
