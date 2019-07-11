import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		'token': window.sessionStorage.getItem('token') || '',
		'sidebarStatus': window.sessionStorage.getItem('sidebarStatus') || '1'
	},
	mutations: {
		SET_TOKEN (state, params) {
			state.token = params.token
			window.sessionStorage.setItem('token', params.token)
		},
		SET_SIDEBARSTATUS (state, params) {
			state.sidebarStatus = params.sidebarStatus
			window.sessionStorage.setItem('sidebarStatus', params.sidebarStatus)
		}
	},
	actions: {
		setToken ({commit, state}, params) {
			commit('SET_TOKEN', params)
		},
		setSidebarStatus ({commit, state}, params) {
			commit('SET_SIDEBARSTATUS', params)
		}
	}
})

export default store
