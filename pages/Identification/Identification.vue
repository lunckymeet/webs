<template>
	<view class="Identification-view">
		<navtop topTitle="身份证识别"></navtop>
		<view class="Identification-file">
			<!-- <van-uploader :file-list="fileList" accept="image" :capture="['camera']" :max-size="3096" :max-count="1" :sizeType="['original']" @after-read="getImage" :preview-image="true"/> -->
			<van-uploader :file-list="fileList" :deletable="true" :capture="['camera']" accept="image" :sizeType="['original']" :preview-full-image="true" :max-count="1" preview-size="120rpx" :preview-image="true" @after-read="getImage" />
		</view>
		<view class="Identification-messages" v-if="idInfo != null">
			<view class="Identification-m">姓名：{{idInfo.name}}</view>
			<view class="Identification-m">性别：{{idInfo.sex}}</view>
			<view class="Identification-m">出生日期：{{idInfo.birthDate}}</view>
			<view class="Identification-m">身份证号码：{{idInfo.idNo}}</view>
			<view class="Identification-m">户籍所在地：{{idInfo.location}}</view>
		</view>
		<view class="Identification-button" v-if="idInfo != null">
			<van-button round type="info" @click="updateUserInfo">信息确认</van-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fileList: [],
				idInfo: null
			}
		},
		methods: {
			getImage: function(e) {
				const that = this;
				this.$data.fileList.push(e.detail.file);
				uni.uploadFile({
					url: "https://health.ymhdev.xyz:9999/user/file",
					header: {
						"Content-Type": "multipart/form-data"
					},
					filePath: e.detail.file.url,
					name: "idCard",
					formData: {
						openid: getApp().globalData.openid,
						front: "1"
					},
					success: function(e) {
						console.log(e.data)
						const res = JSON.parse(e.data).words_result;
						that.$data.idInfo = {
							name: res.姓名.words,
							sex: res.性别.words,
							idNo: res.公民身份号码.words,
							location: res.住址.words,
							birthDate: res.出生.words
							};
						console.log(that.$data.idInfo);
					},
					fail: function(e) {
						console.log(e)
					}
				})
			},
			countAge: function(ageStr) {
				ageStr = ageStr.substring(0, 4) + "/" + ageStr.substring(4, 6) + "/" + ageStr.substring(6, 8);
				console.log(ageStr)
				const dateBirth = new Date(ageStr).getTime();
				const dateNow = new Date().getTime();
				let age = (dateNow - dateBirth) / 1000 / (60 * 60 * 24 * 365);
				return Math.trunc(age);
			},
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
						userName: that.$data.idInfo.name,
						userIdCard: that.$data.idInfo.idNo,
						userCensus: that.$data.idInfo.location,
						userAge: that.countAge(that.$data.idInfo.birthDate),
						userSex: that.$data.idInfo.sex == "男" ? 1 : 2
					},
					success:function(e){
						console.log(e);
					},
					fail:function(e){
						console.log(e);
					}
				});
			}
		},
	}
</script>

<style scoped>
	.Identification-file {
		width: 100%;
		height: 400rpx;
		background-color: #F7F8FA;
		padding-top: 15%;
		padding-left: 39%;
	}

	.Identification-messages {
		width: 100%;
		height: 250rpx;
		margin-top: 50rpx;
		padding-left: 5%;
	}

	.Identification-m {
		width: 100%;
		height: 80rpx;
		font-size: 35rpx;
		font-style: italic;
	}

	.Identification-button {
		width: 100%;
		height: 250rpx;
		padding-top: 15%;
		padding-left: 35%;
	}
</style>
