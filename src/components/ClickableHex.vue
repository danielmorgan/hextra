<template>
  <g class="group cursor-pointer">
    <Hex
      :coords="coords"
      stroke="black"
      stroke-width="2"
      class="fill-current text-white group-hover:text-purple-700"
    />
    <text
      :x="x"
      :y="y"
      text-anchor="middle"
      alignment-baseline="middle"
      font-size="16"
      class="fill-current text-black group-hover:text-white group-hover:opacity-0"
    >
      {{ q }},{{ r }}
    </text>
    <text
      :x="x"
      :y="y"
      text-anchor="middle"
      alignment-baseline="middle"
      font-size="16"
      class="fill-current text-black group-hover:text-white opacity-0 group-hover:opacity-100"
    >
      {{ x.toFixed(0) }},{{ y.toFixed(0) }}
    </text>
  </g>
</template>

<script>
import { flat_hex_corners, axial_to_pixel } from '@/utils/hex.js';
import Hex from './Hex.vue';

export default {
  components: { Hex },
  props: {
    coords: {
      type: Object,
      required: true,
    },
  },

  data() {
    const {x,y} = axial_to_pixel(this.coords);
    return {
      q: this.coords.q,
      r: this.coords.r,
      x,
      y,
    }
  },
};
</script>
