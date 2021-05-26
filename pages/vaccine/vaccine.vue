<template>
	<scroll-view :scroll-y="true" class="wrap">
		<view class="vaccine-wrap">
			<pagetop bg="#ffd943" title="首页" titleColor="#fff"></pagetop>

			<view class="vaccine-context" :style="'top: ' +　[navHeight]　+ 'px'">
				<view class="vaccine-epidemic">
					<!-- <scroll-view scroll-x class="bg-white padding response cu-steps steps-bottom" :scroll-into-view="'scroll-' + scroll"
							 scroll-with-animation>
								<view class="cu-item padding-lr-xl" :class="index>scroll?'':'text-blue'" v-for="(item,index) in 10" :key="index" :id="'scroll-' + index">
									Level {{index + 1}} <text class="num" :data-index="index + 1"></text>
								</view>
							</scroll-view> -->
					<swiper class="epidemic" :indicator-dots="true" :autoplay="true" :interval="6000" :duration="1000">
						<swiper-item>
							<view class="title">
								<text>国内疫情</text>
								<view class="date">
									更新截至：{{data.mtime}}
								</view>
							</view>
							<view class="data-list">
								<view class="data">
									<view class="info">
										<view class="text data-title">
											累计确诊
										</view>
										<view class="text data-num">
											{{data.gntotal}}
										</view>
										<view class="text data-change">
											10
										</view>
									</view>
								</view>
								<view class="data">
									<view class="info">
										<view class="text data-title">
											累计治愈
										</view>
										<view class="text data-num">
											{{data.curetotal}}
										</view>
										<view class="text data-change">
											8
										</view>
									</view>
								</view>
								<view class="data">
									<view class="info">
										<view class="text data-title">
											累计死亡
										</view>
										<view class="text data-num">
											{{data.deathtotal}}
										</view>
										<view class="text data-change">
											1
										</view>
									</view>
								</view>
								<view class="data">
									<view class="info">
										<view class="text data-title">
											现有确诊
										</view>
										<view class="text data-num">
											{{data.econNum}}
										</view>
										<view class="text data-change">
											4
										</view>
									</view>
								</view>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="title">
								<text>国外疫情</text>
								<view class="date">
									更新截至：{{data.mtime}}
								</view>
							</view>
							<view class="data-list">
								<view class="data">
									<view class="info">
										<view class="text data-title">
											累计确诊
										</view>
										<view class="text data-num">
											{{data.gntotal+12}}
										</view>
										<view class="text data-change">
											<text class="cuIcon-add"></text>
											1568
										</view>
									</view>
								</view>
								<view class="data">
									<view class="info">
										<view class="text data-title">
											累计治愈
										</view>
										<view class="text data-num">
											{{data.curetotal+33}}
										</view>
										<view class="text data-change">
											6809
										</view>
									</view>
								</view>
								<view class="data">
									<view class="info">
										<view class="text data-title">
											累计死亡
										</view>
										<view class="text data-num">
											{{data.deathtotal+34}}
										</view>
										<view class="text data-change">
											5773
										</view>
									</view>
								</view>
								<view class="data">
									<view class="info">
										<view class="text data-title">
											现有确诊
										</view>
										<view class="text data-num">
											{{data.econNum+29}}
										</view>
										<view class="text data-change">
											3769
										</view>
									</view>
								</view>
							</view>
						</swiper-item>
					</swiper>
				</view>

				<view class="vaccine-operation">
					
					<view class="operation" >
						<view class="info" @click="skip($event)" data-path="/pages/subscribe/subscribe">
							<van-icon size="80rpx" name="/static/images/vaccine/appoint1.png"></van-icon>
							<view class="title" style="margin-top: 10rpx;">
								疫苗预约
							</view>
						</view>
					</view>
					
					<view class="operation" >
						<view class="info" @click="skip($event)" data-path="/pages/nappointment/nappointment">
							<van-icon size="80rpx" name="/static/images/vaccine/appoint2.png"></van-icon>
							<view class="title" style="margin-top: 10rpx;">
								核酸检测预约
							</view>
						</view>
					</view>
					
					<!-- 异常上报 -->
					<view class="operation">
						<view class="info" @click="skip($event)" data-path="/pages/abnormal/abnormal">
							<van-icon size="80rpx" name="/static/images/vaccine/abnormal1.png"></van-icon>
							<view class="title" style="margin-top: 10rpx;">
								异常上报
							</view>
						</view>
					</view>
					
					<view class="operation">
						<view class="info" @click="scanQrCode()">
							<van-icon size="80rpx" name="/static/images/vaccine/scan2.png"></van-icon>
							<view class="title" style="margin-top: 10rpx;">
								扫一扫
							</view>
						</view>
					</view>
					
				</view>

				<view class="vaccine-steps" v-for="i in dates">
					<scroll-view scroll-x class="bg-white steps response cu-steps steps-bottom" :scroll-into-view="'scroll-' + scroll"
						scroll-with-animation>
						<view class="vaccine-title">{{i.orderHospitalP}} {{i.vaccine.vaccineName}}</view>
						<view class="cu-item padding-lr-xl" :class="index>scroll?'':'text-blue'" v-for="(item,index) in 6" :key="index" :id="'scroll-' + index">
							<text :class="'cuIcon-homefill'"></text> 预约
						</view>
					</scroll-view>
				</view>
				<view class="vaccine-info">
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
		

	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				navHeight: 0, // 顶部导航栏高度
				topHeight: 580, // 顶部高度
				topContextHeight: 0, // 顶部内容高度
				data: null, // 疫情数据
				dates: [],
				// operation: [
				// 	{
				// 		icon: "/static/images/vaccine/appointment.png",
				// 		title: "预约",
				// 		path: "/pages/subscribe/subscribe",
				// 		thing: "skip()"
				// 	},
				// 	{
				// 		icon: "/static/images/vaccine/scan.png",
				// 		title: "扫一扫",
				// 		path: "/pages/message/message",
				// 		thing: "scanQrCode()"
				// 	}
				// ],
				scroll: 1,
				steps: [
					{
						icon: "",
						title: "预约中"
					},
					{
						icon: "",
						title: ""
					}
				],
			}
		},
		methods: {
			ScrollSteps: function() {
				this.scroll= this.scroll == (this.$data.steps.length - 1) ? 0 : this.scroll + 1				
			},
			skip: function (e) {
				uni.navigateTo({
					url:e.currentTarget.dataset.path
				})
			},
			scanQrCode: function (e) {
				uni.scanCode({
					onlyFromCamera: true,
					scanType: "qrCode",
					success: (e) => {
						console.log("成功获取到扫码数据", e)
					}
				})
			},
			message: function(e) {
				uni.requestSubscribeMessage({
					tmplIds: ['wocSnflEs_kfJUpp_e1pO29c1Csqpo0dmwWt_86WWUg'],
					success: e => {
						console.log("成功", e);
					},
					fail: e => {
						console.log("失败", e);
					}
				});
			}
			
		},
		created: function(e) {
			const app = getApp();
			const that = this;
			this.$data.navHeight = app.globalData.navHeight;
			this.$data.topContextHeight = (this.$data.topHeight / app.globalData.rpxRatio) - app.globalData.navHeight;
			
			
			// uni.request({
			// 	url: "https://interface.sina.cn/news/wap/fymap2020_data.d.json",
			// 	method: "GET",
			// 	timeout: 6000,
			// 	success: (e) => {
			// 		console.log("成功获取到疫情数据", e.data)
			// 		that.$data.data = e.data.data;
			// 	},
			// 	fail: (e) => {
			// 		console.log("获取到疫情数据失败", e)
			// 	}
			// })
			
			uni.request({
						url: "https://health.ymhdev.xyz:9999/personO/select",
						method: "GET",
						header: {
							"content-type": "application/x-www-form-urlencoded"
						},
						data: {
							user: app.globalData.openid,
							kind: "1"
						},
						success: (e) => {
							console.log(e)
							console.log(e.data)
							for(let i = 0;i < e.data.msg.length;i++){
								if(e.data.msg[i].orderStatusP < 6){
									console.log(e.data.msg[i]);
									this.$data.dates.push(e.data.msg[i]);
								}
							}
							
							console.log(this.$data.dates);
						}
			})
			
		}
	}
</script>

<style scoped>
	.wrap {
		height: 100vh;
	}
	.vaccine-wrap {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.vaccine-wrap>.vaccine-top {
		width: 100%;
		background: linear-gradient(to bottom, #ffd943, #ffd943, #ffd943, rgba(0, 0, 0, 0));
	}
	.vaccine-wrap > .vaccine-context {
		position: absolute;
		top: 180rpx;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 9;
	}
	
	/* 疫情，操作条，步骤条，资讯公共样式 */
	.vaccine-wrap > .vaccine-context > .vaccine-epidemic,
	.vaccine-wrap > .vaccine-context > .vaccine-operation,
	.vaccine-wrap > .vaccine-context > .vaccine-steps,
	.vaccine-wrap > .vaccine-context > .vaccine-info{
		width: 94%;
		margin: 5% auto;
		background-color: #fff;
		border-radius: 20rpx;
		box-sizing: border-box;
		overflow: hidden;
		padding: 2% 2% 0 2%;
		box-shadow: 0 0 20rpx #ddd;
	}
	
	
	/* 疫情样式 */
	.vaccine-wrap > .vaccine-context > .vaccine-epidemic {
		height: 500rpx;
		margin: 0 auto;
	}
	.vaccine-wrap > .vaccine-context > .vaccine-epidemic > .epidemic {
		width: 100%;
		height: 100%;
	}
	.vaccine-wrap > .vaccine-context > .vaccine-epidemic > .epidemic .title {
		width: 100%;
		height: 80rpx;
		line-height: 60rpx;
		text-align: center;
		font-size: 32rpx;
		font-weight: bold;
		color: #3c3f48;
		/* color: #fff; */
		background-color: rgba(0, 0, 0, 0);
	}
	.vaccine-wrap > .vaccine-context > .vaccine-epidemic > .epidemic .title > .date {
		width: 100%;
		height: auto;
		font-size: 24rpx;
		text-align: center;
		font-weight: normal;
	}
	.vaccine-wrap > .vaccine-context > .vaccine-epidemic > .epidemic .data-list {
		width: 100%;
		height: 390rpx;
		background-color: rgba(0, 0, 0, 0);
		display: flex;
		flex-flow: row wrap;
		padding: 5%;
		box-sizing: border-box;
	}
	.vaccine-wrap > .vaccine-context > .vaccine-epidemic > .epidemic .data-list .data {
		width: 50%;
		height: 45%;
		flex: 1 1 auto;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.vaccine-wrap > .vaccine-context > .vaccine-epidemic > .epidemic .data-list .data .data-title {
		font-weight: bolder;
	}
	.vaccine-wrap > .vaccine-context > .vaccine-epidemic > .epidemic .data-list .data .text {
		margin: 6rpx 0;
	}
	.vaccine-wrap > .vaccine-context > .vaccine-epidemic > .epidemic .data-list .data:nth-child(2n+1){
		border-right: 1px solid #ddd;
		margin-bottom: 5%;
	}
	.vaccine-wrap > .vaccine-context > .vaccine-epidemic > .epidemic .data-list .data:nth-child(1),
	.vaccine-wrap > .vaccine-context > .vaccine-epidemic > .epidemic .data-list .data:nth-child(2) {
		/* margin-bottom: 5%;
		border-bottom: 1px solid #ddd; */
	}
	.vaccine-wrap > .vaccine-context > .vaccine-epidemic > .epidemic .data-list .data:nth-child(1) .data-num,
	.vaccine-wrap > .vaccine-context > .vaccine-epidemic > .epidemic .data-list .data:nth-child(1) .data-change{
		color: #a31d13;
	}
	
	.vaccine-wrap > .vaccine-context > .vaccine-epidemic > .epidemic .data-list .data:nth-child(2) .data-num,
	.vaccine-wrap > .vaccine-context > .vaccine-epidemic > .epidemic .data-list .data:nth-child(2) .data-change{
		color: #34aa70;
	}
	.vaccine-wrap > .vaccine-context > .vaccine-epidemic > .epidemic .data-list .data:nth-child(3) .data-num,
	.vaccine-wrap > .vaccine-context > .vaccine-epidemic > .epidemic .data-list .data:nth-child(3) .data-change{
		color: #333;
	}
	.vaccine-wrap > .vaccine-context > .vaccine-epidemic > .epidemic .data-list .data:nth-child(4) .data-num,
	.vaccine-wrap > .vaccine-context > .vaccine-epidemic > .epidemic .data-list .data:nth-child(4) .data-change{
		color: #e44a3d;
	}
	
	
	
	
	
	/* 操作条 */
	.vaccine-wrap > .vaccine-context > .vaccine-operation {
		height: 200rpx;
		display: flex;
		flex-flow: row wrap;
	}
	
	.vaccine-wrap > .vaccine-context > .vaccine-operation > .operation {
		flex: 1 1 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	
	/* 步骤条 */
	.vaccine-wrap > .vaccine-context > .vaccine-steps {
		height: 170rpx;
		padding: 2% 0;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	.vaccine-wrap > .vaccine-context > .vaccine-steps > .steps {
		margin: auto;
	}
	/* 资讯 */
	.vaccine-wrap > .vaccine-context > .vaccine-info {
		height: auto;
		margin-bottom: 140rpx;
		padding: 4%;
	}
	
	.vaccine-wrap > .vaccine-context > .vaccine-info > .info {
		width: 100%;
		height: 140rpx;
		text-align: left;
		margin-bottom: 40rpx;
	}
	
	.vaccine-wrap > .vaccine-context > .vaccine-info > .info:last-child{
		margin-bottom: 0rpx;
	}
	
	.vaccine-wrap > .vaccine-context > .vaccine-info > .info > .title {
		width: 100%;
		height: 35%;
		font-size: 34rpx;
		color: #3C3F48;
		font-weight: 500;
	}
	
	.vaccine-wrap > .vaccine-context > .vaccine-info > .info > .desc {
		width: 100%;
		height: 40%;
		font-size: 26rpx;
		color: #777;
	}
	.vaccine-wrap > .vaccine-context > .vaccine-info > .info > .introduce {
		width: 100%;
		height: 10%;
		font-size: 24rpx;
		color: #aaa;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	
	.vaccine-wrap > .vaccine-context > .vaccine-info > .info > .introduce > .date {
		width: 25%;
		height: 100%;
		float: left;
	}
	
	.vaccine-wrap > .vaccine-context > .vaccine-info > .info > .introduce > .from {
		width: 50%;
		height: 100%;
		float: left;
	}
	
	.vaccine-wrap > .vaccine-context > .vaccine-info > .info > .introduce > .eye {
		width: 25%;
		height: 100%;
		float: right;
	}
	
	
</style>
