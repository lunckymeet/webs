<template>
<uni-shadow-root class="lin-ui-dist-status-show-index"><view v-if="show" :class="'l-status-container l-class '+(fullScreen ? 'content': '')" :style="('background:'+bgColor)+';'+(fullScreen ?'align-items:center;':'')" mut-bind:tap="tapStatusShow">
  <block v-if="custom">
    <slot></slot>
  </block>
  <block v-else>
    <image v-if="image" :class="'left-img l-image-class '+(fullScreen ? 'image_margin_top': '')" :src="image"></image>
    <image v-else :class="(type=='success'||type=='error'?'left-img':'top-img')+' '+(type=='address'?'ad-img':'')+' l-image-class '+(fullScreen ? 'image_margin_top': '')" :src="typeImage"></image>
    <text v-if="describe" class="status-text l-describe-class">{{describe}}</text>
    <text v-else class="status-text l-describe-class">{{typeText}}</text>
    <l-button l-class="l-button-class button_margin_top" v-if="buttonText">
      <view>{{buttonText}}</view>
    </l-button>
    <l-button l-class="l-button-class button_margin_top" v-if="(!buttonText && type ==='network')">
      <view>重新加载</view>
    </l-button>
    <l-button l-class="l-button-class button_margin_top" v-if="(!buttonText && type ==='cart')">
      <view>去逛逛</view>
    </l-button>
  </block>
</view></uni-shadow-root>
</template>

<script>
import LButton from '../button/index.vue'
global['__wxVueOptions'] = {components:{'l-button': LButton}}

global['__wxRoute'] = 'lin-ui/dist/status-show/index'
Component({externalClasses:["l-class","l-image-class","l-button-class","l-describe-class"],properties:{show:Boolean,type:{type:String,value:"success",observer:"_changeStatus"},image:String,describe:String,buttonText:String,bgColor:{type:String,value:"#fff"},fullScreen:{type:Boolean,value:!0},openApi:{type:Boolean,value:!0},custom:{type:Boolean,value:!1}},data:{},attached(){this._changeStatus(),this.data.openApi&&this._init()},pageLifetimes:{show(){this._init()}},methods:{_init(){wx.lin=wx.lin||{},wx.lin.showStatusShow=e=>{const{type:t="success",image:a="",describe:s="",buttonText:i="",bgColor:r="#fff",fullScreen:o=!0}={...e};this.setData({show:!0,type:t,image:a,describe:s,buttonText:i,bgColor:r,fullScreen:o})},wx.lin.hideStatusShow=()=>{this.setData({show:!1})}},_changeStatus(){const e=this.data.type;if(e)switch(e){case"success":this.setData({typeImage:"image/success.png",typeText:"操作成功~"});break;case"error":this.setData({typeImage:"image/error.png",typeText:"操作失败~"});break;case"cart":this.setData({typeImage:"image/cart.png",typeText:"购物车空空如也，去逛逛吧~"});break;case"order":this.setData({typeImage:"image/order.png",typeText:"您暂时还没有订单哦~"});break;case"network":this.setData({typeImage:"image/network.png",typeText:"糟糕！网络错误~"});break;case"address":this.setData({typeImage:"image/address.png",typeText:"您暂时还没有地址哦~"});break;case"product":this.setData({typeImage:"image/product.png",typeText:"暂时还没有商品哦~~"});break;case"data":this.setData({typeImage:"image/data.png",typeText:"暂时还没有相关数据哦~~"});break;default:console.warn(e+" is not a valid value")}},tapStatusShow(){this.triggerEvent("lincorvertap",{},{bubbles:!0,composed:!0})}}});
export default global['__wxComponents']['lin-ui/dist/status-show/index']
</script>
<style platform="mp-weixin">
.l-status-container{background-color:#fff;flex-direction:column;display:flex;justify-content:center}.content{position:fixed;top:0;left:0;background:#fff;height:100%;width:100%}.ad-img{width:198rpx!important;height:204rpx!important}.top-img{width:264rpx;height:204rpx}.left-img{width:120rpx;height:184rpx}.image_margin_top{margin-top:-250rpx}.status-text{font-size:30rpx;color:#45526b;margin-top:40rpx}.button_margin_top{margin-top:80rpx}
</style>