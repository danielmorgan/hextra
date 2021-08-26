<template>
  <div class="bg-white bg-opacity-75 cursor-pointer" @click="$emit('close')">
    <div class="max-w-3xl mx-auto m-16 p-8 bg-black bg-opacity-75 rounded-lg shadow-2xl cursor-auto" @click.stop>
      <div v-if="fileError" class="text-white">
        Error: Could not load story file [{{ selectedHexStoryFile }}]
      </div>
      
      <div class="flex flex-col justify-between items-center" v-else>
        <h1 class="text-3xl font-semibold leading-none text-white text-center">{{ title }}</h1>

        <div class="mt-8">
          <transition
            leave-active-class="duration-250 ease-in"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
            mode="out-in"
          >
            <div :key="step">
              <div class="flex flex-col space-y-3">
                <p
                  v-for="(line, idx) in lines"
                  :key="idx"
                  v-text="line"
                  class="font-serif text-gray-100 text-2xl"
                />
              </div>
              <div class="mt-8 flex justify-center">
                <div class="flex-1 flex flex-col space-y-2">
                  <button
                    type="button"
                    v-for="choice in choices"
                    :key="choice.index"
                    @click.prevent="handleChoice(choice.index)"
                    v-text="choice.text"
                    class="leading-none p-3 bg-purple-700 hover:bg-purple-800 shadow-lg transform duration-250 rounded border-2 border-white text-white text-xl font-semibold"
                  />
                </div>
              </div>
            </div>
          </transition>
        </div>

        <button
          type="button"
          @click="$emit('close')"
          class="mt-16 w-8 h-8 text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Story } from 'inkjs';

export default {
  data() {
    return {
      title: 'Story',
      story: null,
      lines: [],
      choices: [],
      step: 0,
      fileError: false,
    };
  },

  mounted() {
    fetch(this.selectedHexStoryFile)
      .then(res => res.text())
      .then(this.setupStory)
      .catch(error => {
        this.fileError = true;
        console.error(error);
      });
  },

  computed: {
    ...mapGetters('world', [
      'selectedHexStoryFile'
    ]),
  },

  methods: {
    setupStory(ink) {
      this.story = new Story(ink);
      this.runStory();
    },
    runStory() {
      this.step++;
      this.lines = [];
      this.choices = [];

      while (this.story.canContinue) {
        this.lines.push(this.story.Continue());
      }

      if (this.story.currentChoices.length > 0) {
        this.choices = this.story.currentChoices;
      }
    },
    handleChoice(index) {
      this.story.ChooseChoiceIndex(index);
      this.runStory();
    },
  }
};
</script>
