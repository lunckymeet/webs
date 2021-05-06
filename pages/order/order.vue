<template>
	<view class="order-view">
		<navtop topTitle="历史订单"></navtop>
		<view class="order-detail">
			<van-tabs swipeable>
			  <van-tab title="疫苗">
				  <view class="order-vaccine" v-for="i in 5">
					  <view class="order-vaccine-time">{{vatime}}</view>
					  <view class="order-vaccine-name">{{vaname}}</view>
					  <view class="order-vaccine-place">{{vaplace}}</view>
				  </view>
			  </van-tab>
			  
			  <van-tab title="核酸检测">
				  <view class="order-vaccine" v-for="i in 5">
					  <view class="order-vaccine-time">{{sctime}}</view>
					  <view class="order-vaccine-place">{{scplace}}</view>
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
				scend:"阴性"
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.order-vaccine{
		width: 100%;
		height: 200rpx;
		font-size: 40rpx;
	}
</style>
