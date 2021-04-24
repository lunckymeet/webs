<template>

	<view class="nav-wrap" :style="'height: ' + [navHeight] + 'px; background:' + [bgColor]">
		<view class="nav-context"
			:style="'top: ' + [statuHeight] + 'px; height:' + [contextHeight] + 'px; line-height: ' + [contextHeight] + 'px'">
			<view class="title">
				<text :style="'color: ' + [titleColor]">{{topTitle}}</text>
			</view>
			<view class="back" v-if="isBack" @click="back()">
				<text class="icon cuIcon-back" :style="'color:' + [iconColor]"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navHeight: 0, // 导航栏高度
				statuHeight: 0, // 状态栏高度
				contextHeight: 0, // 内容栏高度
			}
		},
		props: {
			isBack: {
				// 是否显示返回上一层
				type: Boolean,
				default: true
			},
			bgColor: {
				// 标题背景颜色
				type: String,
				default: "#fff"
			},
			iconColor: {
				// 图标颜色
				type: String,
				default: ""
			},
			topTitle: {
				// 导航栏标题
				type: String,
				default: ""
			},
			titleColor: {
				// 标题字体颜色
				type: String,
				default: ""
			},
			bgImg: {
				type: String,
				default: ""
			}
		},
		methods: {
			back: function(e) {
				uni.navigateBack({
					delta: 1,
					animationType: 'pop-out',
					animationDuration: 200
				});
				uni.vibrateShort({
					success: (e) => {
						console.log(e)
					}
				})
			}

		},
		created: function(e) {
			const appData = getApp().globalData;
			const thisData = this.$data;
			thisData.navHeight = appData.navHeight; // 导航栏宽度
			thisData.statuHeight = appData.statuHeight; // 状态栏宽度
			thisData.contextHeight = appData.contextHeight; // 内容栏宽度
		}
	}
</script>

<style scoped>
	.nav-wrap {
		width: 100%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.nav-wrap > .nav-context {
		width: 100%;
		position: fixed;
		left: 0;
	}

	.nav-wrap > .nav-context > .back {
		position: absolute;
		top: 0;
		left: 0;
		width: 10%;
		padding-left: 10rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		z-index: 9;
	}
	
	.nav-wrap > .nav-context > .back > .icon {
		vertical-align: middle;
		margin: 0 4rpx;
		font-size: 40rpx;
		cursor: pointer;
	}
	.nav-wrap > .nav-context > .title {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		text-align: center;
		font-weight: 500;
		font-size: 34rpx;
		z-index: 1;
	}
</style>
