<template>
<uni-shadow-root class="lin-ui-dist-sticky-item-index"><view class="l-sticky-item l-class">
  
  <view class="l-sticky-item-header-wrapper l-header-wrapper-class" :style="'height:'+(isFixedTop&&stickyItemWrapperHeight?stickyItemWrapperHeight+'px':'auto')"></view>
  <view :style="(mode==='js'?(isFixedTop?'position:fixed;':''):'')+' top:'+(top)+'rpx'" :class="'l-sticky-item-header l-sticky-item-header'+(mode==='js'?(isFixedTop?'-fixed l-header-sticky-class':''):(mode==='css'?'-sticky l-header-sticky-class':''))+' l-header-class'">
    <slot name="header"></slot>
  </view>
  <view class="l-sticky-item-body l-body-class">
    <slot name="body"></slot>
  </view>
</view></uni-shadow-root>
</template>

<script>

global['__wxVueOptions'] = {components:{}}

global['__wxRoute'] = 'lin-ui/dist/sticky-item/index'
import nodeUtil from"../core/utils/node-util";Component({externalClasses:["l-class","l-header-wrapper-class","l-header-class","l-header-sticky-class","l-body-class"],options:{multipleSlots:!0},relations:{"../sticky/index":{type:"parent"}},properties:{top:{type:Number,value:0}},data:{mode:void 0,index:void 0,isFixedTop:!1,stickyItemTop:0,stickyItemHeight:0,stickyItemWrapperHeight:void 0},lifetimes:{ready:function(){const t=this.getParentComponent().data.mode;this.setData({mode:t})}},methods:{updateStickyItemPosition(t){const e=this.getParentComponent(),{index:i,stickyItemTop:s,stickyItemHeight:o,top:a}=this.data,n=t>s-a&&t<o+s-a;this.data.isFixedTop!==n&&(n?e.triggerEvent("linsticky",{index:i}):e.triggerEvent("linunsticky",{index:i}),this.setData({isFixedTop:n}))},async updateStickyItemBaseData(t){this.setData({index:t});const e=this.getParentComponent().data.scrollTop,i=await nodeUtil.getNodeRectFromComponent(this,".l-sticky-item");this.setData({stickyItemTop:i.top+e,stickyItemHeight:i.height});const s=await nodeUtil.getNodeRectFromComponent(this,".l-sticky-item-header");this.setData({stickyItemWrapperHeight:s.height})},getParentComponent(){const t=this.getRelationNodes("../sticky/index");if(0!==t.length)return t[0]}}});
export default global['__wxComponents']['lin-ui/dist/sticky-item/index']
</script>
<style platform="mp-weixin">
.l-sticky-item{display:flex;flex-direction:column}.l-sticky-wrapper{overflow:visible}.l-sticky-item-header{width:100%}.l-sticky-item-header-fixed{position:fixed;top:0}@supports (position:sticky){.l-sticky-item-header-sticky{position:sticky}}
</style>