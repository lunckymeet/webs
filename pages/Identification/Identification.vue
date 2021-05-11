<template>
	<view class="Identification-view">
		<navtop topTitle="身份证识别"></navtop>
		<view class="Identification-file">
			<van-uploader :file-list="fileList" accept="image" :capture="['camera']" :max-size="3096" :max-count="1" :sizeType="['compressed']" @after-read="getImage" :preview-image="true"/>
		</view>
		<view class="Identification-messages" v-if="idInfo != null">
			<view class="Identification-m">姓名：{{name}}</view>
			<view class="Identification-m">性别：{{gender}}</view>
			<view class="Identification-m">身份证号码：{{idcard}}</view>
		</view>
		<view class="Identification-button" v-if="idInfo != null">
			<van-button round type="info">信息确认</van-button>
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
				console.log(e.detail.file)
				console.log(getApp())
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
						console.log(res)
						that.updateUserInfo(res.姓名.words, res.公民身份号码.words, res.住址.words, that.countAge(res
							.出生.words));
					},
					fail: function(e) {
						console.log(e)
					}
				})
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
