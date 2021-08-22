<template>
  <g>
    <Hex
      v-for="coords in map"
      :key="`bg|${coords.q},${coords.r}`"
      :coords="coords"
      :fill="fillColor()"
      stroke="#bbb"
    />
  </g>
</template>

<script>
import { Hex as Hexagon } from '@/utils/hex.js';
import Hex from '@/components/Hex.vue'

export default {
  components: { Hex },

  data() {
    return {
      map: this.createMap(),
      raf: null,
    };
  },

  methods: {
    createMap() {
      const map = [];
      const range = 15;
      for (let q = -range; q <= range; q++) {
        for (let r = -range; r <= range; r++) {
          map.push(new Hexagon(q, r, -q-r));
        }
      }
      return map;
    },
    fillColor() {
      if (Math.random() < 0.25) {
        return '#dddde8';
      }
      if (Math.random() < 0.5) {
        return '#e0e0f0';
      }
      if (Math.random() < 0.75) {
        return '#e6e6f3';
      }
      return '#eeeef8';
    }
  },
};
</script>
