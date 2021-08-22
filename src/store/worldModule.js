import map from '@/data/map.json';


export default {
  namespace: true,

  state: () => ({
    selectedHex: null,
    map: map,
  }),

  mutations: {
    selectHex(state, hex) {
      state.selectedHex = hex;
    }
  },
};
