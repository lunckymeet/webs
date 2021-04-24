<template>
<uni-shadow-root class="lin-ui-dist-tab-bar-index"><view class="lu-tab-bar" :style="(bgColor?'background-color:'+bgColor+';':'')+' '+(bgImg?'background-image: url('+bgImg+');':'')">
  <view v-for="(item,index) in (list)" :key="item.index" class="lu-tab-bar__item-wrapper" :data-index="index" mut-bind:tap="onTapItem" :style="'width:'+(750/list.length)+'rpx'">
    <view class="lu-tab-bar__item-container">
      
      <l-badge :show="item.redDot" :dot="item.redDot===true" :value="item.redDot" :data-index="index" mut-bind:lintap="onTapItem">
        <image :class="'lu-tab-bar__item-image '+(selectedIndex===index?'lu-tab-bar__item-image--selected':'')" :src="selectedIndex===index?item.selectedIconPath:item.iconPath"></image>
      </l-badge>
      
      <view v-if="item.text!==undefined" :class="'lu-tab-bar__item-text '+(selectedIndex===index?'lu-tab-bar__item-text--selected':'')" :style="'color:'+(selectedIndex===index?textSelectedColor:textColor)">
        {{item.text}}
      </view>
    </view>
  </view>
</view></uni-shadow-root>
</template>

<script>
import LBadge from '../badge/index.vue'
global['__wxVueOptions'] = {components:{'l-badge': LBadge}}

global['__wxRoute'] = 'lin-ui/dist/tab-bar/index'
import eventUtil from"../core/utils/event-util";Component({properties:{bgColor:{type:String,value:null},bgImg:{type:String,value:null},selectedIndex:{type:Number,value:0},list:{type:Array,value:[]},textSelectedColor:{type:String,value:"#3963bc"},textColor:{type:String,value:"#666"}},data:{selectedIndex:0},pageLifetimes:{show:function(){this.parseCurrentPage()}},methods:{parseCurrentPage(){const t="/"+getCurrentPages()[0].route,e=this.data.list;let i;for(let a=0;a<e.length;a++)if(e[a].pagePath===t){i=a;break}if(void 0===i)return;this.setData({selectedIndex:i});const a=this.data.list[i];eventUtil.emit(this,"linchange",{index:i,item:a})},onTapItem(t){const e=t.currentTarget.dataset.index,i=this.data.list[e].pagePath;eventUtil.emit(this,"lintap",{index:e,item:this.data.list[e]}),i&&wx.switchTab({url:i,fail(){wx.navigateTo({url:i,fail(t){console.warn("路由跳转错误，错误信息为：",t)}})}})}}});
export default global['__wxComponents']['lin-ui/dist/tab-bar/index']
</script>
<style platform="mp-weixin">
.lu-tab-bar{left:0;right:0;bottom:0;position:fixed;z-index:9999;width:750rpx;height:106rpx;display:flex;background-color:#fff;background-size:100% 100%;background-repeat:no-repeat;padding-bottom:constant(safe-area-inset-bottom)!important;padding-bottom:env(safe-area-inset-bottom)!important}.lu-tab-bar__item-wrapper{display:flex;height:100%;justify-content:center;padding-bottom:constant(safe-area-inset-bottom)!important;padding-bottom:env(safe-area-inset-bottom)!important}.lu-tab-bar__item-container{display:flex;flex-direction:column;align-items:center;justify-content:center}.lu-tab-bar__item-image{display:block;width:52rpx;height:52rpx}.lu-tab-bar__item-text{margin-top:4rpx;font-size:24rpx;line-height:1}
</style>