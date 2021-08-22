<template>
  <div>
    <svg :view-box.camel="viewBox" class="bg-yellow-100">
      <Background/>
      <World/>
    </svg>
  </div>
</template>

<script>
import World from '@/components/World.vue';
import Background from './components/Background.vue';

export default {
  components: { World, Background },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },

  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  },

  data() {
    return {
      name: 'Hello World!',
      color: 'green',
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    }
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
}
</script>
