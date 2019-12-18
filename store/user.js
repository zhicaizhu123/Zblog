export const state = () => ({
  userInfo: {},
  token: ''
});

export const mutations = {
  saveToken (state, payload) {
    const { token } = payload;
    localStorage.setItem('token', token);
    state.token = token;
  },
  removeToken (state) {
    localStorage.removeItem('token');
    state.token = '';
  },
  saveUserInfo (state, payload) {
    state.userInfo = payload;
  },
  removeUserInfo (state) {
    state.userInfo = {};
  }
};

export const actions = {
  async login ({ commit }, payload) {
    // const [err, res] = await this.$to(this.$axios.$get());
    // if (!err) {
    //   commit('saveUserInfo', res.data);
    // }
  }
};
