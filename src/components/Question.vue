<template>
  <div class="flex flex-col h-full">
    <div class="pb-6">
      <input 
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full p-2 font-medium text-gray-700 focus:outline-none"
        v-model="value.question"
        type="text"
        placeholder="Add your question"
      >
    </div>
    <div class="mb-3 flex items-center" v-for="(option, index) in value.options" :key="index">
      <input 
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded text-md w-full py-1 px-2 text-gray-700 focus:outline-none"
        type="text"
        v-model="option.answer"
        placeholder="Add another option"
      >
      <button 
        @click="addOption(index)" v-if="index === value.options.length - 1 && value.options.length <= 9"
        class="focus:outline-none"
      >
        <svg class="ml-2 w-6 h-6 fill-current hover:text-gray-900 cursor-pointer" viewBox="0 0 512 512">
            <use xlink:href="/icons/more.svg#plus"></use>
        </svg>
      </button>
      <button
        @click="removeOption(index)"
        class="focus:outline-none"
      v-else>
        <svg class="ml-2 w-6 h-6 fill-current hover:text-gray-900 cursor-pointer" viewBox="0 0 512 512">
            <use xlink:href="/icons/quit.svg#delete"></use>
        </svg>
      </button>
    </div>
    <div class="mt-auto flex flex-wrap justify-between items-center">
      <p>{{ value.options.length + '/10 possible answers' }}</p>
      <button @click="reset()" class="bg-gray-600 hover:bg-gray-700 text-white font-semibold mt-2 py-2 px-4 rounded-lg focus:outline-none">
        Reset
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: ['value'],
  methods: {
    addOption() {
      this.value.options.push({ answer: '', votes: 0 });
    },
    removeOption(i) {
      this.value.options.splice(i, 1);
    },
    reset() {
      this.$emit('input', {
        question:  '',
        options: [
          { answer: '', votes: 0 }
        ]
      })
    }
  }
}
</script>