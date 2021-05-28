<template>
	<view class="updateMessage-wrap">
		<navtop topTitle="修改个人资料"></navtop>
		<view class="updateMessage-context">
					<van-cell-group>
					  <van-field
						label="姓名"
					    :value="name"
					    :border="false"
						disabled
						input-align="left"
					  />
					</van-cell-group>
					<van-cell-group>
					  <van-field
						label="性别"
					    :value="gender"
					    :border="false"
						disabled
						input-align="left"
					  />
					</van-cell-group>
					<van-cell-group>
					  <van-field
						label="身份证号"
					    :value="idcard"
					    :border="false"
						disabled
						input-align="left"
					  />
					</van-cell-group>
					<van-cell-group>
					  <van-field
						label="户籍所在地"
					    :value="census"
					    :border="false"
						disabled
						input-align="left"
					  />
					</van-cell-group>
					<van-cell-group>
					  <van-field
						label="家庭住址"
					    :value="address"
					    placeholder="请输入家庭住址"
					    :border="false"
					    @change="getAddress"
						input-align="left"
					  />
					</van-cell-group>
					<van-cell-group>
					  <van-field
					    label="电话号"
					    :value="phone"
					    placeholder="请输入电话号"
					    :border="false"
					    @change="getPhone"
						input-align="left"
					  />
					</van-cell-group>
					<van-cell-group>
					  <van-field
					    center
					    clearable
					    label="短信验证码"
					    placeholder="请输入短信验证码"
					    :border="false"
					    use-button-slot
						@change="getCode"
					  >
					    <van-button slot="button" size="small" type="primary" @click="getSamll">
					      发送验证码
					    </van-button>
					  </van-field>
					</van-cell-group>
					<view class="codeMessage" v-if="code2 != null">{{code2}}</view>
					<van-cell-group>
					  <van-field
					    value="注：姓名、性别等请通过身份证识别修改"
					    :border="false"
					    @change="onChange"
						disabled
					  />
					</van-cell-group>
					<van-button type="primary" class="update-button" @click="updateUserInfo">确认修改</van-button>
					<view class="updateMes">{{message}}</view>
				</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:"lyt",
				census: "",
				address:"111",
				phone:"18714441414",
				idcard:"141414141414141414",
				gender:"女",
				message:"",
				code1:"",
				code2:""
			}
		}, 
		onLoad: function () {
			this.$data.phone = this.$data.phone.replace(/(\d{3})\d*(\d{4})/,'$1****$2');
			this.$data.idcard = this.$data.idcard.replace(/(\w{10})\w*(\w{2})/, '$1******$2')
		},
		methods: {
			updateUserInfo: function () {
				const that = this;
				const app = getApp().globalData;
				uni.request({
					url: "https://health.ymhdev.xyz:9999/user/update",
					header: {
						"content-type": "application/x-www-form-urlencoded"
					},
					method: "POST",
					data: {
						userOpenId: app.openid,
						userPhone: that.$data.phone,
						userAddress: that.$data.address
					},
					success:function(e){
						console.log(e);
						
						that.$data.message = "修改成功！"
						app.userInfo.userPhone = that.$data.phone;
						app.userInfo.userAddress = that.$data.address;
					},
					fail:function(e){
						console.log(e);
						that.$data.message = "修改失败！"
					}
				});
			},
			getSamll: function () {
				const that = this;
				const app = getApp().globalData;
				uni.request({
					url: "https://health.ymhdev.xyz:9999/public/verify",
					header: {
						"content-type": "application/x-www-form-urlencoded"
					},
					method: "POST",
					data: {
						phone: that.$data.phone
					},
					success:function(e){
						console.log(e);
						console.log(e.data.code);
						that.$data.code1 = e.data.code;
					},
					fail:function(e){
						console.log(e);
					}
				});
			},
			getAddress: function(e) {
				this.$data.address = e.detail;
				console.log(this.$data.address)
			},
			getPhone: function(e) {
				this.$data.phone = e.detail;
				console.log(this.$data.phone)
			},
			getCode: function(e) {
				if(this.$data.code1 == e.detail){
					this.$data.code2 = "验证码正确";
				}
			}
		},
		created:function(){
			const app = getApp();
			this.$data.name = app.globalData.userInfo.userName == null ? "" : app.globalData.userInfo.userName;
			this.$data.address = app.globalData.userInfo.userAddress == null ? "" : app.globalData.userInfo.userAddress;
			this.$data.phone = app.globalData.userInfo.userPhone == null ? "" : app.globalData.userInfo.userPhone;
			this.$data.idcard = app.globalData.userInfo.userIdCard == null ? "" : app.globalData.userInfo.userIdCard;
			this.$data.census = app.globalData.userInfo.userCensus == null ? "" : app.globalData.userInfo.userCensus;
			const sex = app.globalData.userInfo.userSex == null ? "" : app.globalData.userInfo.userSex;
			if(sex != null && sex != "") {
				this.$data.gender = sex == "1" ? "男" : "女";
			}
		}
	}
</script>

<style scoped>
	.update-button{
		margin-left: 38%;
		position: absolute;
		bottom: 200rpx;
	}
	
	.codeMessage{
		background-color: #FFFFFF;
		font-size: 30rpx;
		text-align: center;
		color: #07C160;
	}
	
</style>
