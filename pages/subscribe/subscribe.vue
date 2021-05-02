<template>
	<view class="subscribe-wrap">
		<navtop topTitle="预约"></navtop>
		<view class="subscribe-context">
		<van-tabs swipeable>
		  <van-tab title="个人">
			  <view class="info-list person">
			  	<view class="info">
			  		<van-field
			  		    :value="personHospital"
			  			label="预约医院"
			  		    placeholder="请选择医院"
						:readonly="true"
			  		    :border="false"
			  			:required="true"
			  			@click-input="showHospital"
			  		    :change="onChange"
			  		  />
			  		  <van-dialog
			  		    use-slot
			  		    :show="hospitalShow"
			  			:showConfirmButton="false"
			  		  >
			  		    <van-picker :columns="hospitals" :show-toolbar="true" @confirm="selectHospital" @cancel="selectHospital" @change="hospital" />
			  		  </van-dialog>
			  	</view>
				
				<view class="info">
					<van-field
					    :value="personDate"
						label="预约时间"
					    placeholder="请选择时间"
						:readonly="true"
					    :border="false"
						:required="true"
						@click-input="showDate"
					    :change="onChange"
					  />
					  
					  <van-dialog
					    use-slot
					    :show="dateShow"
					  	:showConfirmButton="false"
					  >
					    <van-datetime-picker
					      type="datetime"
					      :value="currentDate"
					      :min-date="minDate"
					      :max-date="maxDate"
						  :formatter="dateFormate"
						  @cancel="closeDate"
						  @confirm="closeDate"
					    />
					  </van-dialog>
				</view>
				
				<view class="info">
					<van-field
					    :value="personName"
					    label="姓名"
					    type="textarea"
					    placeholder="请输入姓名"
					    :border="false"
						@change="getName"
					  />
				</view>
				
				<view class="info">
					<van-field
					    :value="personPhone"
					    label="电话号码"
					    type="textarea"
					    placeholder="请输入电话号码"
					    :border="false"
						@change="getPhone"
					  />
				</view>
				
				<view class="info">
					<van-field
					    :value="personAddress"
					    label="家庭住址"
					    type="textarea"
					    placeholder="请输入家庭住址"
					    :border="false"
						@change="getAddress"
					  />
				</view>
				
				<view class="info-button">
					<van-button round type="info" name="个人预约">确认预约</van-button>
				</view>
				
			  </view>
			  
		  </van-tab>
		  
		  <van-tab title="团体">
			  <view class="info-list team">
			  	<view class="info">
			  		<van-field
			  		    :value="personName"
			  		    label="姓名"
			  		    type="textarea"
			  		    placeholder="请输入姓名"
			  		    :border="false"
			  			@change="getName"
			  		  />
			  	</view>
			  	
			  	<view class="info">
			  		<van-field
			  		    :value="personPhone"
			  		    label="电话号码"
			  		    type="textarea"
			  		    placeholder="请输入电话号码"
			  		    :border="false"
			  			@change="getPhone"
			  		  />
			  	</view>
			  	
			  	<view class="info">
			  		<van-field
			  		    :value="personAddress"
			  		    label="家庭住址"
			  		    type="textarea"
			  		    placeholder="请输入家庭住址"
			  		    :border="false"
			  			@change="getAddress"
			  		  />
			  	</view>
				
				<view class="info">
					<van-field
					    :value="personCompany"
					    label="所属单位"
					    type="textarea"
					    placeholder="请输入所属单位"
					    :border="false"
						@change="getCompany"
					  />
				</view>
			  	<view class="info-button">
					<van-button round type="info" name="团体预约">确认预约</van-button>
				</view>
			  </view>
		  </van-tab>
		</van-tabs>
		
		</view>
	</view>
</template>

<script>
	import position from "../../utils/amap-wx.js";
	export default {
		data() {
			return {
				hospitalShow: false, // 选择医院是否显示
				dateShow: false, // 选择时间是否显示
				hospitals: [],
				personHospital: "", // 个人预约医院
				personDate: null, // 个人预约时间
				minDate: new Date().getTime() + (60 * 60 * 2),
				maxDate: new Date().getTime() + (60 * 60 * 24 * 1000 * 30),
				currentDate: new Date().getTime(),
				personName: ""
				
			}
		}, 
		methods: {
			PickerChange: (e) => {
				this.index = e.detail.value
			},
			hospital: (e) => {
				console.log(e);
			},
			// 显示医院选择框
			showHospital: function(e) {
				this.$data.hospitalShow = true;
			},
			selectHospital: function(e) {
				this.$data.personHospital = e.detail.value;
				this.$data.hospitalShow = false;
			},
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
				
				if(type === 'hour') {
					return value + '时';
				}
				
				if(type === 'minute') {
					return value + '分';
				}
				
			},
			closeDate: function(e) {
				this.$data.dateShow = false;
				const date = new Date(e.detail);
				const year = date.getFullYear() + "年";
				const month = (date.getMonth() + 1) + "月";
				const day = date.getDay() + "日";
				const hour = date.getHours() + "时";
				const minute = date.getMinutes() + "分";
				
				this.$data.personDate = year + month + day + hour + minute;
				console.log(e);
			},
			getName: function(e) {
				this.$data.personName = e.detail;
				console.log(this.$data.personName)
			}
			
		},
		
		created:function(){
			const that = this;
			const appData = getApp().globalData;
			// 获取附近医院列表
			new position.AMapWX({key: appData.areaKey}).getInputtips({
				keywords: "医院",
				city: appData.city,
				success: function(data){
				        //成功回调
						console.log(data.tips);
						for(let i = 1; i < data.tips.length; i++) {
							that.$data.hospitals.push(data.tips[i].name);
						}
						console.log("成功获取到附近医院列表", data);
				      },
				      fail: function(info){
				        //失败回调
				        console.log(info)
				      }
			});
		}
	}
</script>

<style scoped>
	.subscribe-wrap {
		width: 100%;
		height: 100vh;
	}
	
	.subscribe-wrap > .subscribe-context {
		width: 100%;
		height: auto;
		min-height: 80%;
		margin: 0 auto;
	}
	
	.info-button{
		width: 100%;
		height: 200rpx;
		padding-left: 38%;
		padding-top: 10%;
	}
</style>
