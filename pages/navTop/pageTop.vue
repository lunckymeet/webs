<template>
	<view class="nav-wrap"
		:style="'height: ' + [navHeight + 120] + 'px; background: linear-gradient(to bottom, ' + [bg] + ', ' + [bg] + ', ' + [bg] + ', rgba(0, 0, 0, 0)'">
		<view :style="'width: 100%; height: ' + [statuHeight] + 'px'"></view>
		<view class="nav-context"
			:style="'height: ' + [navHeight - statuHeight] + 'px; line-height: ' + [navHeight - statuHeight] + 'px'">
			<view class="title">
				<text :style="'color: ' + [titleColor]">{{title}}</text>
			</view>

			<view class="position" v-if="isPosition">
				<view class="box" @click="position"
					:style="'height: ' + [(navHeight - statuHeight) * 0.8] + 'px; line-height:' + [(navHeight - statuHeight) * 0.8] + 'px; color:' + [positionColor]">
					<text class="cuIcon-locationfill"></text>
					<text>{{city}}</text>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import position from "../../utils/amap-wx.js";
	export default {
		data() {
			return {
				navHeight: 0, // 顶部导航栏高度
				statuHeight: 0, // 状态栏高度
				city: "", // 定位城市
			}
		},
		props: {
			bg: {
				// 背景颜色
				type: String,
				default: ""
			},
			title: {
				// 标题
				type: String,
				default: ""
			},
			titleColor: {
				// 标题字体颜色
				type: String,
				default: ""
			},
			isPosition: {
				// 是否显示定位
				type: Boolean,
				default: true
			},
			positionColor: {
				// 定位颜色
				type: String,
				default: "#fff"
			}

		},
		methods: {
			
			position: function (e) {
				uni.navigateTo({
					url: "/pages/position/position"
				})
			}

		},
		created: function(e) {
			const appData = getApp().globalData;
			const thisData = this.$data;

			thisData.navHeight = appData.navHeight; // 顶部导航栏高度
			thisData.statuHeight = appData.statuHeight; // 状态栏高度

			
			if(this.isPosition) {
				var myAmapFun = new position.AMapWX({
					key: appData.areaKey
				});
				myAmapFun.getPoiAround({
					success: function(data) {
						thisData.city = appData.city = data.poisData[0].cityname;
					},
					fail: function(info) {
						//失败回调
						console.log(info)
					}
				})
			}
		}
	}
</script>

<style scoped>
	.nav-wrap {
		width: 100%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
	}

	.nav-wrap>.nav-context {
		width: 100%;
		background-color: rgba(0, 0, 0, 0);
		text-align: center;
		position: relative;
	}

	.nav-wrap>.nav-context>.title {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0);
		text-align: center;
		font-weight: 500;
		font-size: 34rpx;
		z-index: 1;
	}

	.nav-wrap>.nav-context>.position {
		width: 20%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 3;
		font-size: 29rpx;
		background-color: rgba(0, 0, 0, 0);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.nav-wrap>.nav-context>.position>.box {
		width: 80%;
	}
</style>
