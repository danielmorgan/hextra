<template>
  <g>
    <polygon
      v-for="coords in map"
      :key="`bg|${coords.q},${coords.r}`"
      :fill="fillColor()"
      stroke="#bbb"
      :points="points(coords)"
    />
  </g>
</template>

<script>
import { flat_hex_corners, axial_to_pixel, Hex } from '@/utils/hex.js';

export default {
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
          map.push(new Hex(q, r, -q-r));
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
    },
    points(coords) {
      return flat_hex_corners(
        axial_to_pixel(coords)
      );
    },
  },
};
</script>
