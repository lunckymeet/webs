<template>
	<view class="order-view">
		<navtop topTitle="异常信息"></navtop>
		<view class="order-detail">

				  <view class="order-vaccine" v-for="i in nucleics">
					  <view class="order-vaccine-time">{{i.orderDateP}}</view>
					  <view class="order-vaccine-place">{{i.orderHospitalP}}</view>
					  <view class="order-vaccine-end">{{scend}}</view>
				  </view>
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
							url: "https://health.ymhdev.xyz:9999/abnormal/select",
							method: "GET",
							header: {
								"content-type": "application/x-www-form-urlencoded"
							},
							data: {
								userId: app.globalData.openid,
								kind: "0"
							},
							success: (e) => {
								console.log(e)
								console.log(e.data.msg)
								this.$data.vaccines = e.data.msg;
							}
				});
			},
		methods: {
			
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
