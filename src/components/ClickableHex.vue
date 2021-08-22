<template>
  <g
    class="group cursor-pointer"
    @click="$emit('selected', { q, r })"
  >
    <Hex
      :coords="coords"
      :stroke="[selected ? 'orange' : 'black']"
      :stroke-width="[selected ? 3 : 2]"
      class="fill-current text-white group-hover:text-purple-700"
      :class="[selected && 'text-yellow-200 group-hover:text-yellow-300']"
    />
    <text
      :x="x"
      :y="y"
      text-anchor="middle"
      alignment-baseline="middle"
      font-size="16"
      :font-weight="[selected && 'bold']"
      class="fill-current text-black group-hover:text-white font-mono stabular-nums lining-nums slashed-zero"
      :class="[selected && 'text-yellow-600 group-hover:text-yellow-700']"
    >
      {{ q }},{{ r }}
    </text>
  </g>
</template>

<script>
import { axial_to_pixel } from '@/utils/hex.js';
import Hex from './Hex.vue';

export default {
  components: { Hex },

  props: {
    coords: {
      type: Object,
      required: true,
    },
    selected: {
      type: Boolean,
      required: false,
      default: false,
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
