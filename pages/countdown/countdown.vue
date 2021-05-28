<template>
	<view>
		<navtop topTitle="观察倒计时"></navtop>
		<view class="countdown-end">
			<view class="countdown-title">距离结束异常观察还剩</view>
			<view class="countdown-num">
				<van-count-down
				  class="control-count-down"
				  seconds
				  :time="time"
				  :auto-start="false"
				  format= "mm:ss"
				  :finish="finished"
				/>
			</view>
			<view class="countdown-button">
				<van-grid clickable column-num="1">
				  <van-grid-item text="开始" icon="play-circle-o" @click="start" />
				</van-grid>
			</view>
		</view>
		<view class="abnormal" @click="skip($event)" data-path="/pages/abnormal/abnormal">
			<van-button round type="info">感觉不适，异常上报</van-button>
		</view>
		<view class="end" @click="skip($event)" data-path="/pages/index/index">
			<van-button round type="info">结束观察，未出现异常</van-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				time: 30 * 60 * 1000,
			};
		},
		methods: {
			skip: function (e) {
				uni.navigateTo({
					url:e.currentTarget.dataset.path
				})
			},
			start:function() {
			    const countDown = this.selectComponent('.control-count-down');
			    countDown.start();
				console.log("1");
			},
			pause:function() {
			      const countDown = this.selectComponent('.control-count-down');
			      countDown.pause();
				  console.log("2");
			},
			reset:function() {
				    const countDown = this.selectComponent('.control-count-down');
				    countDown.reset();
					console.log("3");
			},
			finished:function() {
				    Toast('倒计时结束');
			},
		}
	}
</script>

<style scoped>
	.countdown-title{
		width: 100%;
		height: 50rpx;
		text-align: center;
		font-size: 45rpx;
		font-weight: 600;
		margin-top: 10%;
		margin-bottom: 8%;
	}
	
	.countdown-num{
		font-size: 40rpx;
		font-weight: 300;
		text-align: center;
		margin-bottom: 5%;
	}
	
	.abnormal{
		margin-top: 5%;
		width: 100%;
		height: 100rpx;
		margin-left: 26%;
	}
	
	.end{
		margin-top: 5%;
		width: 100%;
		height: 100rpx;
		margin-left: 24%;
	}
</style>
