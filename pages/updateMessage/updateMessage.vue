<template>
	<view class="updateMessage-wrap">
		<navtop topTitle="修改个人资料"></navtop>
		<view class="updateMessage-context">
					<van-cell-group>
					  <van-field
						label="姓名"
					    value="{{name}}"
					    border="{{ false }}"
						disabled
					    bind:change="onChange"
						input-align="left"
					  />
					</van-cell-group>
					<van-cell-group>
					  <van-field
						label="家庭住址"
					    value="{{address}}"
					    placeholder="请输入家庭住址"
					    border="{{ false }}"
					    bind:change="onChange"
						input-align="left"
					  />
					</van-cell-group>
					<van-cell-group>
					  <van-field
					    label="电话号"
					    value="{{phone}}"
					    placeholder="请输入电话号"
					    border="{{ false }}"
					    bind:change="onChange"
						input-align="left"
					  />
					</van-cell-group>
					<van-cell-group>
					  <van-field
					    value="{{ sms }}"
					    center
					    clearable
					    label="短信验证码"
					    placeholder="请输入短信验证码"
					    border="{{ false }}"
					    use-button-slot
					  >
					    <van-button slot="button" size="small" type="primary">
					      发送验证码
					    </van-button>
					  </van-field>
					</van-cell-group>
					<van-cell-group>
					  <van-field
					    value="注：姓名、性别、年龄等请通过身份证识别修改"
					    border="{{ false }}"
					    bind:change="onChange"
						disabled
					  />
					</van-cell-group>
				</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:"lyt",
				address:"111",
				phone:"1111"
			}
		}, 
		methods: {
		},
	}
</script>

<style scoped>
	
</style>
