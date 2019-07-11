<template>
	<div id="sidebar" :class="{openSidebar: sidebarStatus === '1'}">
		<el-menu
			mode="vertical"
			:show-timeout="200"
      :default-active="navActive"
      :collapse="sidebarStatus === '0'"
      :collapse-transition="false"
      :unique-opened="true"
      :popper-append-to-body="true"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF">
      <div class="tit" v-show="sidebarStatus === '1'">
				<div class="cell">
					北方航空护林总站
				</div>
				<div class="cell">
					管 理 信 息 系 统
				</div>
			</div>
			<div class="titClose" v-show="sidebarStatus === '0'">
				H+
			</div>
			<template v-for="(value, index) in routes">
				<el-submenu index="1" :key='value.menuName' v-if="value.childrenMenu && value.childrenMenu.length > 0">
			    <template slot="title">
			      <i class="el-icon-location"></i>
			      <span slot="title">{{value.menuName}}</span>
			    </template>
			    <el-menu-item :index="item.menuUrl" :key='item.menuName' v-for="(item, index) in value.childrenMenu">{{item.menuName}}</el-menu-item>
			 	</el-submenu>
			 	<el-menu-item index="2" v-else>
			    <i class="el-icon-menu"></i>
			    <span slot="title">{{value.menuName}}</span>
			  </el-menu-item>
			</template>
		</el-menu>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        isCollapse: false,
        navActive: '',
        routes: [{
        	menuName: '导航一',
        	childrenMenu: [{
        		menuUrl: '/1',
        		menuName: '选项1'
        	}, {
        		menuUrl: '/2',
        		menuName: '选项2'
        	}]
        }, {
        	menuUrl: '/',
        	menuName: '导航二',
        	childrenMenu: []
        }]
      }
    },
    computed: {
    	sidebarStatus () {
    		return this.$store.state.sidebarStatus
    	}
    },
    created () {
    	this.init();
    },
    methods: {
    	init () {
    		var _this = this;
    		setTimeout(function () {
    			console.log(_this.route)
    		}, 2000)
    	}
    }
  }
</script>

<style lang="less" scoped>
	#sidebar {
		width: 70px;
		height: 100%;
		overflow: hidden;
		background-color: #304156;
		transition: width 0.5s;
		-webkit-transition: width 0.5s;
		-moz-transition: width 0.5s;
		-ms-transition: width 0.5s;
		-o-transition: width 0.5s;
		.tit {
			width: 170px;
			height: 64px;
			padding: 15px 25px;
			font-size: 21px;
			line-height: 24px;
			color: #FFFFFF;
			text-align: center;
			.cell {
				margin-bottom: 10px;
			}
			.cell:last-child {
				margin-bottom: 0;
			}
		}
		.titClose {
			font-size: 18px;
			font-weight: 600;
			line-height: 24px;
			color: #fff;
			padding: 18px 0;
			background-color: #1ab394;
			text-align: center;
		}
	}
	#sidebar.openSidebar {
		width: 220px;
	}
</style>
