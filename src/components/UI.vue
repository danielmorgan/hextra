<template>
  <div class="flex flex-col justify-end items-center">
    <div
      class="pointer-events-auto mb-24"
      v-if="hasSelectedHex"
    >
      <button
        @click="$emit('handle-visit')"
        class="px-6 py-3 bg-yellow-500 border-2 border-white hover:bg-purple-500 text-white font-black text-3xl leading-none tracking-wide uppercase rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-xl active:translate-y-1 active:shadow-lg"
        v-text="`Visit`"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      hasSelectedHex: state => !!state.world.selectedHex,
    }),
  },
};
</script>
