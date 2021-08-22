export default {
  namespace: true,

  state: () => ({
    coords: { q: 0, r: 1 }
  }),

  mutations: {
    move(state, destination) {
      state.coords = destination;
    }
  }
};
