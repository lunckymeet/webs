<template>
<uni-shadow-root class="lin-ui-dist-avatar-index"><view :class="'l-avatar '+(text||_isHaveUserNickName?'l-placement-'+placement:'')" mut-bind:tap="tapAvatar">
    <view :class="'l-avatar-image '+(shape?'l-'+shape:'')+' l-class'" v-if="_isHaveUserAvatarUrl||icon||src" :style="'width:'+(size)+'rpx;height:'+(size)+'rpx;min-width:'+(size)+'rpx;min-height:'+(size)+'rpx;'">
        <open-data class="open-data" v-if="_isHaveUserAvatarUrl" type="userAvatarUrl"></open-data>
        <l-icon v-else-if="icon" :size="iconSize || size*0.6" :color="iconColor||'#ffffff'" :name="icon"></l-icon>
        <image v-else-if="src" :src="src" :mode="mode" :style="'width:'+(size)+'rpx;height:'+(size)+'rpx'"></image>
    </view>
    <view class="l-avatar-text l-class-text l-text-class" v-if="text||_isHaveUserNickName">
        <open-data class="open-data" v-if="_isHaveUserNickName" type="userNickName"></open-data>
        <text class="l-avatar-text-text" v-else-if="text">{{text}}</text>
    </view>
</view></uni-shadow-root>
</template>

<script>
import LIcon from '../icon/index.vue'
global['__wxVueOptions'] = {components:{'l-icon': LIcon}}

global['__wxRoute'] = 'lin-ui/dist/avatar/index'
Component({externalClasses:["l-class","l-class-text","l-text-class"],properties:{icon:String,iconColor:{type:String,value:"#3963BC"},iconSize:{type:String,value:"28"},text:String,src:String,openData:{type:Array,observer:"_initOpenData"},shape:{type:String,value:"circle"},mode:{type:String,value:"scaleToFill"},size:{type:Number,value:120},placement:{type:String,value:"right"}},data:{_isHaveUserNickName:!1,_isHaveUserAvatarUrl:!1,_iconSize:"",_iconColor:"#ffffff"},methods:{_initOpenData:function(e){this._isHaveUserAvatarUrl(e),this._isHaveUserNickName(e)},_isHaveUserAvatarUrl:function(e){this.setData({_isHaveUserAvatarUrl:-1!==e.indexOf("userAvatarUrl")})},_isHaveUserNickName:function(e){this.setData({_isHaveUserNickName:-1!==e.indexOf("userNickName")})},tapAvatar:function(e){this.triggerEvent("lintap",e,{bubbles:!0,composed:!0})}}});
export default global['__wxComponents']['lin-ui/dist/avatar/index']
</script>
<style platform="mp-weixin">
.l-avatar{display:inline-flex;justify-content:center;align-items:center}.l-avatar-image{flex:1;display:inline-flex;justify-content:center;align-items:center;background:#ccc;overflow:hidden}.l-avatar-text{display:inline-block;height:max-content;width:max-content;font-size:28rpx;color:#45526b;line-height:40px}.open-data{width:100%;height:100%}.l-avatar-text .l-avatar-text-text,.l-avatar-text .open-data{font-size:inherit;color:inherit;line-height:inherit}.l-square{border-radius:8rpx}.l-circle{border-radius:50%}.l-placement-left,.l-placement-right{align-items:center;justify-content:center}.l-placement-left{margin-right:24rpx;flex-direction:row-reverse}.l-placement-left .l-avatar-text{margin-right:24rpx}.l-placement-right{flex-direction:row}.l-placement-right .l-avatar-text{margin-left:24rpx}.l-placement-top{flex-direction:column-reverse}.l-placement-top .l-avatar-text{margin-bottom:12rpx}.l-placement-bottom{flex-direction:column}.l-placement-bottom .l-avatar-text{margin-top:12rpx}
</style>