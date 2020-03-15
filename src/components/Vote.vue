<template>
  <div class="flex flex-col h-full">
    <header class="mt-2 pb-8">
      <h2 class="font-semibold text-lg">{{ value.question }}</h2>
    </header>
    <ul>
      <li v-for="(option, index) in value.options" :key="'option-' + index">
        <label class="inline-flex items-center my-1" v-if="option.answer">
          <input
            v-model="answer"
            :value="option.answer"
            type="radio"
            class="form-radio text-green-500 focus:shadow-none"
          >
          <span class="ml-2">{{ option.answer }}</span>
        </label>
      </li>
    </ul>
    <button v-if="value.options.filter(option => option.answer).length >= 2" @click="addVotes()"
      :class="answer ? '' : 'pointer-events-none bg-gray-500'"
      class="mt-auto ml-auto bg-green-500 text-white font-semibold py-2 px-4 rounded-full focus:outline-none">
      Vote
    </button>
    <p class="mt-auto ml-auto text-red-500" v-else>Minimum 2 answers to vote.</p>
  </div>
</template>

<script>
export default {
  name: 'Vote',
  props: ['value'],
  data() {
    return {
      answer: ''
    };
  },
  methods: {
    addVotes() {
      this.value.options.map((option) => { 
        if(option.answer === this.answer) option.votes++
      });
    }
  }
}
</script>
