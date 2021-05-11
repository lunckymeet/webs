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
					    bind:change="onChange"
						input-align="left"
					  />
					</van-cell-group>
					<van-cell-group>
					  <van-field
						label="性别"
					    :value="gender"
					    :border="false"
						disabled
					    bind:change="onChange"
						input-align="left"
					  />
					</van-cell-group>
					<van-cell-group>
					  <van-field
						label="身份证号"
					    :value="idcard"
					    :border="false"
						disabled
					    bind:change="onChange"
						input-align="left"
					  />
					</van-cell-group>
					<van-cell-group>
					  <van-field
						label="家庭住址"
					    :value="address"
					    placeholder="请输入家庭住址"
					    :border="false"
					    bind:change="onChange"
						input-align="left"
					  />
					</van-cell-group>
					<van-cell-group>
					  <van-field
					    label="电话号"
					    :value="phone"
					    placeholder="请输入电话号"
					    :border="false"
					    bind:change="onChange"
						input-align="left"
					  />
					</van-cell-group>
					<van-cell-group>
					  <van-field
					    :value="sms"
					    center
					    clearable
					    label="短信验证码"
					    placeholder="请输入短信验证码"
					    :border="false"
					    use-button-slot
					  >
					    <van-button slot="button" size="small" type="primary">
					      发送验证码
					    </van-button>
					  </van-field>
					</van-cell-group>
					<van-cell-group>
					  <van-field
					    value="注：姓名、性别等请通过身份证识别修改"
					    :border="false"
					    bind:change="onChange"
						disabled
					  />
					</van-cell-group>
					<van-button type="primary" class="update-button">确认修改</van-button>
				</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:"lyt",
				address:"111",
				phone:"18714441414",
				idcard:"141414141414141414",
				gender:"女"
			}
		}, 
		onLoad: function () {
			this.$data.phone = this.$data.phone.replace(/(\d{3})\d*(\d{4})/,'$1****$2');
			this.$data.idcard = this.$data.idcard.replace(/(\w{10})\w*(\w{2})/, '$1******$2')
		},
		methods: {
		},
		created:function(){
			const app = getApp();
			this.$data.name = app.globalData.userInfo.userName == null ? "" : app.globalData.userInfo.userName;
			this.$data.address = app.globalData.userInfo.userAddress == null ? "" : app.globalData.userInfo.userAddress;
			this.$data.phone = app.globalData.userInfo.userPhone == null ? "" : app.globalData.userInfo.userPhone;
			this.$data.idcard = app.globalData.userInfo.userIdCard == null ? "" : app.globalData.userInfo.userIdCard;
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
	
</style>
