<template>
<uni-shadow-root class="lin-ui-dist-collapse-item-index"><view class="container l-class">
  <view mut-bind:tap="onTapTitle" class="container-title l-title-class">
    <view :style="disable?'color:#DEE2E6':''" v-if="(!customTitle)">{{title}}</view>
    <l-icon class="container-title-icon" v-if="(!customTitle)" :style="isExpandContent?'transform:rotate(-180deg);':''" name="down" size="28" :color="disable?'#DEE2E6':'#333'"></l-icon>
    <slot name="title"></slot>
  </view>
  <view @transitionend.stop.prevent="onTransitionend" class="container-body" :style="'height:'+(bodyHeight)+';transition-duration:'+(animationTime)+'s'">
    <view class="container-body-wrapper l-body-class">
      <slot></slot>
    </view>
  </view>
</view></uni-shadow-root>
</template>

<script>
import LList from '../list/index.vue'
import LIcon from '../icon/index.vue'
global['__wxVueOptions'] = {components:{'l-list': LList,'l-icon': LIcon}}

global['__wxRoute'] = 'lin-ui/dist/collapse-item/index'
import nodeUtil from"../core/utils/node-util";Component({externalClasses:["l-class","l-title-class","l-body-class"],relations:{"../collapse/index":{type:"parent"}},options:{multipleSlots:!0,pureDataPattern:/^_/},properties:{itemId:{type:String,value:"default"},title:{type:String,value:"默认标题"},customTitle:{type:Boolean,value:!1},disable:{type:Boolean,value:!1},animationTime:{type:String,value:"0.3"}},data:{bodyHeight:"0",isExpandContent:!1,_idDefault:-1},methods:{async onTapTitle(){if(this.data.disable)return;let t=this.getRelationNodes("../collapse/index");await t[0].onTapCollapseItem(this)},async foldContent(){const t=await nodeUtil.getNodeRectFromComponent(this,".container-body-wrapper");this.data.isExpandContent?(this.setData({bodyHeight:t.height+"px"}),setTimeout(()=>{this.setData({isExpandContent:!1,bodyHeight:"0px"})},20)):this.setData({isExpandContent:!1,bodyHeight:"0px"})},async expandContent(){const t=await nodeUtil.getNodeRectFromComponent(this,".container-body-wrapper");this.setData({isExpandContent:!0,bodyHeight:t.height+"px"})},onTransitionend(){this.data.isExpandContent&&this.setData({bodyHeight:"auto"})}}});
export default global['__wxComponents']['lin-ui/dist/collapse-item/index']
</script>
<style platform="mp-weixin">
.container{display:flex;flex-direction:column;width:100%;box-sizing:border-box}.container-title{display:flex;justify-content:space-between;padding:10rpx;align-items:center;font-size:32rpx;color:#333}.container-title-l-icon{transition:.3s}.container-body{width:100%;color:#888;box-sizing:border-box;font-size:28rpx;transition:height .3s ease-in-out;overflow:hidden}.container-body-wrapper{position:relative;padding:10rpx}
</style>