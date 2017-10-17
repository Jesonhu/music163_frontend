<template>
	<div id="app">
		<keep-alive exclude="comment">
			<transition :name="'page-' + (direction === 'forward' ? 'in' : 'out')">
				<router-view class="router-view"></router-view>
			</transition>	
		</keep-alive>
		<music></music>
	</div>
</template>

<script>
	import music from "@/components/music";
	import { mapState } from 'vuex';

	export default {
		name: 'app',
		computed: {
			...mapState({
        direction: state => state.routerAnimation.direction
      })
		},
		components: {
			music
		}
	}
</script>

<style lang="css">
	@import './assets/router_animate.css';
</style>
