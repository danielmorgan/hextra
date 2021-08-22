import { createStore } from 'vuex';
import player from '@/store/playerModule.js';
import world from '@/store/worldModule.js';

export default createStore({
  modules: {
    player,
    world,
  },
})
