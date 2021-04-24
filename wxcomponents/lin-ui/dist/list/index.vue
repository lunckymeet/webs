<template>
<uni-shadow-root class="lin-ui-dist-list-index"><view class="l-list l-class" :hover-class="isHover?'l-list-hover':''" hover-start-time="20" hover-stay-time="50" :style="(gap?'padding:0 '+gap+'rpx;':'')+' '+(leftGap?'padding-left:'+leftGap+'rpx':'')+' '+(rightGap?'padding-right:'+rightGap+'rpx':'')" mut-bind:tap="tapcell" :data-url="url" :data-link-type="linkType">
    
    <l-badge v-if="(badgeCount > 0 || dotBadge ) && badgePosition ==='left'" :value="badgeCount" :dot="dotBadge" :max-count="badgeMaxCount" :number-type="badgeCountType">
        <cell-left-main v-bind="{image,icon,title,desc,tagContent,tagPosition,tagColor,tagShape,tagPlain,iconSize,iconColor}" wx-template-name="cell-left-main"></cell-left-main>
    </l-badge>
    <cell-left-main v-bind="{image,icon,title,desc,tagContent,tagPosition,tagColor,tagShape,tagPlain,iconSize,iconColor}" v-else wx-template-name="cell-left-main"></cell-left-main>
    
    <l-badge l-class="badge-right" v-if="(badgeCount > 0 || dotBadge ) && badgePosition ==='right'" :value="badgeCount" :dot="dotBadge" :max-count="badgeMaxCount" :number-type="badgeCountType">
        <cell-right-main v-bind="{rightDesc,tagContent,tagPosition,isLink,tagColor,tagShape,tagPlain}" wx-template-name="cell-right-main"></cell-right-main>
    </l-badge>
    <cell-right-main v-bind="{rightDesc,tagContent,tagPosition,isLink,tagColor,tagShape,tagPlain}" v-else wx-template-name="cell-right-main"></cell-right-main>
</view>
<template v-if="wxTemplateName === 'cell-left-main'">
    <view class="left-section">
        <image v-if="image" class="l-image l-class-image l-image-class" :src="image" mode="aspectFit|aspectFill|widthFix"></image>
        <l-icon v-else-if="icon" l-class="l-icon l-class-icon l-icon-class" :name="icon" :size="iconSize" :color="iconColor"></l-icon>
        <view class="l-text">
            <view class="l-class-content l-content-class">{{title}}</view>
            <view class="l-desc l-class-desc l-desc-class" v-if="desc">{{desc}}</view>
        </view>
        <l-tag size="mini" :shape="tagShape" :bg-color="tagColor" l-class="cell-tag" v-if="tagContent && tagPosition ==='left' && !tagPlain">{{tagContent}}</l-tag>
        <l-tag size="mini" :shape="tagShape" :plain="tagPlain" :font-color="tagColor" l-class="cell-tag" v-else-if="tagContent && tagPosition ==='left' && tagPlain">{{tagContent}}</l-tag>
        <slot name="left-section"></slot>
    </view>
</template>
<template v-if="wxTemplateName === 'cell-right-main'">
    <view class="right-section l-class-right l-right-class">
        <slot name="right-section"></slot>
        <l-tag size="mini" :shape="tagShape" :bg-color="tagColor" l-class="cell-tag" v-if="tagContent && tagPosition ==='right' && !tagPlain">{{tagContent}}</l-tag>
        <l-tag size="mini" :shape="tagShape" :plain="tagPlain" :font-color="tagColor" l-class="cell-tag" v-if="tagContent && tagPosition ==='right' && tagPlain">{{tagContent}}</l-tag>
        <view class="l-text" v-if="rightDesc">{{rightDesc}}</view>
        <l-icon l-class="l-link-icon-class" size="26" color="#8c98ae" name="right" v-if="isLink"></l-icon>
    </view>
</template></uni-shadow-root>
</template>

<script>
import LIcon from '../icon/index.vue'
import LBadge from '../badge/index.vue'
import LTag from '../tag/index.vue'
global['__wxVueOptions'] = {components:{'l-icon': LIcon,'l-badge': LBadge,'l-tag': LTag}}

global['__wxRoute'] = 'lin-ui/dist/list/index'
import hover from"../behaviors/hover";Component({behaviors:[hover],relations:{"../list/index":{type:"parent",linked(){},linkChanged(){},unlinked(){}}},options:{multipleSlots:!0},externalClasses:["l-class","l-class-icon","l-icon-class","l-class-image","l-image-class","l-class-right","l-right-class","l-class-content","l-content-class","l-class-desc","l-desc-class","l-link-icon-class"],properties:{icon:String,iconColor:{type:String,value:"#3963BC"},iconSize:{type:String,value:"28"},image:String,title:String,desc:String,tagPosition:{type:String,value:"left"},tagContent:String,tagShape:{type:String,value:"square"},tagColor:String,tagPlain:Boolean,badgePosition:{type:String,value:"left"},dotBadge:Boolean,badgeCount:Number,badgeMaxCount:{type:Number,value:99},badgeCountType:{type:String,value:"overflow"},rightDesc:String,gap:Number,leftGap:Number,rightGap:Number,isLink:{type:Boolean,value:!0},linkType:{type:String,value:"navigateTo"},url:String},methods:{tapcell:function(e){const{linkType:t,url:l}=e.currentTarget.dataset;l&&wx[t]({url:l}),this.triggerEvent("lintap",{e:e},{bubbles:!0,composed:!0})}}});
export default global['__wxComponents']['lin-ui/dist/list/index']
</script>
<style platform="mp-weixin">
.l-list{width:100%;min-height:88rpx;display:flex;justify-content:space-between;align-items:center;color:#333;font-size:28rpx;border-bottom:1px solid #f3f3f3;box-sizing:border-box}.l-list-hover{opacity:.8}.l-list .left-section{display:flex;justify-content:space-between;align-items:center}.l-list .left-section .l-icon{margin-right:20rpx}.l-list .left-section .l-desc{color:#d1d3d7;font-size:24rpx}.l-list .left-section .cell-tag{margin-left:20rpx}.l-list .left-section .l-image{width:44rpx;height:44rpx;margin-right:20rpx}.l-list .right-section{display:flex;justify-content:space-between;align-items:center;line-height:1.2}.l-list .right-section .l-text{margin-right:20rpx}.l-list .right-section .cell-tag{margin-right:20rpx}.l-list .badge-right{border-radius:28rpx;min-width:28rpx;left:-20rpx;right:auto;top:0;bottom:0;transform:translate(-100%,2rpx)}
</style>