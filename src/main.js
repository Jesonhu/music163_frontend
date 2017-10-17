/**
 * @module {Object} Vue vue实例对象
 * @module {*} App 指向./App.vue
 * @module {Object} router vue-router模块
 * @module {} mint minut-ui相关(包括js css),tep1: 引入js css; step2: Vue.use(xxx);
 * @module {} store vuex 模块，use step1: 引入文件，step2: Vue实例化作为参数传递
 * @module {} axios 类似$.ajax()请求封装---支持Promise对象
 * 									Vue.prototype.$http = axios 作为vue原型对象的属性，页面中可以这样使用 this.$http
 * @module {} api 前端请求接口整理，axios请求整理
 * @module {} vsconsole 手机端console调试插件
 * @module {} FastClick 手机端处理单击300ms延时问题插件,tep1: 引入js; step2: document DOMContentLoaded加载时候执行;
 * 
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'
import mint from "mint-ui";
import '@/assets/layout.css'
import store from '@/store/store'
import axios from 'axios'
import api from "@/api";
// import vconsole from 'vconsole';
import host from './host'
Vue.use(mint);
let FastClick = require('FastClick')
if('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}

/**
 * Axios配置
 * @explain 1 axios.defaults.timeout = 5000; // 默认5s超时
 * @explain 2 ...baseURL = host.baseHost; 请求地址
 * @explain 3 .headers.post 
 * @explian 4 axios.interceptors.request.use() 添加请求拦截器--每次请求都会先经过拦截器
 * @explain 5 
 */
axios.defaults.timeout = 5000;
axios.defaults.baseURL = host.baseHost;
//axios.defaults.withCredentials=true;// 请求带上cookie
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.request.use(function(config) { // 这里的config包含每次请求的内容
	// console.log(config);
	if(config.params && config.params.auth && !logined) {
		// 需要登录验证的url 需带params.auth=true
		router.push({
			name: 'login'
		});
		return Promise.reject({
			"msg": '需先登录'
		});
	}
	return config;
}, function(err) {
	return Promise.reject(err);
});

axios.interceptors.response.use((res) => {
	if(res.data.code === 301) {
		console.log('未登录')
	} else if(res.data.code !== 200) {
		console.log('返回数据不正常')
	}
	return res
}, (error) => {
	console.log('promise error:' + error)
	return Promise.reject(error)
});
Vue.prototype.$http = axios;
Vue.prototype.$host = host;

Vue.config.productionTip = false

let audio = null;
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {
		App
	},
	async mounted() {
		audio = document.querySelector("#audio");
		await this.$store.dispatch("localuser");
		await this.$store.dispatch('getlike');
		window.onscroll = () => {
			this.$store.commit("scroll", window.pageYOffset)
		}
	}
})
Vue.filter('playcount', function(v) {
	if(!v) return "";
	return v < 1e4 ? v : ((v / 1e4).toFixed(0) + '万')
})
Vue.filter('dateM', function(v) {
	v = new Date(v);
	var y = v.getFullYear() == new Date().getFullYear() ? '' : v.getFullYear() + "-";
	var m = v.getMonth() + 1;
	m = m > 9 ? m : `0${m}`;
	var d = v.getDate();
	d = d > 9 ? d : `0${d}`;
	return y + m + "-" + d
})
Vue.filter('dateS', function(v) {
	v = new Date(v);
	var m = v.getMinutes();
	m = m > 9 ? m : `0${m}`;
	var s = v.getSeconds();
	s = s > 9 ? s : `0${s}`;
	return m + ':' + s
})
Vue.filter('time', function(date) {
	if(!date) return '';
	date = new Date(date);
	var m = date.getMonth() + 1;
	m = m > 9 ? m : `0${m}`;
	var d = date.getDate();
	d = d > 9 ? d : `0${d}`;
	return date.getFullYear() + '-' + m + '-' + d
});
Vue.filter("btdto", function(v) {
	v = new Date(v);
	var m = v.getMonth() + 1;
	var d = v.getDate();
	var xz = "魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(m * 2 - (d < "102223444433".charAt(m - 1) - -19) * 2, 2);
	return xz + '座'
});

/**
 * 页面切换效果
 */
const routerAnimation = () => {
	const history = window.sessionStorage;
	history.clear()
	let historyCount = history.getItem('count') * 1 || 0
	history.setItem('/', 0)
	
	router.beforeEach((to, from, next) => {
		const toIndex = history.getItem(to.path)
		const fromIndex = history.getItem(from.path)
	
		if (toIndex) { // 返回
			if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
				store.commit('UPDATE_DIRECTION', {direction: 'forward'})
			} else {
				store.commit('UPDATE_DIRECTION', {direction: 'reverse'})
			}
		} else { // 前进
			++historyCount
			history.setItem('count', historyCount)
			to.path !== '/' && history.setItem(to.path, historyCount)
			store.commit('UPDATE_DIRECTION', {direction: 'forward'})
		}
		next()
	});
}
routerAnimation();