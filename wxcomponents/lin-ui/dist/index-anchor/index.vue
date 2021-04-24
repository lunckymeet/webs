<template>
<uni-shadow-root class="lin-ui-dist-index-anchor-index"><view class="anchor-wrapper" :style="anchorWrapperStyle">
  <view class="anchor" :style="anchorStyle">
    <view v-if="anchorSlot.height!==0" class="anchor-slot">
      <slot></slot>
    </view>

    <view v-if="anchorSlot.height===0" class="anchor-default l-anchor-class">
      {{anchorText}}
    </view>
  </view>
</view></uni-shadow-root>
</template>

<script>
import LIndexList from '../index-list/index.vue'
global['__wxVueOptions'] = {components:{'l-index-list': LIndexList}}

global['__wxRoute'] = 'lin-ui/dist/index-anchor/index'
import nodeUtil from"../core/utils/node-util";Component({externalClasses:["l-anchor-class"],options:{multipleSlots:!0,pureDataPattern:/^_/},relations:{"../index-list/index":{type:"parent"}},data:{anchorSlot:{height:-1},anchor:{height:0},anchorText:"",anchorStyle:"",anchorWrapperStyle:""},lifetimes:{attached(){this.parseAnchorSlotRect()}},methods:{async parseAnchorSlotRect(){const t=await nodeUtil.getNodeRectFromComponent(this,".anchor-slot");t?this.setData({"anchorSlot.height":t.height}):this.setData({"anchorSlot.height":0})},async parseAnchorRect(){const t=await nodeUtil.getNodeRectFromComponent(this,".anchor");t&&this.setData({"anchor.height":t.height})},setFixed(t,e){const a=`\n        position:fixed;\n        top:${t}rpx;\n      `,o=`height:${e}px;`;this.setData({anchorStyle:a,anchorWrapperStyle:o})},setRelative(t){const e=`\n        position:relative;\n        transform: translate3d(0, ${t}px, 0);\n       `;this.setData({anchorStyle:e})},clearStyle(){this.setData({anchorStyle:"",anchorWrapperStyle:""})},isRelative(){return this.data.anchorStyle.indexOf("relative")>0},isFixed(){return this.data.anchorStyle.indexOf("fixed")>0}}});
export default global['__wxComponents']['lin-ui/dist/index-anchor/index']
</script>
<style platform="mp-weixin">
.anchor-wrapper{width:100%}.anchor-wrapper .anchor{width:100%}.anchor-wrapper .anchor-default{width:100%;background-color:#f7f8fa;display:flex;align-items:center;padding:8rpx 0 8rpx 30rpx;font-size:26rpx;font-weight:700;color:#323132;box-sizing:border-box}
</style>