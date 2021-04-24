<template>
<uni-shadow-root class="lin-ui-dist-notice-bar-index"><view v-if="show" class="l-class l-noticebar" :style="'color: '+(color)+'; background-color: '+(backgroundcolor)">
  <l-icon v-if="frontIconName" :size="frontIconSize" :color="frontIconColor" :name="frontIconName" class="l-noticebar-icon" l-class="l-icon-class"></l-icon>
  <swiper autoplay vertical :interval="4*speed" class="l-noticebar-content-wrap" v-if="type=='swip'">
    <block v-for="(item,index) in (swipArr)" :key="item.swip">
      <swiper-item :data-index="index" mut-bind:tap="onSwip">
        {{item}}
      </swiper-item>
    </block>
  </swiper>
  <view class="l-noticebar-content-wrap l-noticebar-content-wrap-view" v-else>
    <view class="l-noticebar-content" mut-bind:tap="handleTap" :animation="animationData">
      <slot></slot>
    </view>
  </view>
  <l-icon v-if="endIconName && !close" :size="endIconSize" :color="endIconColor" class="l-noticebar-operation" :name="endIconName" mut-bind:tap="onIconTap"></l-icon>
  <l-icon v-if="close" class="l-noticebar-operation" name="close" :size="endIconSize" :color="endIconColor" mut-bind:tap="onClose"></l-icon>
</view></uni-shadow-root>
</template>

<script>
import LIcon from '../icon/index.vue'
global['__wxVueOptions'] = {components:{'l-icon': LIcon}}

global['__wxRoute'] = 'lin-ui/dist/notice-bar/index'
import nodeUtil from"../core/utils/node-util";Component({externalClasses:["l-class","l-icon-class"],properties:{type:{type:String,value:"still"},swipArr:Array,frontIconName:{type:String,value:""},frontIconSize:{type:Number,value:28},frontIconColor:{type:String,value:"#3683D6"},endIconName:{type:String,value:""},endIconSize:{type:Number,value:28},endIconColor:{type:String,value:"#3683D6"},backgroundcolor:{type:String,value:"#DFEDFF"},color:{type:String,value:"#3683D6"},speed:{type:Number,value:1500},show:{type:Boolean,value:!0},close:{type:Boolean,value:!1}},data:{wrapWidth:0,width:0,duration:0,animation:null,timer:null},detached(){this.destroyTimer()},ready(){"roll"===this.properties.type&&this.properties.show&&this.initAnimation()},methods:{async initAnimation(){const t=await nodeUtil.getNodeRectFromComponent(this,".l-noticebar-content"),i=await nodeUtil.getNodeRectFromComponent(this,".l-noticebar-content-wrap"),a=t.width/40*this.data.speed,e=wx.createAnimation({duration:a,timingFunction:"linear"});this.setData({wrapWidth:i.width,width:t.width,duration:a,animation:e},()=>{this.startAnimation()})},startAnimation(){if(0!==this.data.animation.option.transition.duration){this.data.animation.option.transition.duration=0;const t=this.data.animation.translateX(this.data.wrapWidth).step();this.setData({animationData:t.export()})}this.data.animation.option.transition.duration=this.data.duration;const t=this.data.animation.translateX(-this.data.width).step();setTimeout(()=>{this.setData({animationData:t.export()})},100);const i=setTimeout(()=>{this.startAnimation()},this.data.duration);this.setData({timer:i})},destroyTimer(){this.data.timer&&clearTimeout(this.data.timer)},handleTap(){this.triggerEvent("lintap",{},{bubbles:!0,composed:!0}),this.setData({timer:null})},onSwip(t){this.triggerEvent("lintap",{...t.currentTarget.dataset},{bubbles:!0,composed:!0})},onIconTap(){this.triggerEvent("linicontap",{},{bubbles:!0,composed:!0}),this.setData({timer:null})},onClose(){this.setData({timer:null,show:!1})},linFlush(){this.destroyTimer(),this.initAnimation()}}});
export default global['__wxComponents']['lin-ui/dist/notice-bar/index']
</script>
<style platform="mp-weixin">
.l-noticebar{display:flex;height:72rpx;width:750rpx;line-height:72rpx;font-size:28rpx;color:#3963bc;background-color:#dfedff;overflow:hidden;box-shadow:0 2px 5px 0 rgba(218,224,233,.4);border-radius:0 0 8px 8px}.l-noticebar-icon{display:flex;margin-left:20rpx;margin-right:18rpx;align-items:center}.l-noticebar-icon+.l-noticebar-content-wrap-view{margin-left:5rpx}.l-noticebar-operation{display:flex;margin-right:16rpx;margin-left:8rpx;align-items:center}.l-noticebar-content-wrap{display:flex;margin-left:5rpx;flex:1;height:72rpx;position:relative;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.l-noticebar-content-wrap .l-noticebar-content{position:absolute;transition-duration:20s}
</style>