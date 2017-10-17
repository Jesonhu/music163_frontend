import localStorage from '@/plugins/localStorage';

/**
 * Vuex模块 user
 * 
 * @explain 1模块方式vuex,拆分的actions mutations安装正常方式使用 this.$store.dispatch()
 * @explain 2 state中的数据，在组件的computed钩子中 ...mapState({xxx: state => state.vux模块.state})方式使用
 * @explain 3 页面刷新的时候vuex state就会加载,localStorage.getLocal('user')就会执行
 */
export default {
  state: {
    // user: localStorage.getLocal('user') || {}
  },
  actions: {

  },
  mutations: {
    /**
     * 添加用户本地存储，并改变state user值
     * @param {*} state
     * @param {*} user 后台返回的对象
     */
    localuser (state, user) {
      // console.log(user);
			localStorage.setLocal("user", JSON.stringify(user));
			state.user = user;
			logined = user.account ? true : false;
		}
  }
}