<template>
  <div class="flex flex-col justify-end items-center">
    <div
      class="pointer-events-auto mb-24 w-96"
      v-if="hasSelectedHex"
    >
      <div class="bg-black bg-opacity-50 text-white text-center rounded shadow-lg font-bold py-4 text-3xl">
        Monsieur Fogg
      </div>

      <button
        v-if="!selectedCurrentLocation"
        @click="handleTravel"
        class="mt-4 px-6 py-3 w-full border-2 border-white bg-yellow-500 hover:bg-purple-500 text-white font-black text-3xl leading-none tracking-wide uppercase rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-xl active:translate-y-1 active:shadow-lg"
        v-text="`Travel`"
      />
      <button
        v-else
        @click="handleExplore"
        class="mt-4 px-6 py-3 w-full border-2 border-white bg-purple-500 hover:bg-yellow-500 text-white font-black text-3xl leading-none tracking-wide uppercase rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-xl active:translate-y-1 active:shadow-lg"
        v-text="`Explore`"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState({
      q: state => state.world.selectedHex?.q,
      r: state => state.world.selectedHex?.r,
      hasSelectedHex: state => !!state.world.selectedHex,
      selectedHex: state => state.world.selectedHex,
      playerCoords: state => state.player.coords,
    }),
    ...mapGetters(['coordsMatch']),
    selectedCurrentLocation() {
      return this.coordsMatch(this.playerCoords, this.selectedHex);
    },
  },

  methods: {
    ...mapMutations('player', ['move']),
    ...mapMutations('world', ['deselectHex']),
    handleTravel() {
      this.move(this.selectedHex);
    },
    handleExplore() {
      this.$emit('explore');
    },
  }
};
</script>
