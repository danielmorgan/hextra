import map from '@/data/map.json';

export default {
  namespaced: true,

  state: () => ({
    selectedHex: null,
    map: map,
  }),

  getters: {
    isSelected: (state, getters, rootState, rootGetters) => (coords) => {
      return rootGetters.coordsMatch(state.selectedHex, coords);
    },
    unselectedMapHexes(state, getters, rootState, rootGetters) {
      return state.map.filter(hex => !rootGetters.coordsMatch(hex, state.selectedHex));
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
