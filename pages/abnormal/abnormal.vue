<template>
	<view class="abnormal-wrap">
		<navtop topTitle="异常上报"></navtop>
		<van-cell-group>
		  <van-field
			label="姓名"
		    :value="name"
		    :border="false"
		    bind:change="onChange"
			input-align="left"
		  />
		</van-cell-group>
		<van-cell-group>
		  <van-field
			label="异常疫苗"
		    :value="name"
		    :border="false"
		    bind:change="onChange"
			input-align="left"
		  />
		</van-cell-group>
		
		<view class="info">
			<van-field
			    :value="personDate"
				label="接种时间"
			    placeholder="请选择时间"
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
			    <van-datetime-picker
			      type="date"
				  :value="currentDate"
				  :min-date="minDate"
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentDate: new Date().getTime(),
				minDate: new Date().getTime() - (60 * 60 * 30),
				dateShow: false
			}
		},
		methods: {
			showDate: function(e) {
				this.$data.dateShow = true;
			},
			dateFormate: function(type, value) {
				if(type === 'year') {
					return value + '年';
				}
				
				if(type === 'month') {
					return value + '月';
				}
				
				if(type === 'day') {
					return value + '日';
				}
			},
			closeDate: function(e) {
				this.$data.dateShow = false;
				const date = new Date(e.detail);
				const year = date.getFullYear() + "年";
				const month = (date.getMonth() + 1) + "月";
				const day = date.getDay() + "日";
				
				this.$data.personDate = year + month + day;
				console.log(e);
			}
		}
	}
</script>

<style scoped>
	
</style>
