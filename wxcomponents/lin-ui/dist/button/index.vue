<template>
<uni-shadow-root class="lin-ui-dist-button-index"><label :for="name" mut-bind:tap="handleTap" class="l-label-class">
  <block v-if="special">
    <view class="special-container l-class">
      <slot></slot>
    </view>
  </block>
  <block v-else>
    <view :class="'l-btn '+('l-btn-' + size)+' '+('l-btn-' + type)+' '+('l-btn-' + shape)+' '+(plain?'l-btn-plain':'')+' '+(disabled ? 'l-btn-disabled' : '')+' l-class'" :hover-class="disabled?'':disabledHover?'':'btn-hover l-hover-class'" :hover-stop-propagation="hoverStopPropagation" :hover-start-time="hoverStartTime" :hover-stay-time="hoverStayTime" :style="(width?'min-width:'+width+'rpx;':'')+' '+(height?'height:'+height+'rpx;'+'line-height:'+height+'rpx;':'')+' '+(size=='long'?'border-radius:0;':'')+' '+('background-color:'+bgColor)">
      <view v-if="loading" :class="'l-btn-loading '+('margin-' + size)+' '+(plain ?'l-btn-loading-' + type : '')"></view>
      <l-icon l-class="l-icon-class" :class="'margin-' + size" v-if="icon" :name="icon" :color="iconColor" :size="iconSize"></l-icon>
      <slot></slot>
    </view>
  </block>
</label>
<button style="position: absolute;top: -999px;left: -999px;" v-if="openType" :id="name" :lang="lang" :form-type="formType" :open-type="openType" :app-parameter="appParameter" :hover-stop-propagation="hoverStopPropagation" :hover-start-time="hoverStartTime" :hover-stay-time="hoverStayTime" :session-from="sessionFrom" :send-message-title="sendMessageTitle" :send-message-path="sendMessagePath" :send-message-img="sendMessageImg" :show-message-card="showMessageCard" @contact="openTypeEvent" @getuserinfo="openTypeEvent" @getphonenumber="openTypeEvent" @opensetting="openTypeEvent">
</button></uni-shadow-root>
</template>

<script>
import LIcon from '../icon/index.vue'
global['__wxVueOptions'] = {components:{'l-icon': LIcon}}

global['__wxRoute'] = 'lin-ui/dist/button/index'
import validator from"../behaviors/validator";Component({externalClasses:["l-class","l-label-class","l-hover-class","l-img-class","l-icon-class"],behaviors:[validator],properties:{name:{type:String,value:"lin"},type:{type:String,value:"default",options:["warning","success","error","default"]},plain:Boolean,size:{type:String,value:"medium",options:["medium","large","mini","long"]},shape:{type:String,value:"circle",options:["square","circle","semicircle"]},disabled:{type:Boolean,value:!1},special:{type:Boolean,value:!1},loading:{type:Boolean,value:!1},width:Number,height:Number,icon:String,image:String,bgColor:String,iconColor:String,iconSize:String,openType:String,appParameter:String,lang:String,hoverStopPropagation:Boolean,hoverStartTime:{type:Number,value:20},hoverStayTime:{type:Number,value:70},sessionFrom:{type:String,value:""},sendMessageTitle:String,sendMessagePath:String,sendMessageImg:String,showMessageCard:Boolean,formType:String,disabledHover:{type:Boolean,value:!1}},methods:{handleTap(){if(this.data.disabled||this.data.loading)return!1;this.triggerEvent("lintap",{},{bubbles:!0,composed:!0})},openTypeEvent(e){this.triggerEvent(e.type,e.detail,{})}}});
export default global['__wxComponents']['lin-ui/dist/button/index']
</script>
<style platform="mp-weixin">
.btn-hover::before{opacity:.15;position:absolute;top:50%;left:50%;width:100%;height:100%;border:inherit;border-radius:inherit;transform:translate(-50%,-50%);content:' ';background-color:#333;border-color:#333}.special-container{display:flex}.l-btn{display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;font-size:28rpx;position:relative;color:#fff;padding:0 12rpx;box-sizing:border-box}.l-btn-img-mini{width:30rpx;height:30rpx}.l-btn-img-medium{width:36rpx;height:36rpx}.l-btn-img-large{height:44rpx;width:44rpx}.l-btn-long{border-radius:0;height:88rpx;width:100%}.l-btn-medium{height:72rpx;min-width:180rpx}.l-btn-large{height:88rpx;min-width:710rpx}.l-btn-mini{height:60rpx;min-width:140rpx;font-size:24rpx}.l-btn-default{background-color:#3963bc}.l-btn-success{background-color:#34bfa3}.l-btn-warning{background-color:#ffe57f;color:#333}.l-btn-error{background-color:#f4516c}.l-btn-square{border-radius:0}.l-btn-semicircle{border-radius:40rpx}.l-btn-large.l-btn-semicircle{border-radius:48rpx}.l-btn-mini.l-btn-semicircle{border-radius:30rpx}.l-btn-circle{border-radius:8rpx}.l-btn-large.l-btn-circle{border-radius:9.6rpx}.l-btn-mini.l-btn-circle{border-radius:6rpx}.l-btn-plain{background-color:#fff;color:#3963bc;border:2rpx solid #3963bc}.l-btn-success.l-btn-plain{background-color:#fff;color:#34bfa3;border:2rpx solid #34bfa3}.l-btn-error.l-btn-plain{background-color:#fff;color:#f4516c;border:2rpx solid #f4516c}.l-btn-warning.l-btn-plain{background-color:#fff;color:#ffe57f;border:2rpx solid #ffe57f}.l-btn-loading{opacity:.6;display:inline-block;vertical-align:middle;width:24rpx;height:24rpx;background:0 0;border-radius:50%;border:4rpx solid #fff;border-color:#fff #fff #fff transparent;animation:btn-spin .6s linear;animation-iteration-count:infinite}.l-btn-loading-default{border:4rpx solid #3963bc;border-color:#3963bc #3963bc #3963bc transparent}.l-btn-loading-success{border:4rpx solid #34bfa3;border-color:#34bfa3 #34bfa3 #34bfa3 transparent}.l-btn-loading-error{border:4rpx solid #f4516c;border-color:#f4516c #f4516c #f4516c transparent}.l-btn-loading-warning{border:4rpx solid #ffe57f;border-color:#ffe57f #ffe57f #ffe57f transparent}.l-btn-disabled{opacity:.8}.icon{display:flex!important}.margin-mini{margin-right:10rpx}.margin-medium{margin-right:18rpx}.margin-large{margin-right:24rpx}.margin-long{margin-right:24rpx}@keyframes btn-spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}
</style>