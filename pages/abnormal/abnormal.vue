<template>
	<view class="abnormal-wrap">
		<navtop topTitle="异常上报"></navtop>
		<view class="info">
			<van-field
			    :value="personVaccine"
				label="异常订单"
			    placeholder="请选择出现异常的疫苗记录"
				:readonly="true"
			    :border="false"
				:required="true"
				@click-input="showVaccine"
			    :change="onChange"
			  />
			  
			  <van-dialog
			    use-slot
			    :show="vaccineShow"
			    :showConfirmButton="false"
			  >
			    <van-picker :columns="vaccineTime" :show-toolbar="true" @confirm="selectVaccine" @cancel="selectVaccine" @change="hospital" />
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
				vaccines:null,
				vaccineShow: false,
				vaccineTime:null,
				personVaccine:""
			}
		},
		onLoad: function () {
			let user = this.$data.userInfo;
				const app = getApp();
				console.log(app)
				uni.request({
							url: "https://health.ymhdev.xyz:9999/personO/select",
							method: "GET",
							header: {
								"content-type": "application/x-www-form-urlencoded"
							},
							data: {
								user: app.globalData.openid,
								kind: "0"
							},
							success: (e) => {
								console.log(e)
								console.log(e.data.msg)
								this.$data.vaccines = e.data.msg;
								for(let i = 0;i<this.$data.vaccines.length;i++){
									this.$data.vaccineTime[i] = this.$data.vaccines[i].orderDateP;
								}
								console.log(this.$data.vaccineTime);
							}
				});
				
			},
		methods: {
			// 显示疫苗选择框
			showVaccine: function(e) {
				this.$data.vaccineShow = true;
			},
			selectVaccine: function(e) {
				this.$data.personVaccine = e.detail.value;
				this.$data.vaccineShow = false;
			},
			hospital: (e) => {
				console.log(e);
			}
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
