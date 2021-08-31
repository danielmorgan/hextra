export default {
  namespaced: true,

  state: () => ({
    coords: { q: 0, r: 0 },
  }),

  mutations: {
    move(state, destination) {
      state.coords = destination;
    },
  },

  actions: {
    movePlayer: {
      root: true,
      handler({ commit }, destination) {
        commit(move);
      },
    },
  },
};
