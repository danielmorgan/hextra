<template>
  <g>
    <ClickableHex
      v-for="coords in map"
      :key="`${coords.q},${coords.r}`"
      :coords="coords"
    />
  </g>
</template>

<script>
import map from '@/data/map.json';
import ClickableHex from './ClickableHex.vue';

export default {
  components: { ClickableHex },

  data() {
    return {
      map: map.flat(),
    };
  },
}
</script>
