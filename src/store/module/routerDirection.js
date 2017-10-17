/**
 * localSession页面切换效果Vuex模块
 * @author Jesonhu
 */
export default {
  state: {
    direction: 'forward'
  },
  actions: {
    updateDirection ({commit}, res) {
      commit('UPDATE_DIRECTION', res)
    }
  },
  mutations: {
    UPDATE_DIRECTION (state, res) {
      state.direction = res.direction
    }
  }
}