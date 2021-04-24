<template>
<uni-shadow-root class="lin-ui-dist-calendar-components-header-index"><view class="calendar-header-container">
  <block v-if="showTitle">
    
   <view class="calendar-header-container_title">
      {{ title }}
    </view>
  </block>

  <view v-if="showSubtitle" class="calendar-header-container_subtitle">
    {{ subTitle }}
  </view>

  <view class="calendar-header__weekdays">
    <view v-for="(item,index) in (weekdays)" :key="item.index" class="calendar-header__weekday">
      {{ item }}
    </view>
  </view>
</view></uni-shadow-root>
</template>

<script>

global['__wxRoute'] = 'lin-ui/dist/calendar/components/header/index'
Component({data:{weekdays:["日","一","二","三","四","五","六"]},properties:{title:{type:String,value:"日期选择"},subTitle:String,showTitle:Boolean,showSubtitle:Boolean},methods:{}});
export default global['__wxComponents']['lin-ui/dist/calendar/components/header/index']
</script>
<style platform="mp-weixin">
.calendar-header-container .calendar-header-container_title{text-align:center;padding:20rpx 0;font-size:36rpx;line-height:44rpx}.calendar-header-container .calendar-header-container_subtitle{text-align:center;font-size:36rpx;line-height:44rpx;margin-bottom:30rpx}.calendar-header-container .calendar-header__weekdays{display:flex;justify-content:center;align-items:center;margin:0 20rpx;padding:10rpx 0;border-bottom:1rpx solid #f3f3f3}.calendar-header-container .calendar-header__weekdays .calendar-header__weekday{width:14.285%;text-align:center}
</style>