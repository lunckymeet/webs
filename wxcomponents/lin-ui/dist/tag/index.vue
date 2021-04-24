<template>
<uni-shadow-root class="lin-ui-dist-tag-index"><view style="display:flex">
  <view :class="'l-tag '+(type==='touch'?'l-tag-touch':'')+' '+(plain?'l-tag-plain-'+ size:'l-tag-'+size)+' '+(disable?'l-tag-disable':'')+' '+(select?'select l-select-class':'l-class')+' '+(plain?'l-tag-plain':'')+' '+('l-tag-'+size+'-'+ shape)" :style="(height?'line-height:'+height+'rpx;height:'+height+'rpx;':'')+(plain?'color:'+fontColor+';border-color:'+fontColor:'background-color:'+bgColor+';color:'+fontColor)" mut-bind:tap="handleTap">
    <view :class="location==='left'?'content':'content-l'" :style="iconName?'line-height:0':''">
      <l-icon v-if="icon" :style="location==='left'?'margin-right:5rpx':'margin-left:5rpx'" :name="icon" :size="iconSize" :color="iconColor"></l-icon>
      <image :style="location==='left'?'margin-right:5rpx':'margin-left:5rpx'" v-if="image" :src="image" :class="('tag-image-'+size)+' l-image-class'"></image>
      <slot></slot>
    </view>
  </view>
</view></uni-shadow-root>
</template>

<script>
import LIcon from '../icon/index.vue'
global['__wxVueOptions'] = {components:{'l-icon': LIcon}}

global['__wxRoute'] = 'lin-ui/dist/tag/index'
import validator from"../behaviors/validator";Component({externalClasses:["l-class","l-select-class","l-image-class"],behaviors:[validator],properties:{name:String,cell:Object,type:{type:String,value:"touch",options:["reading","touch"]},bgColor:String,fontColor:String,disable:Boolean,shape:{type:String,value:"square",options:["square","circle"]},select:Boolean,plain:Boolean,size:{type:String,value:"medium",options:["large","medium","mini","super-mini"]},location:{type:String,value:"left",options:["left","right"]},icon:String,iconSize:{type:String,value:"20"},iconColor:{type:String,value:"#3683D6"},image:String,iconStyle:{type:String,value:"size:20;color:#3683D6"},height:Number},methods:{handleTap(){if(this.data.disable)return;let e={name:this.data.name,cell:this.data.cell,select:this.data.select};this.triggerEvent("lintap",e,{bubbles:!0,composed:!0})}}});
export default global['__wxComponents']['lin-ui/dist/tag/index']
</script>
<style platform="mp-weixin">
.l-tag{display:inline-flex;justify-content:center;align-items:center;color:#fff;background-color:#3963bc}.l-tag-touch{min-width:80rpx}.l-tag-super-mini{height:32rpx;font-size:20rpx}.l-tag-mini{height:42rpx;font-size:20rpx}.l-tag-medium{height:50rpx;font-size:24rpx;letter-spacing:2rpx}.l-tag-large{height:60rpx;font-size:24rpx;letter-spacing:2rpx}.l-tag-super-mini-square{border-radius:2rpx;padding:0 6rpx}.l-tag-mini-square{border-radius:2rpx;padding:0 12rpx}.l-tag-medium-square{border-radius:2rpx;padding:0 16rpx}.l-tag-large-square{border-radius:2rpx;padding:0 18rpx}.l-tag-super-mini-circle{border-radius:16rpx;padding:0 12rpx}.l-tag-mini-circle{border-radius:21rpx;padding:0 16rpx}.l-tag-medium-circle{border-radius:25rpx;padding:0 20rpx}.l-tag-large-circle{border-radius:30rpx;padding:0 24rpx}.l-tag-plain{background-color:#fff;color:#3963bc;border:2rpx solid #3963bc}.l-tag-plain-super-mini{height:28rpx;font-size:20rpx}.l-tag-plain-mini{height:38rpx;font-size:20rpx}.l-tag-plain-medium{height:46rpx;font-size:24rpx;letter-spacing:2rpx}.l-tag-plain-large{height:56rpx;font-size:24rpx;letter-spacing:2rpx}.l-tag-disable{background-color:#dee2e6;color:#fff;border-color:#dee2e6}.select{background-color:#3963bc;color:#fff}.content{display:inline-flex;align-items:center;justify-content:center}.content-l{display:inline-flex;flex-direction:row-reverse;align-items:center;justify-content:center}.tag-image-mini{width:20rpx;height:20rpx}.tag-image-large{width:24rpx;height:24rpx}
</style>