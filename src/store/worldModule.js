import map from '@/data/map.json';
import { coords_match } from '@/utils/hex';

export default {
  namespaced: true,

  state: () => ({
    selectedHex: null,
    map: map,
  }),

  getters: {
    isSelected: (state) => (coords) => {
      return coords_match(state.selectedHex, coords);
    },
    unselectedMapHexes(state) {
      return state.map.filter(hex => !coords_match(hex, state.selectedHex));
    },
    selectedHexStoryFile(state) {
      return `/${state.selectedHex?.story}.json`;
    },
  },

  mutations: {
    selectHex(state, hex) {
      state.selectedHex = hex;
    },
    deselectHex(state) {
      state.selectedHex = null;
    },
  },
};
