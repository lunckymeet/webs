<template>
<uni-shadow-root class="lin-ui-dist-badge-index"><view class="l-badge" mut-bind:tap="handleTap">
  <slot></slot>
  <block v-if="show">
    <view v-if="dot" class="l-badge-dot l-class l-class-self l-self-class"></view>
    <view v-else :class="('l-badge-content-'+shape)+' l-badge-content l-class l-class-self l-self-class'">{{finalCount}}</view>
  </block>
</view></uni-shadow-root>
</template>

<script>

global['__wxVueOptions'] = {components:{}}

global['__wxRoute'] = 'lin-ui/dist/badge/index'
import validator from"../behaviors/validator";Component({externalClasses:["l-class","l-class-self","l-self-class"],behaviors:[validator],properties:{dot:{type:Boolean,value:!1},shape:{type:String,value:"horn",options:["horn","circle"]},value:{type:String,value:"0"},mode:{type:String,value:"number",options:["number","text"]},maxCount:{type:Number,value:99},numberType:{type:String,value:"overflow",options:["overflow","limit","ellipsis"]},show:{type:Boolean,value:!0}},data:{finalCount:0},observers:{value:function(){this.finalCount()}},methods:{finalCount(){isNaN(Number(this.data.value))||"text"===this.data.mode?this.setData({finalCount:this.data.value}):this.switchType()},switchType(){switch(this.data.numberType){case"overflow":this.setData({finalCount:Number(this.data.value)>Number(this.data.maxCount)?this.data.maxCount+"+":this.data.value});break;case"ellipsis":this.setData({finalCount:Number(this.data.value)>Number(this.data.maxCount)?"...":this.data.value});break;case"limit":this.setData({finalCount:Number(this.data.value)>999?Number(this.data.value)>=9999?Math.floor(this.data.value/1e4*100)/100+"w":Math.floor(this.data.value/1e3*100)/100+"k":this.data.value});break;default:this.setData({finalCount:Number(this.data.value)})}},handleTap(){this.triggerEvent("lintap",{},{bubbles:!0,composed:!0})}}});
export default global['__wxComponents']['lin-ui/dist/badge/index']
</script>
<style platform="mp-weixin">
.l-badge{position:relative;display:inline-block;line-height:1;vertical-align:middle}.l-badge-content{max-width:650rpx;left:70%;background-color:#ff474b;color:#fff;position:absolute;font-size:20rpx;display:inline-block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;text-align:center;box-sizing:border-box;z-index:10;letter-spacing:.5rpx}.l-badge-content-horn{height:28rpx;min-width:54rpx;padding:0 8rpx;border-radius:14rpx 14rpx 14rpx 0rpx;line-height:28rpx;top:-10rpx}.l-badge-content-circle{height:32rpx;min-width:32rpx;padding:0 10rpx;border-radius:16rpx;line-height:32rpx;top:-10rpx}.l-badge-dot{height:16rpx;width:16rpx;transform:translateX(50%);border-radius:50%;background-color:#ff474b;position:absolute;top:-4rpx;right:0rpx}
</style>