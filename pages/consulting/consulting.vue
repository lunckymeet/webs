<template>
	<view>
		<navtop topTitle="咨询"></navtop>
		<view class="cu-chat">
			<!-- <view class="cu-info">
				欢迎咨询
			</view> -->
			<view class="cu-item self">
				<view class="main">
					<view class="content bg-green shadow messages-text">
						<text>欢迎咨询</text>
					</view>
				</view>
				<view class="cu-avatar radius" style="background-image:url(/static/images/vaccine/logo.png);"></view>
				<view class="date"><!-- {{time}} --></view>
			</view>
			<view class="cu-item">
				<view class="cu-avatar radius" style="background-image:url(../../static/images/tabbar/syringe.png);"></view>
				<view class="main">
					<view class="content shadow">
						<text>昨晚吃了消炎药可以接种疫苗么</text>
					</view>
				</view>
				<!-- <view class="date ">{{time}}</view> -->
			</view>
			{{message}}
			<view class="cu-info round">咨询结束，请对本次咨询进行<text class="text-blue">评分</text></view>
			
		</view>

		<view class="cu-bar foot input" :style="[{bottom:InputBottom+'px'}]">
			<view class="action">
				<text class="cuIcon-sound text-grey"></text>
			</view>
			<input class="solid-bottom" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10"
			 @focus="InputFocus" @blur="InputBlur" id="input" v-model="input"></input>
			<view class="action">
				<text class="cuIcon-emojifill text-grey"></text>
			</view>
			<button class="cu-btn bg-green shadow" @click="send()">发送</button>
		</view>

	</view>
</template>

<script>
	import utils from "../../utils/utils.js";
	export default {
		data() {
			return {
				message: [],
				InputBottom: 0,
				time:"1",
				input:""
			};
		},
		onLoad: function () {
			this.$data.time = utils.formatTime(new Date());
		  },
		methods: {
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			},
			send : function () {
				var x =  this.input;
				this.$data.message.push(x);
				console.log(x);
			},
		}
	}
</script>

<style>
/* page{
  padding-bottom: 100upx;
} */
</style>