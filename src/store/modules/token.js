/**
 * Created by Dawn on 2018-07-14.
 */

const _state = {
  token: ""
};

const mutations = {
  updateToken(state, token) {
    state.token = token;
  }
};

const getters = {
  getToken(state) {
    return state.token;
  }
};
const actions = {
  changeToken(context, token) {
    context.commit("updateToken", token);
  }
};

export default {
  state: _state,
  getters,
  mutations,
  actions
};
