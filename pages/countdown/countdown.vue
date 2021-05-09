<template>
	<view>
		<navtop topTitle="观察倒计时"></navtop>
		<view class="countdown-end">
			<view class="title">距离结束异常观察还剩：</view>
			<van-count-down :time="time" format="mm 分 ss 秒" class="countdown-style"/>
		</view>
		<view class="abnormal" @click="skip($event)" data-path="/pages/abnormal/abnormal">
			<van-button round type="info">感觉不适，异常上报</van-button>
		</view>
		<view class="end" @click="skip($event)" data-path="/pages/vaccine/vaccine">
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
		}
	}
</script>

<style scoped>
	.countdown-end{
		
	}
</style>
