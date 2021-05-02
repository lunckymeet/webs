<template>
	<view>
		<pagetop bg="#ffd943" title="个人中心" titleColor="#fff" :isPosition="false"></pagetop>
		<view class="person-img">
			<view class="person-top">
				<view class="person-img-left">
					<van-image
					  round
					  width="5rem"
					  height="5rem"
					  fit="cover"
					  src="https://img.yzcdn.cn/vant/cat.jpeg"
					/>
				</view>
				<view class="person-img-right">
					<view class="person-name">姓名：{{name}}</view>
					<view class="person-age">年龄：{{age}}岁</view>
					<view class="updateMessage" @click="skip($event)" data-path="/pages/updateMessage/updateMessage">修改个人资料</view>
				</view>
			</view>
			<view class="person-botton">
				<van-cell
				  is-link
				  title="身份证识别"
				  link-type="navigateTo"
				  url="/pages/Identification/Identification"
				/>
				<van-cell
				  is-link
				  title="历史订单"
				  link-type="navigateTo"
				  url="/pages/order/order"
				/>
				<!-- <van-cell
				  is-link
				  title="反馈"
				  link-type="navigateTo"
				  url="/pages/dashboard/index"
				/> -->
				
				<van-cell
				  is-link
				  title="关于"
				  link-type="navigateTo"
				  url="/pages/dashboard/index"
				/>
				
				<view class="feedback">
					<button class='button' open-type="feedback">
					 反馈与建议
					</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:"lyt",
				age:1
			}
		},
		methods: {
			skip: function (e) {
				uni.navigateTo({
					url:e.currentTarget.dataset.path
				})
			}
		}
	}
</script>

<style>
	.person-img{
		position: absolute;
		top: 130rpx;
		left: 3%;
		width: 94%;
	}
	
	.person-img > .person-top ,
	.person-img > .person-botton{
		width: 94%;
		margin: 5% auto;
		background-color: #fff;
		border-radius: 20rpx;
		box-sizing: border-box;
		overflow: hidden;
		padding: 2% 2% 0 2%;
		box-shadow: 0 0 20rpx #ddd;
	}
	
	.person-img-left{
		width: 35%;
		height: 100%;
		padding: 5%;
		float: left;
	}
	
	.person-img-right {
		width: 65%;
		height: 100%;
		padding: 5%;
		float: right;
		/* text-align: center; */
		font-size: 35rpx;
		padding-top: 10%;
		padding-left: 5%;
	}
	
	.feedback{
		width: 90%;
		height: 110rpx;
		/* border-bottom: 1rpx solid #F3F4F6; */
		padding-left: 3%;
		padding-top: 2%;
	}
	
	.button {
	 width: 100%;
	 background: white;
	 border: none;
	 text-align: left;
	 padding: 7px 10px;
	 margin: 0px;
	 line-height: 1.6;
	 border-radius: 0;
	 font-size: 32rpx;
	 color: #323233;
	}
	 
	.button::after {
	 border: none;
	 border-radius: 0;
	}

</style>
