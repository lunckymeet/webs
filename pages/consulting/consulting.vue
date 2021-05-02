<template>
	<view>
		<navtop topTitle="咨询"></navtop>
		<view class="cu-chat">
			<view class="cu-info">
				欢迎咨询
			</view>
			<view class="cu-item self">
				<view class="main">
					<view class="content bg-green shadow">
						<text>喵喵喵！喵喵喵！喵喵喵！喵喵！喵喵！！喵！喵喵喵！</text>
					</view>
				</view>
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></view>
				<view class="date">{{time}}</view>
			</view>
			<view class="cu-item">
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"></view>
				<view class="main">
					<view class="content shadow">
						<text>喵喵喵！喵喵喵！</text>
					</view>
				</view>
				<view class="date ">{{time}}</view>
			</view>
			
			<view class="cu-info round">咨询结束，请对本次咨询进行<text class="text-blue">评分</text></view>
			
		</view>

		<view class="cu-bar foot input" :style="[{bottom:InputBottom+'px'}]">
			<view class="action">
				<text class="cuIcon-sound text-grey"></text>
			</view>
			<input class="solid-bottom" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10"
			 @focus="InputFocus" @blur="InputBlur"></input>
			<view class="action">
				<text class="cuIcon-emojifill text-grey"></text>
			</view>
			<button class="cu-btn bg-green shadow">发送</button>
		</view>

	</view>
</template>

<script>
	import utils from "../../utils/utils.js";
	export default {
		data() {
			return {
				InputBottom: 0,
				time:"1"
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
			}
			
		}
	}
</script>

<style>
page{
  padding-bottom: 100upx;
}
</style>
