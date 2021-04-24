<template>
<uni-shadow-root class="lin-ui-dist-progress-index"><view class="container l-class">
    <view class="text l-text-class" v-if="showInfo && textPosition==='left'" :style="'color:'+(textColor?textColor:'')+';margin-right:'+(interval)+'rpx'">
        {{percent}}%
    </view>
    <view class="progress short" :style="'height:'+(strokeWidth)+'rpx;'">
        <view class="slot" :style="'margin-left:'+(marginLeft)+'rpx;margin-top:'+(marginTop)+'rpx;'">
            <slot name="header"></slot>
        </view>
        <view :class="'percent '+(activeColor?'':'active')+' l-active-class'" :style="'width:'+(percent)+'%;height:'+(strokeWidth)+'rpx;border-radius:'+(borderRadius)+'rpx;'+(activeColor?'background-color:'+activeColor+';':'')"></view>
        <view class="background l-background-class" :style="'height:'+(strokeWidth)+'rpx;border-radius:'+(borderRadius)+'rpx;background-color:'+(backgroundColor)+';'"></view>
    </view>
    <view class="text l-text-class" v-if="showInfo && textPosition==='right'" :style="'color:'+(textColor?textColor:'')+';margin-left:'+(interval)+'rpx'">
        {{percent}}%
    </view>
</view></uni-shadow-root>
</template>

<script>

global['__wxVueOptions'] = {components:{}}

global['__wxRoute'] = 'lin-ui/dist/progress/index'
import{px2rpx}from"../utils/util.js";import validator from"../behaviors/validator";Component({externalClasses:["l-class","l-text-class","l-active-class","l-background-class"],behaviors:[validator],properties:{percent:{type:Number,value:0},strokeWidth:{type:Number,value:12},borderRadius:{type:Number,value:6},activeColor:{type:String},backgroundColor:{type:String,value:"#EBEBEB"},showInfo:{type:Boolean,value:!1},textPosition:{type:String,value:"right",options:["left","right"]},textColor:{type:String},interval:{type:Number,value:20},active:{type:Boolean,value:!1},duration:{type:Number,value:30}},options:{multipleSlots:!0,pureDataPattern:/^_/},data:{_slotWidth:0,_slotHeight:0,_progressWidth:0,_progressHeight:0,_marginBottom:0,marginLeft:0,marginTop:0,_useSlot:!1},observers:{"_slotWidth, _slotHeight, _progressWidth, _progressHeight, percent,_useSlot":function(t,e,r,i,s,a){if(a){const a=-(e-i)/2,o=(r-t)*s/100;this.setData({marginTop:a,marginLeft:o})}}},lifetimes:{attached(){this.data.percent>100&&this.setData({percent:100});wx.createSelectorQuery().in(this).select(".slot").boundingClientRect(t=>{let e=this.data._useSlot;t.width&&(e=!0),this.setData({_useSlot:e,_slotWidth:px2rpx(t.width),_slotHeight:px2rpx(t.height)})}).exec();wx.createSelectorQuery().in(this).select(".progress").boundingClientRect(t=>{this.setData({_progressHeight:px2rpx(t.height),_progressWidth:px2rpx(t.width)})}).exec();const t=this.data.percent;let e=0;this.data.active&&setInterval(()=>{e<t&&(e+=1,this.setData({percent:e}))},this.data.duration)}},methods:{}});
export default global['__wxComponents']['lin-ui/dist/progress/index']
</script>
<style platform="mp-weixin">
.container{display:flex;flex-direction:row;align-items:center}.progress{position:relative;width:100%;transition:all .25s ease-in-out}.percent{position:absolute;z-index:1}.active{background-color:#3963bc}.text{color:#3963bc;font-size:30rpx}.background{position:absolute;width:100%}.header{position:absolute!important;z-index:2}.slot{position:absolute;z-index:2}
</style>