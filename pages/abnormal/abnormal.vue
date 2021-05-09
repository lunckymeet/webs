<template>
	<view class="abnormal-wrap">
		<navtop topTitle="异常上报"></navtop>
		<view class="info">
			<van-field
			    :value="personDate"
				label="异常订单"
			    placeholder="请出现异常的订单"
				:readonly="true"
			    :border="false"
				@click-input="showDate"
				:change="onChange"
			  />
			  
			  
			  <van-dialog
			    use-slot
			    :show="dateShow"
			  	:showConfirmButton="false"
			  >
			  
				<van-action-sheet
				  :actions="actions"
				  cancel-text="取消"
				  title="选择出现异常的订单"
				  :formatter="dateFormate"
				  @cancel="closeDate"
				  @confirm="closeDate"
				/>
			
			</van-dialog>
			
		</view>
		
		<van-cell-group>
		  <van-field
		    :value="message"
		    label="详情"
		    type="textarea"
		    placeholder="请异常具体描述"
		    autosize
		    :border="false"
			input-align="left"
		  />
		</van-cell-group>
		<view class="abnormal-button">
			<van-button round type="info">确认上报</van-button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dateShow: false,
				show: false,
				actions: [
				    {
				        name: '选项一',
						subname: '描述信息',
						openType: 'share',
				    },
				    {
				        name: '选项二',
						subname: '描述信息',
						openType: 'share',
				    },
				    {
				        name: '选项三',
				        subname: '描述信息',
				        openType: 'share',
				    },
				    ],
			}
		},
		methods: {
			showDate: function(e) {
				this.$data.dateShow = true;
			},
			onClose() {
			    show = false;
			},
			
			onSelect(event) {
			    console.log(event.detail);
			},
			dateFormate: function(type, value) {
				
			},
			closeDate: function(e) {
				this.$data.dateShow = false;
				console.log(e);
			},
		}
	}
</script>

<style scoped>
	.abnormal-button{
		width: 100%;
		height: 250rpx;
		padding-top: 15%;
		padding-left: 35%;
	}
</style>
