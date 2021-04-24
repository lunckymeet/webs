<template>
<uni-shadow-root class="lin-ui-dist-circle-index"><view :class="'sector '+(((displayPercent < 50 && displayPercent !== 0) || displayPercent === 100) ? 'sector1' : 'sector2')" :style="'height:'+(outerDiameter)+'rpx;width:'+(outerDiameter)+'rpx;'+(((displayPercent < 50 && displayPercent !== 0) || displayPercent === 100) ?activeColor?'background:'+activeColor:'':'background:'+backgroundColor)">
    <view v-if="displayPercent !== 0 && displayPercent !== 100" class="sx1" :style="'height:'+(outerDiameter)+'rpx;width:'+(outerDiameter)+'rpx;clip: rect(0rpx, '+(outerDiameter/2)+'rpx, '+(outerDiameter)+'rpx, 0rpx);background:'+(((displayPercent < 50 && displayPercent !== 0) || displayPercent === 100) ?backgroundColor:activeColor?activeColor:'')"></view>
    <view v-if="displayPercent !== 50 && displayPercent !== 0 && displayPercent !== 100" class="sx2" :style="'transform: rotate('+(displayPercent < 50 ? ((360 * displayPercent / 100) - 180):(360 * (displayPercent - 100) / 100))+'deg);height:'+(outerDiameter)+'rpx;width:'+(outerDiameter)+'rpx;clip: rect(0rpx, '+(outerDiameter/2)+'rpx, '+(outerDiameter)+'rpx, 0rpx);background:'+(((displayPercent < 50 && displayPercent !== 0) || displayPercent === 100) ?backgroundColor:activeColor)"></view>
    <view class="sx_t" :style="'width:'+(innerDiameter)+'rpx;height:'+(innerDiameter)+'rpx;background:'+(innerColor)">
        <view v-if="showValue" class="l-value-class" :style="'color:'+(valueColor?valueColor:'')+';font-size:'+(valueSize)+'rpx'">
            {{displayPercent}}%
        </view>
        <slot></slot>
    </view>
</view></uni-shadow-root>
</template>

<script>

global['__wxVueOptions'] = {components:{}}

global['__wxRoute'] = 'lin-ui/dist/circle/index'
Component({externalClasses:["l-value-class"],properties:{percent:{type:Number,value:0},outerDiameter:{type:Number,value:220},innerDiameter:{type:Number,value:170},activeColor:{type:String},backgroundColor:{type:String,value:"#EBEBEB"},innerColor:{type:String,value:"#FFFFFF"},active:{type:Boolean,value:!1},duration:{type:Number,value:30},showValue:{type:Boolean,value:!1},valueColor:{type:String},valueSize:{type:Number,value:25}},options:{multipleSlots:!0,pureDataPattern:/^_/},data:{displayPercent:0},observers:{percent:async function(e){if(e>100)this.setData({percent:100});else if(e<0)this.setData({percent:0});else if(this.data.active){let t=this.data.displayPercent;if(t<e)for(;t<e;)await this.sleep(this.data.duration),t+=1,this.setData({displayPercent:t});else if(t>e)for(;t>e;)await this.sleep(this.data.duration),t-=1,this.setData({displayPercent:t})}else this.setData({displayPercent:e})},outerDiameter:function(e){e<this.data.innerDiameter&&(e=this.data.innerDiameter,this.setData({outerDiameter:e}))},innerDiameter:function(e){e<0&&this.setData({innerDiameter:0})}},methods:{sleep:e=>new Promise(t=>{setTimeout(t,e)})}});
export default global['__wxComponents']['lin-ui/dist/circle/index']
</script>
<style platform="mp-weixin">
.sector{position:relative;border-radius:50%;overflow:hidden;display:flex;justify-content:center;align-items:center}.sx1,.sx2{position:absolute;top:0;left:0}.sx1{z-index:1}.sx2{z-index:2}.sx_t{border-radius:50%;z-index:3;display:flex;flex-direction:row;justify-content:center;align-items:center}.sector1{background:#3963bc}.sector2 .sx1,.sector2 .sx2{background:#3963bc;transform:rotate(180deg)}
</style>