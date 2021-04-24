<template>
<uni-shadow-root class="lin-ui-dist-capsule-bar-index"><view class="container" :style="'padding-top: '+(hasPadding?titleBarHeight+statusBarHeight:'0')+'rpx'">
  
  <cover-view class="capsule-bar" :style="'background-color: '+(bgColor)+';'">
    
    
    <cover-view class="status-bar" :style="'height: '+(statusBarHeight+4)+'rpx;background-color: '+(statusBarColor)+';'"></cover-view>

    
    <cover-view class="title-bar" :style="'height: '+(titleBarHeight)+'rpx;background-color: '+(titleBarColor)+';'">
      <cover-view v-if="(!hiddenTitle)" class="title l-title-class" :style="'color: '+(titleColor)+';'">{{title}}</cover-view>
      <slot name="title"></slot>
    </cover-view>

    
    <cover-view v-if="(!hiddenCapsule)" class="capsule-button" :style="'border-color: rgba('+(capsuleColor==='black'?'0,0,0,0.1':'255,255,255,0.25')+');background-color: rgba('+(capsuleColor==='black'?'255,255,255,0.6':'0,0,0,0.15')+');width: '+(capsuleButtonInfo.width)+'px;height: '+(capsuleButtonInfo.height)+'px;left: '+(capsuleButtonInfo.left)+'px;top: '+(capsuleButtonInfo.top)+'px;'">
      
      <cover-view mut-bind:tap="onTapLeftButton" @longpress.stop.prevent="onLongPressLeftButton" :hover-class="'icon-wrapper-hover-'+(capsuleColor)" class="icon-wrapper" :style="'width: '+(capsuleButtonInfo.width/2)+'px;height: '+(capsuleButtonInfo.height)+'px;'">
        <cover-image class="icon-left" :style="'width:'+(capsuleLeftIconWidth?capsuleLeftIconWidth+'rpx':'')+';height:'+(capsuleLeftIconHeight?capsuleLeftIconHeight+'rpx':'')+';'" :src="capsuleLeftIconPath?capsuleLeftIconPath:'icons/capsule-left-'+capsuleColor+'.png'"></cover-image>
      </cover-view>

      
      <cover-view class="line"></cover-view>

      
      <cover-view mut-bind:tap="onTapRightButton" @longpress.stop.prevent="onLongPressRightButton" :hover-class="'icon-wrapper-hover-'+(capsuleColor)" class="icon-wrapper" :style="'width: '+(capsuleButtonInfo.width/2)+'px;height: '+(capsuleButtonInfo.height)+'px;'">
        <cover-image class="icon-right" :style="'width：'+(capsuleRightIconWidth?capsuleRightIconWidth+'rpx':'')+';height:'+(capsuleRightIconHeight?capsuleRightIconHeight+'rpx':'')" :src="capsuleRightIconPath?capsuleRightIconPath:'icons/capsule-right-'+capsuleColor+'.png'"></cover-image>
      </cover-view>
    </cover-view>
  </cover-view>

  <view class="content-container">
    <slot></slot>
  </view>
</view></uni-shadow-root>
</template>

<script>

global['__wxRoute'] = 'lin-ui/dist/capsule-bar/index'
import deviceUtil from"../utils/device-util";import validator from"../behaviors/validator";import eventUtil from"../core/utils/event-util";Component({options:{multipleSlots:!0},behaviors:[validator],externalClasses:["l-title-class"],properties:{bgColor:{type:String,value:"white"},statusBarColor:{type:String,value:"transparent"},titleBarColor:{type:String,value:"transparent"},titleColor:{type:String,value:"black"},capsuleColor:{type:String,value:"black",options:["white","black"]},disableBack:{type:Boolean,value:!1},disableHome:{type:Boolean,value:!1},hiddenCapsule:{type:Boolean,value:!1},homePage:{type:String,value:""},title:{type:String,value:""},hasPadding:{type:Boolean,value:!0},hiddenTitle:{type:Boolean,value:!1},capsuleLeftIconPath:{type:String,value:null},capsuleLeftIconWidth:{type:Number,value:null},capsuleLeftIconHeight:{type:Number,value:null},capsuleRightIconPath:{type:String,value:null},capsuleRightIconWidth:{type:Number,value:null},capsuleRightIconHeight:{type:Number,value:null}},data:{titleBarHeight:deviceUtil.getTitleBarHeight(),statusBarHeight:deviceUtil.getStatusBarHeight(),capsuleButtonInfo:null},lifetimes:{ready:function(){this.setData({capsuleButtonInfo:this.getCapsuleButtonInfo()})}},methods:{getCapsuleButtonInfo(){const t=wx.getSystemInfoSync().screenWidth,e=wx.getMenuButtonBoundingClientRect();return e.left=t-e.right,e.right=e.left+e.width,e},onTapLeftButton(){eventUtil.emit(this,"linlefttap"),this.data.disableBack||wx.navigateBack()},onLongPressLeftButton(){eventUtil.emit(this,"linleftlongpress")},async onTapRightButton(){eventUtil.emit(this,"linrighttap");const t=this.data.homePage;this.data.disableHome||wx.switchTab({url:t,fail(){wx.navigateTo({url:t})}})},onLongPressRightButton(){eventUtil.emit(this,"linrightlongpress")}}});
export default global['__wxComponents']['lin-ui/dist/capsule-bar/index']
</script>
<style platform="mp-weixin">
.container{position:relative}.container .capsule-bar{width:100%;position:fixed;display:flex;flex-direction:column;top:0;left:0;z-index:999}.container .capsule-bar .status-bar{width:100%}.container .capsule-bar .title-bar{width:100%;display:flex;align-items:center;justify-content:center;margin-top:-4rpx;padding-top:4rpx;box-sizing:border-box}.container .capsule-bar .title-bar .title{font-size:36rpx;font-weight:700}.container .capsule-bar .capsule-button{border-radius:99999px;display:flex;align-items:center;border:1px solid rgba(0,0,0,.1);position:fixed}.container .capsule-bar .capsule-button .icon-wrapper-hover-black{background-color:rgba(0,0,0,.36)}.container .capsule-bar .capsule-button .icon-wrapper-hover-white{background-color:rgba(255,255,255,.339)}.container .capsule-bar .capsule-button .icon-wrapper{display:flex;justify-content:center;align-items:center}.container .capsule-bar .capsule-button .icon-wrapper .icon-left{display:block;width:20rpx;height:34rpx}.container .capsule-bar .capsule-button .icon-wrapper .icon-right{display:block;width:38rpx;height:34rpx}.container .capsule-bar .capsule-button .line{height:18px;width:1px;line-height:1;background-color:rgba(255,255,255,.25)}.container .content-container{width:100%;position:absolute;left:0}
</style>