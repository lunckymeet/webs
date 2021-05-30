<template>
	<view>
		<pagetop bg="#ffd943" title="个人中心" titleColor="#fff" :isPosition="false"></pagetop>
		<view class="person-img">
			<view class="person-top">
				<view v-show="userInfo == null">
					<button @click="getUserInfo" class="person-login">登录</button>
				</view>
				<view class="person-img-left" v-show="userInfo != null">
					<van-image round width="5rem" height="5rem" fit="cover" :src="userInfo.userAvatar == null ? userInfo.avatarUrl : ''" />
				</view>
				<view class="person-img-right" v-show="userInfo != null">
					<view class="updateMessage" @click="skip($event)" data-path="/pages/updateMessage/updateMessage">
						修改信息</view>
				</view>

				
			</view>
			<view class="person-botton">
				<van-cell is-link title="身份证识别" link-type="navigateTo" url="/pages/Identification/Identification" />
				<van-cell is-link title="历史接种疫苗" link-type="navigateTo" url="/pages/order/order" />

				<van-cell is-link title="异常记录" link-type="navigateTo" url="/pages/about/about" />

				<van-cell is-link title="倒计时" link-type="navigateTo" url="/pages/countdown/countdown" />

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
				name: "lyt",
				idcard: "141414141414141414",
				userInfo: null
			}
		},

		methods: {
			skip: function(e) {
				uni.navigateTo({
					url: e.currentTarget.dataset.path
				})
			},
			getUserInfo: function() {
				let user = this.$data.userInfo;
				const app = getApp();
				// setInterval(res => {
				// 	console.log(user != null);
				// }, 3000);
				uni.getUserProfile({
					desc: "获取用户信息",
					success: function(e) {
						user = e.userInfo;
						
						app.globalData.userInfo = e.userInfo;
						console.log(user);
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
								userSex: user.gender == 0 ? "1": user.gender
							},
							success: (e) => {
								console.log(e);
								
								
							}
						});
						
						uni.navigateTo({
							url: "../index/index?url=",
							success:function(e){
								console.log(e);
							}
						})
					}
				})
			},
			addUser: function() {
				const user = this.$data.userInfo;
			}
		},
		created:function(){
			const app = getApp();
			this.$data.userInfo = app.globalData.userInfo;
			console.log(app);
		}

	}
</script>

<style scoped>
	.person-img {
		position: absolute;
		top: 130rpx;
		left: 3%;
		width: 94%;
	}

	.person-img>.person-top,
	.person-img>.person-botton {
		width: 100%;
		margin: 5% auto;
		background-color: #fff;
		border-radius: 20rpx;
		box-sizing: border-box;
		overflow: hidden;
		padding: 2% 2% 0 2%;
		box-shadow: 0 0 20rpx #ddd;
	}

	.person-img-left {
		width: 100%;
		height: 80%;
		padding-top: 5%;
		padding-left: 39%;
		/* float: left; */
	}

	.person-img-right {
		width: 100%;
		height: 20%;
		padding: 5% 5% 5% 5%;
		float: right;
		text-align: center;
		font-size: 30rpx;
		/* padding-top: 20%;
		padding-left: 20%; */
		color: #a9a9a9;
	}

	.feedback {
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
		font-size: 30rpx;
		color: #323233;
	}

	.button::after {
		border: none;
		border-radius: 0;
	}
</style>
