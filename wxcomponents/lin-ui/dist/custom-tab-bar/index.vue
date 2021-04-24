<template>
<uni-shadow-root class="lin-ui-dist-custom-tab-bar-index"><view v-if="show" :class="'tab-bar tab-bar-'+(position)" :style="'background: '+(backgroundImg? "url("+ backgroundImg+ ")" : backgroundColor)">
  <view class="tab-bar-border" :style="'background: '+(borderStyle)"></view>
  <view v-for="(item,idx) in (list)" :key="item.index" :class="'tab-bar-item '+(item.style === 'circle' ? 'circle': '')" :data-path="item.pagePath" :data-index="idx" mut-bind:tap="switchTab">
    <view v-if="item.style === 'circle'" class="item-circle"></view>
    <image class="tab-bar-item-image" v-if="item.style !== 'circle'" :style="'height: '+(item.iconSize)+'rpx; width: '+(item.iconSize)+'rpx'" :src="selected === idx ? item.selectedIconPath : item.iconPath"></image>
      <image v-else class="tab-bar-item-image"></image>
      <image class="center-circle" v-if="item.style === 'circle'" :src="selected === idx ? item.selectedIconPath : item.iconPath"></image>
    <view :style="'font-size: '+(fontSize)+'rpx ;color: '+(selected === idx ? selectedColor : color)">{{item.text}}</view>
    <view v-if="item.redDot" class="reddot"></view>
    <view v-if="item.badge" class="badge">{{item.badge}}</view>
  </view>
</view></uni-shadow-root>
</template>

<script>

global['__wxRoute'] = 'lin-ui/dist/custom-tab-bar/index'
Component({properties:{position:{type:String,value:"bottom"},show:{type:Boolean,value:!0},selected:{type:Number,value:0},color:{type:String,value:"#707070"},selectedColor:{type:String,value:"3963BC"},borderStyle:{type:String,value:"#f6f6f6"},backgroundColor:{type:String,value:"#fff"},backgroundImg:{type:String,value:""},fontSize:{type:Number,value:24},isRedirectToTab:{type:Boolean,value:!0},isNav:{type:Boolean,value:!0},list:{type:Array,value:[]}},data:{},attached(){},methods:{switchTab(t){const e=t.currentTarget.dataset,a=e.path;this.data.isNav&&(this.data.isRedirectToTab,wx.switchTab({url:a})),this.showItem(e.index)},show(){this.setData({show:!0})},hide(){this.setData({show:!1})},showItem(t){this.setData({selected:t});let e={idx:t,path:this.route};this.triggerEvent("lintap",e,{bubbles:!0,composed:!0})},showRedDot(t){const e=`list[${t}].redDot`;this.setData({[e]:!0})},hideRedDot(t){const e=`list[${t}].redDot`;this.setData({[e]:!1})},setTabBarBadge(t,e){const a=`list[${t}].badge`;this.setData({[a]:e})},removeTabBarBadge(t){const e=`list[${t}].badge`;this.setData({[e]:""})}}});
export default global['__wxComponents']['lin-ui/dist/custom-tab-bar/index']
</script>
<style platform="mp-weixin">
.tab-bar{position:relative;height:110rpx;width:750rpx;background:#fff;display:flex;flex-direction:row;background-position:center center;background-size:100% 100%;padding-bottom:env(safe-area-inset-bottom)}.tab-bar-bottom{position:fixed!important;bottom:0;left:0;right:0}.tab-bar-border{position:absolute;left:0;top:0;width:100%;display:flex;flex-direction:row;height:1rpx;background:#f6f6f6;box-shadow:0 -1px 3px 1px #f6f6f6}.tab-bar-item{position:relative;flex:1;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column}.item-circle{width:120rpx;height:60rpx;background-color:#fff;border-radius:200rpx 200rpx 0 0;border-bottom:none;background:#fff;position:absolute;top:-40rpx;box-shadow:0 -1px 1px 0 #f6f6f6}.tab-bar-item-image{width:64rpx;height:64rpx}.tab-bar-item view{font-size:24rpx}.reddot{height:20rpx;width:20rpx;background:red;border-radius:50%;position:absolute;top:15rpx;margin-left:25rpx}.badge{height:32rpx;line-height:32rpx;padding:0rpx 6rpx;background:red;border-radius:16rpx;position:absolute;font-size:18rpx;color:#fff;top:10rpx;margin-left:25rpx;box-sizing:border-box}.center-circle{height:100rpx;width:100rpx;border-radius:50%;position:absolute;top:-30rpx}
</style>