export const state = () => ({
  counter: 0
});

export const mutations = {
  INCREMENT_COUNTER(state) {
    state.counter++;
  },
  DECREMENT_COUNTER(state) {
    state.counter--;
  }
};

export const actions = {
  increment({ commit }) {
    commit('INCREMENT_COUNTER')
  },
  decrement({ commit }) {
    commit('DECREMENT_COUNTER')
  }
};

export const getters = {};


