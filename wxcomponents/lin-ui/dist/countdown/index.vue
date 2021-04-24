<template>
<uni-shadow-root class="lin-ui-dist-countdown-index"><view class="l-countdown l-class">
    <view v-for="(item,index) in (date)" :key="item.index" class="l-countdown-item"><text class="l-class-time l-time-class l-countdown-time">{{item.value}}</text>{{item.name}}</view>
</view></uni-shadow-root>
</template>

<script>

global['__wxVueOptions'] = {components:{}}

global['__wxRoute'] = 'lin-ui/dist/countdown/index'
import countDownBehaviors from"../behaviors/countdown";Component({externalClasses:["l-class","l-class-time","l-time-class"],behaviors:[countDownBehaviors],properties:{doneText:{type:String,value:"已结束"}},methods:{}});
export default global['__wxComponents']['lin-ui/dist/countdown/index']
</script>
<style platform="mp-weixin">
.l-countdown{font-size:28rpx;line-height:40px}.l-countdown-item{display:inline-block;color:inherit}.l-countdown-time{display:inline-flex;width:56rpx;height:56rpx;background:#45526b;border-radius:4rpx;color:#fff;align-items:center;justify-content:center;margin:0 16rpx}
</style>