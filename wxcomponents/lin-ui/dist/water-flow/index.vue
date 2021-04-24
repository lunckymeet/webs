<template>
<uni-shadow-root class="lin-ui-dist-water-flow-index"><view class="l-class water-flow-container" v-if="data.length!==0">
  <view class="water-column" :style="'margin-right:'+(columnGap)">
    <view id="left">
      <block v-for="(item,index) in (leftData)" :key="item.index">
        <l-water-flow-item :data-item="item" @click.native.stop.prevent="onTapItem" :data="item"></l-water-flow-item>
      </block>
    </view>
  </view>
  <view class="water-column">
    <view id="right">
      <block v-for="(item,index) in (rightData)" :key="item.index">
        <l-water-flow-item :data-item="item" @click.native.stop.prevent="onTapItem" :data="item"></l-water-flow-item>
      </block>
    </view>
  </view>
</view></uni-shadow-root>
</template>

<script>

global['__wxVueOptions'] = {components:{}}

global['__wxRoute'] = 'lin-ui/dist/water-flow/index'
import eventUtil from"../core/utils/event-util";Component({properties:{columnGap:{type:String,value:"20rpx"}},data:{data:[],leftData:[],rightData:[]},attached(){this._init()},pageLifetimes:{show(){this._init()}},methods:{_init(){wx.lin=wx.lin||{},wx.lin.renderWaterFlow=(t=[],e=!1,a)=>{if("[object Array]"!==Object.prototype.toString.call(t))return console.error("[data]参数类型错误，渲染失败"),!1;this.setData({data:t}),e&&(this.data.leftData=[],this.data.rightData=[]),this._select(t,e).then(()=>{a&&a()}).catch(t=>{console.error(t)})}},_select(t,e){const a=wx.createSelectorQuery().in(this);return this.columnNodes=a.selectAll("#left, #right"),new Promise(a=>{this._render(t,0,e,()=>{a()})})},_render(t,e,a,i){(t.length>e||a)&&0!==this.data.data.length?this.columnNodes.boundingClientRect().exec(h=>{const r=h[0];this.data.leftHeight=r[0].height,this.data.rightHeight=r[1].height,this.data.leftHeight<=this.data.rightHeight||a?this.data.leftData.push(t[e]):this.data.rightData.push(t[e]),this.setData({leftData:this.data.leftData,rightData:this.data.rightData},()=>{this._render(t,++e,!1,i)})}):i&&i()},onTapItem(t){eventUtil.emit(this,"linitemtap",{item:t.currentTarget.dataset.item})}}});
export default global['__wxComponents']['lin-ui/dist/water-flow/index']
</script>
<style platform="mp-weixin">
.water-flow-container{display:flex;width:100%;box-sizing:border-box;background:0 0}.water-column{flex:1}
</style>