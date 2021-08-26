export default {
  namespaced: true,

  state: () => ({
    globalVariables: {},
  }),

  getters: {
    all(state) {
      return state.globalVariables;
    },
    get: (state) => (name) => {
      return state.globalVariables[name];
    },
  },

  mutations: {
    updateGlobalVariables(state, variables) {
      state.globalVariables = Object.assign(state.globalVariables, variables);
    },
  },
};
