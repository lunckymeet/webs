<template>
	<view class="index-wrap">
		
		<!-- 疫苗预约 -->
		<van-transition name="fade" :show="path == 'vaccine'">
			<vaccine class="animation-fade" style="animationDelay: 1s"></vaccine>
		</van-transition>
		
		<!-- 资讯 -->
		<van-transition name="fade" :show="path == 'message'">
			<message v-if="path == 'message'"></message>
		</van-transition>
		
		<!-- 个人中心 -->
		<van-transition name="fade" :show="path == 'person'">
			<person v-if="path == 'person'"></person>
		</van-transition>
		
		
		
		<!-- 底部导航栏 -->
		<view class="index-footer">
			<view class="tabbar" v-for="page in pageList" :key="page.id" :data-url="[page.page]" @click="changepage">
				<van-icon custom-class="icon"   size="60rpx"
					:name="page.icon + [path == page.page ? '-active' : ''] + '.png'"></van-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				path: "vaccine",
				pageList: [
					{ 
						id: 1,
						icon: "/static/images/tabbar/home",
						page: "vaccine"
					},
					{
						id: 2,
						icon: "/static/images/tabbar/chat",
						page: "message"
					},
					{
						id: 3,
						icon: "/static/images/tabbar/heart",
						page: "person"
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			changepage: function(e) {
				console.log(e.currentTarget.dataset.url);
				this.path = e.currentTarget.dataset.url[0];
			},
		}
	}
</script>

<style>
	.index-wrap {
		width: 100%;
		height: 100vhc;
	}
	
	.index-wrap > .index-footer {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 120rpx;
		line-height: 120rpx;
		background-color: #fff;
		box-shadow: 0 0 20rpx #ddd;
		border-radius: 40rpx 40rpx 0 0;
		overflow: hidden;
		display: flex;
		flex-flow: row wrap;
		z-index: 999;
	}
	
	.index-wrap > .index-footer > .tabbar {
		height: 100%;
		flex: 1 1 auto;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
