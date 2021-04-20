<template>
	<view class="position-wrap" :style="'height:' + [screenHeight] + 'px'">
		<navtop class="position" topTitle="详细位置" titleColor="#3c3f48" iconColor="#3c3f48"></navtop>
		<view class="position-map" :style="'height:' + [screenHeight - navHeight] + 'px'">
			<map class="map" :latitude="latitude" :longitude="longitude"  :show-location="true"></map>
			<view class="position-des">
				{{positionDetail}}
			</view>
		</view>
	</view>
</template>

<script>
	import position from "../../utils/amap-wx.js";
	var markersData = [];
	export default {
		data() {
			return {
				screenHeight: 0, // 屏幕高度，这里是整个容器高度
				navHeight: 0, // 导航栏高度
				markers:　[], // 标记点	
				latitude: 0, // 中心纬度
				longitude: 0, // 中心经度
				positionDetail: "", // 详细地址
			}
		},
		methods: {
			
		},
		created: function(e) {
			const appData = getApp().globalData; // 获取全局变量
			const thisData = this.$data; // 获取当前页面变量
			
			thisData.screenHeight = appData.screenHeight; // 获取屏幕高度
			thisData.navHeight = appData.navHeight; // 获取导航栏高度
			
			const areaKey = appData.areaKey; // 获取高德定位KEY

			// 获取定位
			const area = new position.AMapWX({key: areaKey});
			
			area.getPoiAround({
				success: (e) => {
					thisData.markers = e.markers;
					console.log(e)
					thisData.latitude = e.markers[0].latitude;
					thisData.longitude = e.markers[0].longitude;
					
					const detail = e.poisData[0];
					thisData.positionDetail = detail.pname + " " + detail.cityname + " " + detail.adname + " " + detail.address + " " + detail.name;
					
					console.log(thisData.positionDetail);
				},
				fail: (e) => {
					console.log(e);
				}
			})
		}
	}
</script>

<style scoped>
	.position-wrap {
		width: 100%;
		position: relative;
		overflow: hidden;
		box-sizing: border-box;
	}
	
	.position-wrap > .position-map {
		width: 100%;
		position: relative;
	}
	
	.position-wrap > .position-map > .map {
		width: 100%;
		height: 90%;
	}
	
	.position-wrap > .position-map > .position-des {
		width: 100%;
		height: 10%;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 5%;
		color: #3c3f48;
		background-color: #fff;
	}
</style>
