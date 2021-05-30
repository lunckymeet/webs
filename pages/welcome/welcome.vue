<template>
	<view>
		<view class="logo">
			<van-image round width="5rem" height="5rem" fit="cover" src="/static/images/vaccine/logo.png" />
		</view>
		<view class="welcome">欢迎来到疫起打苗苗</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
			
		},
		created:function(){
			const app = getApp();
			setTimeout(res => {
					uni.redirectTo({
						url: "../index/index?url=",
						success:function(e){
							console.log(e);
						}
					})
				
			}, 4000);
		}
	}
</script>

<style>
	.welcome{
		width: 100%;
		height: 100rpx;
		text-align: center;
		margin-top: 200rpx;
		font-size: 40rpx;
	}
	
	.logo{
		width: 100%;
		margin-top: 40%;
		height: 10%;
		padding-left: 39%;
	}
	
</style>
