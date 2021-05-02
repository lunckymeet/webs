<template>
	<scroll-view :scroll-y="true" class="wrap">
		<view>
			<pagetop bg="#ffd943" title="资讯" titleColor="#fff" :isPosition="false"></pagetop>
			<view class="message-context" :style="'top: ' +　[navHeight]　+ 'px'">
				<view class="search_tab">
					<van-search
				  value=""
				  shape="round"
				  background="#ffd943"
				  placeholder="请输入搜索关键词"
					/>
				</view>
			
				<view class="fuc">
					<view class="message-classification" @click="skip($event)" data-path="/pages/classkind/classkind">
						<van-icon size="80rpx" name="/static/images/message/classkind.png"></van-icon>
						<view class="title" style="margin-top: 10rpx;">
							疫苗分类
						</view>
					</view>
					<view class="message-classification" @click="skip($event)" data-path="/pages/consulting/consulting">
						<van-icon size="80rpx" name="/static/images/message/consulting.png"></van-icon>
						<view class="title" style="margin-top: 10rpx;">
							咨询
						</view>
					</view>
				</view>
				<view class="message-information">
					<view class="message-info" v-for="i in 5">
					    <view class="info">
					    	<view class="title">
					    		哈哈哈哈
					    	</view>
					    	
					    	<view class="desc">
					    		哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
					    	</view>
					    	
					    	<view class="introduce">
					    		<view class="date">
					    			<text class="cuIcon-timefill"></text>
					    			2021-02-10
					    		</view>
					    		
					    		<view class="from">
					    			来源于中华新闻网
					    		</view>
					    		
					    		<view class="eye">
					    			<text class="cuIcon-attentionfavorfill"></text>1000
					    		</view>
					    	</view>
					    </view>
					</view>
				</view>
				
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				
				
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

<style scoped>
	.wrap{
		height: 100vh;
	}
	.message-context {
		width: 94%;
		height: 100%;
	}
	/* 公共样式 */
	.message-context > .fuc ,
	.message-context > .message-information{		
		margin: 5% auto 0 auto;
		background-color: #fff;
		border-radius: 20rpx;
		box-sizing: border-box;
		overflow: hidden;
		padding: 2% 2% 0 2%;
		box-shadow: 0 0 20rpx #ddd;
	}
	
	.message-context > .message-information{
		margin-top: 5%;
		margin-bottom: 140rpx;
	}
	
	
	.message-context{
		position: absolute;
		top: 130rpx;
		left: 3%;
		width: 94%;
	}
	
	/* 操作条 */
	.message-context > .fuc {
		height: 200rpx;
		display: flex;
		flex-flow: row wrap;
		margin-top: 3%;
	}
	
	.message-context > .fuc > .message-classification {
		flex: 1 1 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	
	/* 禁忌 */
	.message-info {
		height: auto;
		/* margin-bottom: 140rpx; */
		padding: 4%;
	}
	
	.message-info > .info {
		width: 100%;
		height: 140rpx;
		text-align: left;
		margin-bottom: 40rpx;
	}
	
	.message-info > .info:last-child{
		margin-bottom: 0rpx;
	}
	
	.message-info > .info > .title {
		width: 100%;
		height: 35%;
		font-size: 34rpx;
		color: #3C3F48;
		font-weight: 500;
	}
	
	.message-info > .info > .desc {
		width: 100%;
		height: 40%;
		font-size: 26rpx;
		color: #777;
	}
	.message-info > .info > .introduce {
		width: 100%;
		height: 10%;
		font-size: 24rpx;
		color: #aaa;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	
	.message-info > .info > .introduce > .date {
		width: 25%;
		height: 100%;
		float: left;
	}
	
	.message-info > .info > .introduce > .from {
		width: 50%;
		height: 100%;
		float: left;
	}
	
	.message-info > .info > .introduce > .eye {
		width: 25%;
		height: 100%;
		float: right;
	}
	

</style>
