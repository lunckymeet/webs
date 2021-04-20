<template>
	<view class="subscribe-wrap">
		<navtop topTitle="预约"></navtop>
		<view class="subscribe-context">
			<view class="">
				<van-field
				    value="value"
					label="预约医院"
				    placeholder="请输入用户名"
				    :border="false"
				    bind:change="onChange"
				  />
				  <van-dialog
				    use-slot
				    title="标题"
				    show="show"
				    show-cancel-button
				    confirm-button-open-type="getUserInfo"
				    bind:close="onClose"
				    bind:getuserinfo="getUserInfo"
				  >
				    <van-picker :columns="picker" bind:change="onChange" />
				  </van-dialog>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				picker: ['喵喵喵', '汪汪汪', '哼唧哼唧']
			}
		}, 
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
			}
		}
	}
</script>

<style scoped>
	.subscribe-wrap {
		width: 100%;
		height: 100vh;
	}
	
	.subscribe-wrap > .subscribe-context {
		width: 94%;
		height: auto;
		min-height: 80%;
		background-color: #007AFF;
		margin: 0 auto;
	}
</style>
