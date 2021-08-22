<template>
  <image
    href="/pin.png"
    width="66"
    height="75"
    :transform="`translate(${x} ${y})`"
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

  computed: {
    x() {
      return axial_to_pixel(this.coords).x - 33;
    },
    y() {
      return axial_to_pixel(this.coords).y - 70;
    },
  },
};
</script>
