<template>
	<div id="appMain">
		<section class="app-main">
	    <transition name="fade" mode="out-in">
	      <router-view></router-view>
	    </transition>
	  </section>
	</div>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>
<style lang="less" scoped>
  .app-main {
    padding-top: 50px;
  }
</style>
