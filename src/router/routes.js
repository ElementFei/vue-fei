import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [{
		path: '/selectFilter',
  	name: 'selectFilter',
  	component: () => import('@/views/demo/selectFilter')
  }]
})

export default router