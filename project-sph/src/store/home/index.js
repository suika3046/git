import { requestCategoryList } from '@/api'

const state = {
  categoryList: [],
}

const actions = {
  async categoryList({ commit }) {
    let result = await requestCategoryList()
    if (result.code === 200) {
      commit('CATEGORYLIST', result.data)
    }
  },
}

const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}
