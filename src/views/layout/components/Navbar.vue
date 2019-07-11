<template>
	<div id="navbar">
		<el-menu
		  :default-active="activeIndex"
		  mode="horizontal"
		  background-color="#00a6a6"
		  text-color="#fff"
		  active-text-color="#ffd04b">
		  <hamburger class="hamburgerNavbar fl" :toggleClick="toggleSideBar" :isActive="sidebarStatus"></hamburger>
		  <el-menu-item index="1">处理中心</el-menu-item>
		  <el-menu-item index="3">消息中心</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	import hamburger from '@/components/hamburger'
  export default {
    data() {
      return {
        activeIndex: '1'
      };
    },
    components: {
    	hamburger: hamburger
    },
    computed: {
    	sidebarStatus () {
    		return this.$store.state.sidebarStatus
    	}
    },
    methods: {
    	toggleSideBar () {
    		if (this.sidebarStatus === '1') {
    			this.$store.dispatch('setSidebarStatus', {sidebarStatus: '0'})
    		} else {
    			this.$store.dispatch('setSidebarStatus', {sidebarStatus: '1'})
    		}
      }
    }
  }
</script>

<style lang="less" scoped>
	#navbar {
		width: 100%;
		.hamburgerNavbar {
			margin-left: 15px;
			margin-top: 15px;
			border: 0 none;
		}
	}
</style>