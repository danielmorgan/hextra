<template>
  <div class="relative">
    <svg :view-box.camel="viewBox" class="z-0">
      <Background/>
      <World/>
    </svg>
    
    <UI class="absolute inset-0 z-10 pointer-events-none" @explore="showStory = true"/>

    <Story
      class="absolute inset-0 z-20"
      v-if="showStory"
      @close="showStory = false"
    />
  </div>
</template>

<script>
import World from '@/components/World.vue';
import Background from './components/Background.vue';
import UI from './components/UI.vue';
import Story from './components/Story.vue';

export default {
  components: { World, Background, UI, Story },

  data() {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      showStory: false,
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },

  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  },

  computed: {
    viewBox() {
      return `0 0 ${this.windowWidth} ${this.windowHeight}`;
    }
  },

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    },
  }
};
</script>
