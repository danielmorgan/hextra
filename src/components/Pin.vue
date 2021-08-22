<template>
  <image
    href="/pin.png"
    width="66"
    height="75"
    :transform="`translate(${x-33} ${y-70})`"
    class="pointer-events-none"
    />
</template>

<script>
import { axial_to_pixel } from '@/utils/hex.js';

export default {
  props: {
    coords: {
      type: Object,
      required: true,
    },
  },

  data() {
    const { x, y } = axial_to_pixel(this.coords);
    return {
      x,
      y,
    };
  },
};
</script>
