<template>
	<view class="Identification-view">
		<navtop topTitle="身份证识别"></navtop>
		<view class="Identification-file">
			<van-uploader :file-list="fileList" bind:after-read="afterRead"/>
		</view>
		<view class="Identification-messages">
			<view class="Identification-m">姓名：{{name}}</view>
			<view class="Identification-m">性别：{{gender}}</view>
			<view class="Identification-m">身份证号码：{{idcard}}</view>
		</view>
		<view class="Identification-button">
			<van-button round type="info">信息确认</van-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fileList: [],
				name:"lyt",
				gender:"女",
				idcard:"1234"
			}
		}, 
		methods: {
			afterRead(event) {
			    const { file } = event.detail;
			    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
			    wx.uploadFile({
			      url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
			      filePath: file.url,
			      name: 'file',
			      formData: { user: 'test' },
			      success(res) {
			        // 上传完成需要更新 fileList
			        const { fileList = [] } = this.data;
			        fileList.push({ ...file, url: res.data });
			        this.setData({ fileList });
			      },
			    });
			  },
		},
	}
</script>

<style scoped>
	.Identification-file{
		width: 100%;
		height: 400rpx;
		background-color: #F7F8FA;
		padding-top: 15%;
		padding-left: 39%;
	}
	
	.Identification-messages{
		width: 100%;
		height: 250rpx;
		margin-top: 50rpx;
		padding-left: 5%;
	}
	
	.Identification-m{
		width: 100%;
		height: 80rpx;
		font-size: 35rpx;
		font-style: italic;
	}
	
	.Identification-button{
		width: 100%;
		height: 250rpx;
		padding-top: 15%;
		padding-left: 35%;
	}
</style>
