<template>
	<view class="order-view">
		<navtop topTitle="历史订单"></navtop>
		<view class="order-detail">
			<van-tabs swipeable>
			  <van-tab title="疫苗">
				  <view class="order-vaccine" v-for="i in vaccines">
					  <view class="order-vaccine-time">{{i.orderDateP}}</view>
					  <view class="order-vaccine-name">{{i.vaccine.vaccineName}}</view>
					  <view class="order-vaccine-place">{{i.orderHospitalP}}</view>
				  </view>
			  </van-tab>
			  
			  <van-tab title="核酸检测">
				  <view class="order-vaccine" v-for="i in nucleics">
					  <view class="order-vaccine-time">{{i.orderDateP}}</view>
					  <view class="order-vaccine-place">{{i.orderHospitalP}}</view>
					  <view class="order-vaccine-end">{{scend}}</view>
				  </view>
			  </van-tab>
			</van-tabs>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				vaname:"xxx疫苗",
				vatime:"2021年5月2日",
				vaplace:"xxx医院",
				sctime:"2021年5月2日",
				scplace:"xxx医院",
				scend:"阴性",
				vaccines:null,
				nucleics:null
			}
		},
		onLoad: function () {
			let user = this.$data.userInfo;
				const app = getApp();
				console.log(app)
				uni.request({
							url: "https://health.ymhdev.xyz:9999/personO/select",
							method: "GET",
							header: {
								"content-type": "application/x-www-form-urlencoded"
							},
							data: {
								user: app.globalData.openid,
								kind: "0"
							},
							success: (e) => {
								console.log(e)
								console.log(e.data.msg)
								this.$data.vaccines = e.data.msg;
							}
				});
				uni.request({
							url: "https://health.ymhdev.xyz:9999/personO/select",
							method: "GET",
							header: {
								"content-type": "application/x-www-form-urlencoded"
							},
							data: {
								user: app.globalData.openid,
								kind: "1"
							},
							success: (e) => {
								console.log(e)
								console.log(e.data)
								this.$data.nucleics = e.data.msg;
							}
				})
			},
		methods: {
			getOrder: function() {
				let user = this.$data.userInfo;
				const app = getApp();
				console.log(app)
				uni.getUserProfile({
					desc: "获取用户信息",
					success: function(e) {
						user = e.userInfo;
						app.globalData.userInfo = e.userInfo;
						uni.request({
							url: "https://health.ymhdev.xyz:9999/user/add",
							method: "POST",
							header: {
								"content-type": "application/x-www-form-urlencoded"
							},
							data: {
								userOpenId: app.globalData.openid,
								userAvatar: user.avatarUrl,
								userNickName: user.nickName,
								userSex: user.gender
							},
							success: (e) => {
								console.log(e)
							}
						})
					}
				})
			},
		}
	}
</script>

<style scoped>
	.order-vaccine{
		width: 100%;
		height: 150rpx;
		background-color: #FFFFFF;
		border-top: #F0F0F0 solid 1rpx;
		padding-left: 30rpx;
		display: flex;
		padding-right: 30rpx;
	}
	
	.order-vaccine-time{
		font-size: 40rpx;
		font-style: inherit;
	}
	
	.order-vaccine-place{
		font-size: 40rpx;
		font-style: initial;
		margin-left: 20rpx;
	}
	
	.order-vaccine-name{
		font-size: 40rpx;
		font-style: initial;
		margin-left: 20rpx;
	}
	
	.order-vaccine-end{
		font-size: 40rpx;
		font-style: initial;
		font-weight: 700;
		margin-left: 20rpx;
	}
	
</style>
