<template>
  <polygon :points="points"/>
</template>

<script>
import { flat_hex_corners, axial_to_pixel } from '@/utils/hex.js';

export default {
  props: {
    coords: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      q: this.coords.q,
      r: this.coords.r,
    }
  },

  computed: {
    points() {
      const { x, y } = axial_to_pixel(this.coords);
      return flat_hex_corners({ x, y }, 20);
    }
  }
};
</script>
