<template>
<uni-shadow-root class="lin-ui-dist-album-index"><view style="display:flex">
  <view :style="album.gridStyle(gapRow, gapColumn, multipleSize, everyRowNumber)">
    <block v-for="(item,index) in (showUrls)" :key="item.index" class="child">
      <view :class="'imageContainer '+(album.dimBack(isLong, index, maxNumber, previewFullImage))" :style="album.blockStyle(urls, horizontalScreen, shortSideValue, singleSize, multipleSize)">
        <image :class="(album.dim(isLong, index, maxNumber, previewFullImage))+'}'" :id="index" @click="onPreviewTap" :style="album.blockStyle(urls, horizontalScreen, shortSideValue, singleSize, multipleSize)" :src="newType?item[key]:item" :mode="urls.length === 1?singleMode:multipleMode"></image>
        <view v-if="album.image(isLong, index, maxNumber, previewFullImage)" class="text">+{{urls.length-maxNumber}}</view>
      </view>
    </block>
  </view>
</view></uni-shadow-root>
</template>
<wxs src="index.wxs" module="album"></wxs>
<script>

global['__wxVueOptions'] = {components:{}}

global['__wxRoute'] = 'lin-ui/dist/album/index'
Component({externalClasses:["l-class","l-single-image-class","l-multi-image-class"],properties:{urls:{type:Array},preview:{type:Boolean,value:!0},gapRow:{type:Number,value:10},gapColumn:{type:Number,value:10},singleSize:{type:Number,value:360},multipleSize:{type:Number,value:158},singleMode:{type:String,value:"aspectFit"},multipleMode:{type:String,value:"aspectFill"},key:{type:String,value:"url"},maxNumber:{type:Number,value:9},customRowNumber:{type:Boolean,value:!1},everyRowNumber:{type:Number,value:3},previewFullImage:{type:Boolean,value:!0}},data:{newType:!0,shortSideValue:0,showUrls:[],isLong:!1},observers:{urls:function(){this.init()}},methods:{init(){let{urls:e,maxNumber:t,key:a}=this.data;if(e.length>t&&(e=e.slice(0,t),this.setData({isLong:!0})),this.setData({showUrls:e}),!this.data.customRowNumber){let e=this.data.showUrls.length;e>1&&e<5?this.setData({everyRowNumber:2}):this.setData({everyRowNumber:3})}const s=this.judgeType();this.setData({newType:s}),1===e.length&&this.horizontalOrVertical(s?e[0][a]:e[0])},judgeType(){const e=this.data.urls;return 0===e.length||"object"==typeof e[0]},horizontalOrVertical:function(e){wx.getImageInfo({src:e,success:e=>{const t=e.width>=e.height?e.width:e.height,a=e.width>=e.height?e.height:e.width;this.setData({horizontalScreen:e.width>=e.height,shortSideValue:a*this.data.singleSize/t})}})},onPreviewTap(e){const t=e.currentTarget.id;let a;a=this.data.previewFullImage?this.data.urls:this.data.showUrls;let s="",i=[];const l=this.data.newType,r=this.data.key;if(l){s=a[t][r];for(let e=0;e<a.length;e++)i.push(a[e][r])}else s=a[t],i=a;let h={index:t,current:a[t],all:a};!0===this.data.preview&&wx.previewImage({current:s,urls:i}),this.triggerEvent("lintap",h,{})}}});
export default global['__wxComponents']['lin-ui/dist/album/index']
</script>
<style platform="mp-weixin">
.container{display:grid}.vertical{height:360rpx}.parent{display:inline-grid;grid-template-columns:repeat(auto-fill)}.child{box-sizing:border-box;background-color:#fff;flex:0 0 44%;height:100px;border:1px solid red;margin-top:4%;margin-left:2%;margin-right:2%}.dimback{background:#000}.dim{opacity:.6}.imageContainer{position:relative}.imageContainer:last-child>.text{color:#fff;font-weight:700;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:larger}
</style>