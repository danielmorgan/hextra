import { createStore } from 'vuex';
import memory from '@/store/memoryModule.js';
import player from '@/store/playerModule.js';
import world from '@/store/worldModule.js';

export default createStore({
  modules: {
    memory,
    player,
    world,
  },

  getters: {
    coordsMatch: () => (a, b) => {
      return a?.q === b?.q && a?.r === b?.r;
    },
  },
})
