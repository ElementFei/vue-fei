<template>
	<div id="layout" class="clearfix">
		<!--页面的两种布局-->
		<div class="layoutOne" v-if="status">
			<div class="main fl">
				<div class="content" :class="{openSidebar: sidebarStatus === '1'}">
					<navbar></navbar>
					<app-main></app-main>
				</div>
			</div>
			<div class="sidebar fl">
				<sidebar></sidebar>
			</div>
		</div>
		<div class="layoutTwo" v-if="!status">
			<navbar></navbar>
			<div class="layoutCent">
				<div class="main fl">
					<div class="content" :class="{openSidebar: sidebarStatus === '1'}">
						<app-main></app-main>
					</div>
				</div>
				<div class="sidebar fl">
					<sidebar></sidebar>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import navbar from '@/views/layout/components/Navbar'
	import sidebar from '@/views/layout/components/Sidebar'
	import appMain from '@/views/layout/components/AppMain'
  export default {
  	components: {
  		navbar: navbar,
  		sidebar: sidebar,
  		appMain: appMain
  	},
    data () {
      return {
      	status: true
      }
    },
    computed: {
    	sidebarStatus () {
    		return this.$store.state.sidebarStatus
    	}
    },
    computed: {
	    sidebarStatus () {
	      return this.$store.state.sidebarStatus
	    }
	  },
    methods: {
    }
  }
</script>

<style lang="less" scoped>
	#layout {
		width: 100%;
		height: 100%;
		.layoutOne {
			width: 100%;
			height: 100%;
		}
		.layoutTwo {
			width: 100%;
			height: 100%;
			position: relative;
			.layoutCent {
				width: 100%;
				position: absolute;
				top: 60px;
				bottom: 0;
			}
		}
		.main {
			height: 100%;
			width: 100%;
			.content {
				margin-left: 70px;
				transition: margin-left 0.5s;
				-webkit-transition: margin-left 0.5s;
				-moz-transition: margin-left 0.5s;
				-ms-transition: margin-left 0.5s;
				-o-transition: margin-left 0.5s;
			}
			.content.openSidebar {
				margin-left: 220px;
			}
		}
		.sidebar {
			height: 100%;
			margin-left: -100%;
		}
	}
</style>