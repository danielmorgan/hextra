
<template>
  <div>
    <svg viewBox="0 0 200 200" class="border border-black">
      <Hex transform="translate(100,100)" @click.native="handle" :fill="color" />
    </svg>
  </div>
</template>

<script>
import Hex from './components/Hex.vue'

export default {
  components: { Hex },

  data() {
    return {
      name: 'Hello World!',
      color: 'green',
    }
  },

  methods: {
    handle() {
      this.color = (this.color === 'green') ? 'blue' : 'green';
    },
  },
}
</script>
