<template>
  <g>
    <Hex
      v-for="coords in map"
      :key="`bg-${coords.q},${coords.r}`"
      :coords="coords"
      fill="#eee"
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
      map: this.floodFill(),
    };
  },

  methods: {
    floodFill() {
      const map = [];
      const range = 20;
      for (let q = -range; q <= range; q++) {
        for (let r = -range; r <= range; r++) {
          map.push(new Hexagon(q, r, -q-r));
        }
      }
      return map;
    },
  },
}
</script>
