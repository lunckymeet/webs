<template>
<uni-shadow-root class="lin-ui-dist-image-clipper-tools-index"><view class="tools-container l-class" @touchmove.stop.prevent="_$self[(true)||'_$noop']($event)" :style="'z-index: '+(zIndex)+';'">
    <view class="tools-form">
        <view v-if="lockWidth">
            锁定裁剪框宽
            <switch :model:checked="lockWidthValue" :color="formColor" @change="bindSwitchChange" data-type="lockWidth" class="tools-switch"></switch>
        </view>
        <view v-if="lockHeight">
            锁定裁剪框高
            <switch :model:checked="lockHeightValue" :color="formColor" @change="bindSwitchChange" data-type="lockHeight" class="tools-switch"></switch>
        </view>
        <view v-if="lockRatio">
            锁定裁剪框比例
            <switch :model:checked="lockRatioValue" :color="formColor" @change="bindSwitchChange" data-type="lockRatio" class="tools-switch"></switch>
        </view>
         <view v-if="limitMove">
            限制移动范围
            <switch :model:checked="limitMoveValue" :color="formColor" @change="bindSwitchChange" data-type="limitMove" class="tools-switch"></switch>
        </view>
        <view v-if="disableScale">
            禁止缩放
            <switch :model:checked="disableScaleValue" :color="formColor" @change="bindSwitchChange" data-type="disableScale" class="tools-switch"></switch>
        </view>
        <view v-if="disableRotate">
            禁止旋转
            <switch :model:checked="disableRotateValue" :color="formColor" @change="bindSwitchChange" data-type="disableRotate" class="tools-switch"></switch>
        </view>
    </view>
</view></uni-shadow-root>
</template>

<script>

global['__wxVueOptions'] = {components:{}}

global['__wxRoute'] = 'lin-ui/dist/image-clipper-tools/index'
Component({relations:{"../image-clipper/index":{type:"parent"}},externalClasses:["l-class"],properties:{zIndex:{type:Number,value:999},lockWidth:{type:Boolean,value:!1},lockHeight:{type:Boolean,value:!1},lockRatio:{type:Boolean,value:!1},disableScale:{type:Number,value:!1},disableRotate:{type:Number,value:!1},limitMove:{type:Boolean,value:!1}},data:{formColor:"#3963bc",lockWidthValue:!1,lockHeightValue:!1,lockRatioValue:!0,disableScaleValue:!1,disableRotateValue:!1,limitMoveValue:!1},methods:{bindSwitchChange:async function(e){const a=e.detail.value,l=e.currentTarget.dataset.type;let t=this.getRelationNodes("../image-clipper/index")[0];await t.setData({[l]:a})}}});
export default global['__wxComponents']['lin-ui/dist/image-clipper-tools/index']
</script>
<style platform="mp-weixin">
.tools-container{width:100%;padding:20rpx 40rpx;box-sizing:border-box}.tools-container .tools-form{margin-top:20rpx;display:flex;flex-wrap:wrap;color:#fff}.tools-container .tools-form .slider-wrapper{display:flex;align-items:center}.tools-container .tools-form .tools-switch{transform:scale(.7)}
</style>