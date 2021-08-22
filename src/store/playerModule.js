export default {
  namespaced: true,

  state: () => ({
    coords: { q: 0, r: 1 }
  }),

  mutations: {
    move(state, destination) {
      state.coords = destination;
    }
  }
};
