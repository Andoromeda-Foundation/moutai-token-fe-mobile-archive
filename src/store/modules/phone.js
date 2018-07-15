/**
 * Created by Dawn on 2018-07-15.
 */

const _state = {
    phone: ""
};

const mutations = {
    updatePhone(state, phone) {
        state.phone = phone;
    }
};

const getters = {
    getPhone(state) {
        return state.phone;
    }
};
const actions = {
    changeToken(context, phone) {
        context.commit("updatePhone", phone);
    }
};

export default {
    state: _state,
    getters,
    mutations,
    actions
};
