import map from '@/data/map.json';

export default {
  namespaced: true,

  state: () => ({
    selectedHex: null,
    map: map,
  }),

  getters: {
    isSelected: (state, getters) => (coords) => {
      return getters.coordsMatch(state.selectedHex, coords);
    },
    coordsMatch: () => (a, b) => {
      return a?.q === b?.q && a?.r === b?.r;
    },
    unselectedMapHexes(state, getters) {
      return state.map.filter(hex => !getters.coordsMatch(hex, state.selectedHex));
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
