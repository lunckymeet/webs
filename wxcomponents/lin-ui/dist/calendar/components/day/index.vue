<template>
<uni-shadow-root class="lin-ui-dist-calendar-components-day-index"><view :class="'calendar-day-container '+(type)" :style="computed.getDayStyle(type, color)">
  <view class="top">{{ topInfo }}</view>
  <view class="text">{{ text }}</view>
  <view class="bottom">{{ bottomInfo }}</view>
</view></uni-shadow-root>
</template>
<wxs src="./index.wxs" module="computed"></wxs>
<script>

global['__wxRoute'] = 'lin-ui/dist/calendar/components/day/index'
Component({data:{},properties:{text:null,topInfo:null,bottomInfo:null,type:null,color:{type:String,value:""}},methods:{}});
export default global['__wxComponents']['lin-ui/dist/calendar/components/day/index']
</script>
<style platform="mp-weixin">
.calendar-day-container{display:flex;flex-direction:column;height:100%;align-items:center;position:relative;color:#666}.calendar-day-container.selected{background-color:#3963bc;color:#fff;border-radius:8rpx}.calendar-day-container.start{background-color:#3963bc;color:#fff;border-radius:8rpx}.calendar-day-container.end{background-color:#3963bc;color:#fff;border-radius:8rpx}.calendar-day-container.disabled{color:#c8c9cc;cursor:default;background:#fff}.calendar-day-container.middle{color:#3963bc}.calendar-day-container.middle::after{position:absolute;top:0;right:0;bottom:0;left:0;background-color:currentColor;opacity:.1;content:''}.calendar-day-container .top{height:24rpx;line-height:24rpx;font-size:16rpx}.calendar-day-container .text{flex:1;font-size:32rpx}.calendar-day-container .bottom{height:24rpx;line-height:24rpx;font-size:16rpx}
</style>