<template>
  <g>
    <ClickableHex
      v-for="coords in unselectedMapHexes"
      :key="`world|${coords.q},${coords.r}`"
      :coords="coords"
      @selected="handleSelectHex"
    />
    <!-- No z-index in SVG so a new element needs to be inserted after the other DOM elements to render on top -->
    <ClickableHex
      v-if="selectedHex"
      :key="`world|selected|${selectedHex.q},${selectedHex.r}`"
      :coords="selectedHex"
      :selected="true"
      @selected="handleSelectHex"
    />
    <Pin :coords="playerCoords"/>
  </g>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import ClickableHex from '@/components/ClickableHex.vue';
import Pin from '@/components/Pin.vue';

export default {
  components: { ClickableHex, Pin },

  mounted() {
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape') this.deselectHex(); });
  },

  methods: {
    ...mapMutations('world', [
      'selectHex',
      'deselectHex',
    ]),
    handleSelectHex(coords) {
      if (this.coordsMatch(this.selectedHex, coords)) {
        this.deselectHex();
      } else {
        this.selectHex(coords);
      }
    },
  },

  computed: {
    ...mapState({
      playerCoords: state => state.player.coords,
      map: state => state.world.map,
      selectedHex: state => state.world.selectedHex,
    }),
    ...mapGetters('world', [
      'isSelected',
      'coordsMatch',
      'unselectedMapHexes',
    ]),
  }
};
</script>
