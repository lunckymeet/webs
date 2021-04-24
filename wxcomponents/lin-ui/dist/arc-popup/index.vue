<template>
<uni-shadow-root class="lin-ui-dist-arc-popup-index"><l-popup :show="show" :direction="direction" :transition="transition" :opacity="opacity" :locked="locked" :z-index="zIndex" l-class="l-class" l-bg-class="l-bg-class" @lintap="onArcPopupTap">
  <scroll-view scroll-y="true" class="arc-popup l-panel-class" :style="arcStyle">
    <view :class="'header-popup '+(headerFixed ? 'fixed' : '')+' l-header-class'">
      <slot name="header"></slot>
    </view>
    <view class="content-arc-popup">
      <slot></slot>
    </view>
  </scroll-view>
</l-popup></uni-shadow-root>
</template>

<script>
import LPopup from '../popup/index.vue'
global['__wxVueOptions'] = {components:{'l-popup': LPopup}}

global['__wxRoute'] = 'lin-ui/dist/arc-popup/index'
import validator from"../behaviors/validator";import zIndex from"../behaviors/zIndex";const detail=!0,option={bubbles:!0,composed:!0};Component({behaviors:[zIndex,validator],externalClasses:["l-class","l-panel-class","l-bg-class","l-header-class"],options:{multipleSlots:!0},properties:{show:{type:Boolean,value:!1},maxHeight:{type:Number,value:600},minHeight:{type:Number,value:200},arcRadius:{type:Number,value:18},transition:{type:Boolean,value:!0},locked:{type:Boolean,value:!1},opacity:{type:Number,value:.4},direction:{type:String,options:["top","bottom"],value:"bottom"},headerFixed:{type:Boolean,value:!0}},data:{_arcRadiusTop:12,_ardRadiusBottom:18,arcStyle:""},observers:{show:function(t){t?(this.triggerEvent("linshow",!0,option),this.getArcPopupStyle()):this.triggerEvent("linclose",!0,option)},arcRadius:function(t){"top"===this.properties.direction?this.data._arcRadiusTop=t:this.data._ardRadiusBottom=t,this.getArcPopupStyle()}},pageLifetimes:{show(){this._init()}},methods:{_init(){wx.lin=wx.lin||{},wx.lin.showArcPopup=t=>{const{zIndex:o=99,tranistion:e=!0,direction:i="bottom",locked:a=!1}={...t};this.setData({zIndex:o,tranistion:e,direction:i,locked:a,show:!0})},wx.lin.hideArcPopup=()=>{this.setData({show:!1})}},getArcPopupStyle(){const t=this.properties.direction,o=this.data._arcRadiusTop,e=this.data._ardRadiusBottom,i=`\n        border-bottom-left-radius:${"top"===t?o:0}rpx;\n        border-bottom-right-radius:${"top"===t?o:0}rpx;\n        border-top-left-radius:${"bottom"===t?e:0}rpx;\n        border-top-right-radius:${"bottom"===t?e:0}rpx;\n        max-height:${this.properties.maxHeight}rpx;\n        min-height:${this.properties.minHeight}rpx;\n      `;this.setData({arcStyle:i})},onArcPopupTap(){this.data.locked||this.properties.show&&this.setData({show:!1})}},ready(){this.getArcPopupStyle()}});
export default global['__wxComponents']['lin-ui/dist/arc-popup/index']
</script>
<style platform="mp-weixin">
.container-arc-popup{width:100%}.arc-popup{overflow:hidden;width:100%;background:#fff}.content-arc-popup{padding:30rpx;box-sizing:border-box}.header-popup{width:100%;z-index:999}.header-popup.fixed{position:sticky;top:0;background-color:#fff}
</style>