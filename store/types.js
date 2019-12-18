export const state = () => ({
  articleTypes: [],
  lifeTypes: []
});

export const mutations = {
  saveArticleTypes (state, { list }) {
    state.articleTypes = list;
  },
  addArticleTypes (state, payload) {
    state.articleTypes = state.articleTypes.concat(payload);
  },
  removeArticleTypes (state, { id }) {
    state.articleTypes = state.articleTypes.filter(item => item._id !== id);
  },
  saveLifeTypes (state, { list }) {
    state.lifeTypes = list;
  },
  addLifeTypes (state, payload) {
    state.lifeTypes = state.lifeTypes.concat(payload);
  },
  removeLifeTypes (state, { id }) {
    state.lifeTypes = state.lifeTypes.filter(item => item._id !== id);
  }
};

export const actions = {
  async login ({ commit }, payload) {
    const [err, res] = await this.$to(this.$axios.$get('/api/login', payload));
    if (!err) {
      commit('saveUserInfo', res.data);
    }
  }
};
