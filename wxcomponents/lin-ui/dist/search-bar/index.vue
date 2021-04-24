<template>
<uni-shadow-root class="lin-ui-dist-search-bar-index"><view class="search-bar l-container-class">
  <slot name="before"></slot>
  <view v-if="frontText" class="icon-container" mut-bind:tap="handleTapFrontText">
    <text class="city">{{frontText}}</text>
    <l-icon name="down" color="#333" size="22"></l-icon>
  </view>
  <view :class="'search-input l-class '+('search-input-'+ shape)" :style="'background-color:'+bgColor">
    <slot v-if="custom" name="icon"></slot>
    <l-icon v-else :name="icon" :size="iconSize" :color="iconColor" l-class="l-icon-class"></l-icon>
    <input :confirm-type="confirmType" :class="'input l-input-class '+('input'+ TextAlign)" :value="value" :type="type" :password="type==='password'" :placeholder="placeholder" :maxlength="maxlength" placeholder-class="pls-class l-placeholder-class" :placeholder-style="placeholderStyle" :disabled="disabled" :focus="focus" @input="handleInputChange" @focus="handleInputFocus" @blur="handleInputBlur" @confirm="handleInputConfirm"></input>
    <view class="close-wrap" v-if="clear&&value" mut-bind:tap="onClearTap">
        <view class="close">
            <l-icon name="close" color="#fff" size="15"></l-icon>
        </view>
    </view>
  </view>
  <view v-if="showCancel" class="cancel l-cancel-class" mut-bind:tap="onCancel">
        {{cancelText}}
  </view>
  <slot name="after"></slot>
</view></uni-shadow-root>
</template>

<script>
import LInput from '../input/index.vue'
import LIcon from '../icon/index.vue'
global['__wxVueOptions'] = {components:{'l-input': LInput,'l-icon': LIcon}}

global['__wxRoute'] = 'lin-ui/dist/search-bar/index'
import validator from"../behaviors/validator";Component({externalClasses:["l-class","l-container-class","l-placeholder-class","l-icon-class","l-input-class","l-cancel-class"],behaviors:[validator],options:{multipleSlots:!0},properties:{confirmType:{type:String,value:"search"},placeholder:String,cancelText:{type:String,value:"取消"},frontText:String,custom:Boolean,value:String,type:String,icon:{type:String,value:"research"},iconColor:{type:String,value:"#bdbdbd"},iconSize:{type:String,value:"28"},bgColor:{type:String,value:"#f3f3f3"},showCancel:{type:Boolean,value:!0},shape:{type:String,value:"primary",options:["circle","primary"]},textAlign:{type:String,value:"left",options:["left","right"]},focus:Boolean,clear:{type:Boolean,value:!0},maxlength:{type:Number,value:140},disabled:Boolean,placeholderStyle:String},data:{},methods:{onCancel(){this.triggerEvent("lincancel",{},{bubbles:!0,composed:!0})},handleInputChange(e){const{detail:t={}}=e,{value:l=""}=t;this.setData({value:l}),this.triggerEvent("linchange",t)},handleInputFocus(e){this.triggerEvent("linfocus",e.detail)},handleInputBlur(e){this.triggerEvent("linblur",e.detail)},handleInputConfirm(e){const{detail:t={}}=e,{value:l=""}=t;this.setData({value:l}),this.triggerEvent("linconfirm",t)},onClearTap(e){this.setData({value:""}),this.triggerEvent("linclear",e.detail,{bubbles:!0,composed:!0})},handleTapFrontText(e){this.triggerEvent("linfronttap",e.detail)}}});
export default global['__wxComponents']['lin-ui/dist/search-bar/index']
</script>
<style platform="mp-weixin">
.search-bar{display:flex;flex-direction:row;align-items:center;padding:0 20rpx;box-sizing:border-box;width:100%}.search-input{height:60rpx;background-color:#f3f3f3;display:flex;flex-direction:row;flex:1;align-items:center;padding-left:30rpx;box-sizing:border-box}.search-input-primary{border-radius:8rpx}.search-input-circle{border-radius:30rpx}.cancel{font-size:28rpx;color:#666;display:flex;align-items:center;width:60rpx;justify-content:center;height:60rpx;margin-left:15rpx}.input{height:40rpx;line-height:40rpx;flex:1;margin-left:15rpx;font-size:28rpx;color:#666}.input-center{text-align:center}.input-left{text-align:left}.close-wrap{padding:10rpx}.close{height:30rpx;width:30rpx;background:#ddd;display:flex;align-items:center;justify-content:center;border-radius:50%;padding-top:3rpx;box-sizing:border-box;margin-right:15rpx}.pls-class{color:#bdbdbd;font-size:28rpx}.icon-container{display:flex;flex-direction:row;align-items:center;margin-right:15rpx}.city{font-size:28rpx;color:#333;margin-right:10rpx}
</style>