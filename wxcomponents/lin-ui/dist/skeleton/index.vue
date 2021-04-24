<template>
<uni-shadow-root class="lin-ui-dist-skeleton-index"><view v-if="loading" class="l-skeleton-container l-class">

  <view v-if="avatar" :class="'l-avatar-class l-skeleton-avatar bg '+(active?'active':'')+' l-skeleton-avatar-'+(avatarShape)" :style="'width:'+(avatarSize)+';height:'+(avatarSize)"></view>

  <view class="l-skeleton-right">
    <view v-if="title" class="l-skeleton-title-container" :style="'height:'+(avatarSize)">
      <view :class="'l-skeleton-title bg '+(active?'active':'')" :style="'height:'+(titleHeight)"></view>
    </view>

    <view v-for="(item,index) in (r)" :key="item.index" v-if="paragraph" :class="'l-row-class l-skeleton-rows bg '+(active?'active':'')" :style="'height:'+(item.height)+';width:'+(item.width)"></view>
  </view>

</view>

<slot v-else></slot></uni-shadow-root>
</template>

<script>

global['__wxVueOptions'] = {components:{}}

global['__wxRoute'] = 'lin-ui/dist/skeleton/index'
import validator from"../behaviors/validator";Component({externalClasses:["l-class","l-title-class","l-avatar-class","l-row-class"],behaviors:[validator],properties:{loading:{type:Boolean,value:!0},title:{type:Boolean,value:!0},paragraph:{type:Boolean,value:!0},active:{type:Boolean,value:!0},avatar:Boolean,titleWidth:String,avatarSize:String,avatarShape:{type:String,value:"circle",options:["circle","square"]},rowsWidth:{type:Array,optionalTypes:[Array,String],value:"60%"},rowsHeight:{type:Array,optionalTypes:[Array,String],value:"34rpx"},rows:Number},observers:{"rows,rowsWidth,rowsHeight":function(t,a,e){this._getResult(t,a,"rowsW","100%"),this._getResult(t,e,"rowsH","34rpx"),this._toRows(t)}},data:{},methods:{_arrRepeat(t,a){const e=[];for(let r=0;r<a-1;r++)e.push(t);return e},_getResult(t,a,e,r){if(Array.isArray(a))this.data[e]=a;else{const s=this._arrRepeat(r,t);s.push(a),this.data[e]=s}},_toRows(t){let a=[];for(let e=0;e<t;e++)a.push({width:this.data.rowsW[e],height:this.data.rowsH[e]});this.setData({r:a})}}});
export default global['__wxComponents']['lin-ui/dist/skeleton/index']
</script>
<style platform="mp-weixin">
.l-skeleton-container{width:100%;display:flex;flex-direction:row;box-sizing:border-box}.l-skeleton-avatar{height:72rpx;width:72rpx;margin-right:20rpx}.l-skeleton-avatar-circle{border-radius:50%}.l-skeleton-right{display:flex;flex-direction:column;flex:1}.l-skeleton-title{width:100%;height:34rpx}.l-skeleton-title-container{height:72rpx;width:50%;display:flex;align-items:center}.l-skeleton-rows{margin-top:20rpx}.bg{background:linear-gradient(90deg,#f2f2f2 25%,#e6e6e6 37%,#f2f2f2 63%);background-size:400% 100%}.active{animation:loading 1.4s ease infinite}@keyframes loading{0%{background-position:100% 50%}100%{background-position:0 50%}}
</style>