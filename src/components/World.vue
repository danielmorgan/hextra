<template>
  <g>
    <ClickableHex
      v-for="coords in mapUnselected"
      :key="`world|${coords.q},${coords.r}`"
      :coords="coords"
      :selected="isSelected(coords)"
      @selected="selectHex"
    />
    <ClickableHex
      v-if="selectedHex"
      :key="`world|selected|${selectedHex.q},${selectedHex.r}`"
      :coords="selectedHex"
      :selected="isSelected(selectedHex)"
      @selected="selectHex"
    />
    <Pin :coords="playerCoords"/>
  </g>
</template>

<script>
import map from '@/data/map.json';
import ClickableHex from '@/components/ClickableHex.vue';
import Pin from '@/components/Pin.vue';

export default {
  components: { ClickableHex, Pin },

  data() {
    return {
      map: map.flat(),
      playerCoords: { q: 0, r: 0 },
      selectedHex: null,
    };
  },

  mounted() {
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape') this.deselectHex(); });
  },

  methods: {
    selectHex(coords) {
      if (this.selectedHex?.q === coords.q && this.selectedHex?.r === coords.r) {
        this.deselectHex();
        return;
      }
      this.selectedHex = coords;
    },
    deselectHex() {
      this.selectedHex = null;
    },
    isSelected(coords) {
      return this.selectedHex?.q === coords.q && this.selectedHex?.r === coords.r;
    },
  },

  computed: {
    mapUnselected() {
      if (!this.selectedHex) return this.map;
      return this.map.filter(c => c.q !== this.selectedHex?.q || c.r !== this.selectedHex?.r);
    }
  }
}
</script>
