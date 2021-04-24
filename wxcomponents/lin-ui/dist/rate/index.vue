<template>
<uni-shadow-root class="lin-ui-dist-rate-index"><view class="l-rate l-class">
    <view v-for="(item,index) in (count)" :key="item" :style="itemGap&&index!=0?'margin-left:'+itemGap+'rpx':''" class="l-rate-star" :data-index="index" mut-bind:tap="handleClick">
        <view class="icon-checked" v-if="score > index" hover-class="none" hover-stop-propagation="false" :data-rate="score-index" :style="'width:'+(score-index<1?(score-index)*100:100)+'%'">
            <image v-if="activeImage &&  inActiveImage" class="image-item l-class-image l-image-class" :src="activeImage" mode="aspectFit|aspectFill|widthFix" lazy-load="false"></image>
            <l-icon v-else :name="name" l-class="l-class-icon l-icon-class" :size="size" :color="activeColor"></l-icon>
        </view>
        <image v-if="activeImage &&  inActiveImage" class="image-item l-class-image l-image-class" :src="inActiveImage" mode="aspectFit|aspectFill|widthFix" lazy-load="false"></image>
        <l-icon v-else :name="name" l-class="l-class-icon l-icon-class" :size="size" :color="inActiveColor"></l-icon>
    </view>
</view></uni-shadow-root>
</template>

<script>
import LIcon from '../icon/index.vue'
global['__wxVueOptions'] = {components:{'l-icon': LIcon}}

global['__wxRoute'] = 'lin-ui/dist/rate/index'
import eventBus from"../core/utils/event-bus";Component({externalClasses:["l-class","l-class-icon","l-class-image","l-icon-class","l-image-class"],options:{multipleSlots:!0},properties:{count:{type:Number,value:5},score:{type:Number,value:0},size:{type:String,value:"36"},disabled:Boolean,activeColor:{type:String,value:"#FF5252"},inActiveColor:{type:String,value:"#FFE5E5"},name:{type:String,value:"favor-fill"},activeImage:String,inActiveImage:String,itemGap:{type:Number,value:10}},data:{},methods:{handleClick(e){if(this.data.disabled)return;const{index:t}=e.currentTarget.dataset;this.setData({score:t+1}),this.triggerEvent("linchange",{score:t+1}),eventBus.emit("lin-form-change-"+this.id,this.id)},getValues(){return this.data.score},reset(){this.setData({score:0})}}});
export default global['__wxComponents']['lin-ui/dist/rate/index']
</script>
<style platform="mp-weixin">
.l-rate,.l-rate-star{display:inline-flex}.l-rate-star{position:relative}.icon-checked{position:absolute;overflow:hidden;display:flex}.image-item{width:80rpx;height:80rpx}
</style>