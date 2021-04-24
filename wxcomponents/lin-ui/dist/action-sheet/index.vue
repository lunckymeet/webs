<template>
<uni-shadow-root class="lin-ui-dist-action-sheet-index"><l-popup :show="show" :showMask="true" contentAlign="bottom" :locked="locked" @lintap="handleClickPopUp" :z-index="zIndex">
    <view class="l-action-sheet">
        <view class="l-item-button l-class-title l-title-class" v-if="title">
            {{ title }}
        </view>
        <view v-for="(item,index) in (itemList)" :key="item.name" :hover-class="isHover?'list-hover':''">
            <l-button @lintap="handleClickItem" :data-index="index" :data-item="item" :open-type="item.openType" :icon="item.icon" type="default" size="large" :special="true" long>
                <view :style="item.color ? 'color: ' + item.color : ''" :class="'l-item-button l-class-item l-item-class '+(item.image || item.icon ? 'l-image-button':'')">
                    <image v-if="item.image" class="l-button-image" :src="item.image" :style="item.imageStyle"></image>
                    <l-icon v-else-if="item.icon" :name="item.icon" l-class="l-item-button" :size="item.iconSize" :color="item.iconColor?item.iconColor:item.color"></l-icon>
                    <text class="l-button-text">{{ item.name }}</text>
                </view>
            </l-button>
        </view>
        <view :class="'l-cancel l-class-cancel l-cancel-class '+(isIphoneX ? 'l-cancel-x':'')" v-if="showCancel" :hover-class="isHover?'list-hover':''">
            <l-button type="default" size="large" long="true" @lintap="handleClickCancel" :special="true">
                <view class="l-item-button l-cancel-button">{{ cancelText }}</view>
            </l-button>
        </view>
    </view>
</l-popup></uni-shadow-root>
</template>

<script>
import LIcon from '../icon/index.vue'
import LPopup from '../popup/index.vue'
import LButton from '../button/index.vue'
global['__wxVueOptions'] = {components:{'l-icon': LIcon,'l-popup': LPopup,'l-button': LButton}}

global['__wxRoute'] = 'lin-ui/dist/action-sheet/index'
import zIndex from"../behaviors/zIndex";import hover from"../behaviors/hover";Component({behaviors:[zIndex,hover],externalClasses:["l-class-title","l-class-item","l-class-cancel","l-title-class","l-item-class","l-cancel-class"],properties:{locked:Boolean,showCancel:Boolean,show:Boolean,itemList:Array,cancelText:{type:String,value:"取消"},title:String,zIndex:{type:Number,value:777},openApi:{type:Boolean,value:!0}},data:{success:"",fail:"",isIphoneX:!1},attached(){this.data.openApi&&this.initActionSheet(),this.initUIAdapter()},pageLifetimes:{show(){this.data.openApi&&this.initActionSheet()}},methods:{initUIAdapter(){wx.getSystemInfo({success:e=>{this.setData({isIphoneX:"iPhone X"===e.model})}})},initActionSheet(){wx.lin=wx.lin||{},wx.lin.showActionSheet=(e={})=>{const{itemList:t=[],success:s=null,fail:i=null,title:a="",locked:l=!1,cancelText:n="取消",showCancel:c=!1}=e;return this.setData({itemList:t.slice(0,10),success:s,fail:i,title:a,locked:l,cancelText:n,showCancel:c,show:!0}),this}},handleClickItem(e){const{success:t}=this.data;t&&t({...e.currentTarget.dataset}),this.triggerEvent("linitemtap",{...e.currentTarget.dataset},{bubbles:!0,composed:!0}),this._hideActionSheet()},_showActionSheet(){this.setData({show:!0})},_hideActionSheet(){this.setData({show:!1})},handleClickCancel(){const{fail:e}=this.data;e&&e({errMsg:"showactionsheet:fail cancel"}),this.triggerEvent("lincancel",{errMsg:"showactionsheet:fail cancel"},{bubbles:!0,composed:!0}),this._hideActionSheet()},handleClickPopUp(){this.data.locked||this.handleClickCancel()}}});
export default global['__wxComponents']['lin-ui/dist/action-sheet/index']
</script>
<style platform="mp-weixin">
.l-action-sheet{background:#f7f7f7}.l-item-button{height:88rpx;line-height:88rpx;text-align:center;background:#fff;border-bottom:2rpx solid #f3f3f3;font-size:28rpx;color:#45526b;display:flex;align-items:center;justify-content:center;width:100%;overflow:hidden}.l-cancel{margin-top:12rpx}.l-cancel-x .l-item-button{padding-bottom:44rpx}.l-image-button>.l-button-text{margin-left:20rpx}.list-hover{opacity:.8}
</style>