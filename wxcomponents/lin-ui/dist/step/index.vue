<template>
<uni-shadow-root class="lin-ui-dist-step-index"><view :class="'step '+('step-'+direction)+' l-class'" :style="direction==='row'?'width:'+(1/length)*stepsWidth+'px':'min-height:'+stepMinHeight+'rpx'">
  <view :class="'step-container l-step-class '+('step-container-'+direction)">
    <view v-if="custom" class="step-custom">
      <slot name="dot"></slot>
    </view>
    <view v-else :class="'l-step-class '+(dot && !icon?'step-dot-'+currentStatus.setStatus(activeIndex,index,status)+' step-dot':'step-'+currentStatus.setStatus(activeIndex,index,status)+' step-icon')" :style="dot?currentStatus.dotStyle(activeIndex,index,color):currentStatus.statusStyle(activeIndex,index,color,status)">
      <l-icon v-if="icon" :name="icon" :size="iconSize" :color="(currentStatus.setStatus(activeIndex,index,status))==='process'?'#3963BC':iconColor"></l-icon>
      <block v-if="(!dot && !icon)">
        <view v-if="currentStatus.setStatus(activeIndex,index,status)==='error' || currentStatus.setStatus(activeIndex,index,status)==='finish'" :class="'iconfont icon-'+(currentStatus.setStatus(activeIndex,index,status))"></view>
        <block v-else>{{index+1}}</block>
      </block>
    </view>
  </view>
  <view :class="'step-content '+('step-content-'+direction)">
    <view :class="'l-title-class '+(activeIndex===index?'step-title-process':'step-title')">
      {{title}}
    </view>
    <view class="l-describe-class step-describe">
      {{describe}}
      <slot name="describe"></slot>
    </view>
  </view>
  <view :class="'step-line l-line-class '+('step-line-'+ direction)+' '+(currentStatus.isReverse(reverse,activeIndex,index)?'step-line-finish':'step-line-wait')" :style="activeIndex>index?('background-color:'+color):''" v-if="reverse?(index!==0):(length!==index+1)">
  </view>
</view></uni-shadow-root>
</template>
<wxs module="currentStatus" src="./index-currentStatus.wxs"></wxs>
<script>
import LIcon from '../icon/index.vue'
global['__wxVueOptions'] = {components:{'l-icon': LIcon}}

global['__wxRoute'] = 'lin-ui/dist/step/index'
Component({externalClasses:["l-class","l-step-class","l-title-class","l-describe-class","l-line-class"],options:{multipleSlots:!0},relations:{"../steps/index":{type:"parent"}},properties:{icon:String,title:String,describe:String,iconSize:{type:Number,value:24},iconColor:String,custom:Boolean},data:{},methods:{updateDataChange(e){this.setData({...e})}}});
export default global['__wxComponents']['lin-ui/dist/step/index']
</script>
<style platform="mp-weixin">
.step{display:flex;position:relative}.step-custom{z-index:2}.step-row{flex-direction:column;align-items:center}.step-column{flex-direction:row;padding-left:30rpx;box-sizing:border-box}.step-container{display:flex;justify-content:center;z-index:2;align-items:center;background-color:#fff}.step-container-row{width:70rpx;height:40rpx}.step-container-column{height:60rpx;width:40rpx}.step-icon{width:40rpx;height:40rpx;display:flex;align-items:center;justify-content:center;font-size:22rpx;transition:.5s;box-sizing:border-box}.step-process{color:#fff;background-color:#3963bc;border-radius:50%}.step-error{background-color:#fff;border:1px solid #f4516c;color:#f4516c;border-radius:50%}.step-finish{background-color:#fff;color:#3963bc;border:1px solid #3963bc;border-radius:50%}.step-wait{background-color:#fff;color:#c4c9d2;border:1px solid #c4c9d2;border-radius:50%}.step-dot{width:24rpx;height:24rpx;border-radius:50%;transition:.5s}.step-dot-process{background-color:#3963bc}.step-dot-wait{background-color:#c4c9d2}.step-dot-error{background-color:#f4516c}.step-dot-finish{background-color:#3963bc}.step-line{background:#c4c9d2;transition:.5s;position:absolute;z-index:0}.step-line-row{height:2rpx;width:100%;left:50%;top:18rpx}.step-line-column{width:2rpx;height:100%;top:20rpx;left:48rpx}.step-line-wait{background-color:#e8e8e8}.step-line-finish{background-color:#3963bc}.step-content{display:flex;flex-direction:column}.step-content-row{align-items:center;width:100%}.step-content-column{margin-left:15rpx}.step-title{color:#595959;font-size:26rpx;line-height:40rpx;margin:10rpx 0}.step-title-process{color:#333;font-size:28rpx;line-height:40rpx;margin:10rpx 0}.step-describe{color:#8c98ae;font-size:22rpx}@font-face{font-family:iconfont;src:url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAK8AAsAAAAABpQAAAJvAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgp8gQsBNgIkAwwLCAAEIAWEbQc2G9EFyK4wbuGJaCgrSmkBCSe/ZeUtviBzEXztx/bd3f+oNEiuzaerJhKN6WQSJFqlZELxTOZqTS9l0hsflgVC/bD3z/dzv8lMXAksyeryeByfVkhgV93EvwdIwC+b/hetH5jPyAA+z+X0JtCBXONbltMcw496AcYBBbYnRoEEXEQBcAqyOwK15PsEmg2KiewMTy6yCoWzLBD3lqGwilJKUaRqo1C37C3iRaUxPaUnPMffj18LUUFSZc7a3bshnfV++DD/2GVISBPo4QoZU5hCXLeWThULiSvWbCrpb64VIS2VhYlVpqU+6B8vETWnsxWM0XLiI19G8OGABDKoy5VBzDRje98gRHertt+2fLx2cdC6ZJwcnK226Ifh0uzy4vzK8sLSytxprqHAHexGbz8/6za6C3ePjwW29viP3ailnm7Zz+SntAd5IV0IBHuvvy3Xd/41thTw/osdBRahcefh4Gepwb5iah13LrrKV9mRrBsIJKhCjvrnxLq9Trf0wb2ERn0TIg0GcmSNhsjCTqHSYgm1RutoNmnkcIseUrEoTZiwRRA63SBp94as0zNZ2BdU+v2h1hnFaHYczWe2GAmrakCiQqiDmgdLEz73vFSVdM+jkXUVWdTG/DLK0MpCOpGqVkfQR7nEhjBnZIg4cCk8GCaPoesKCKSwUaOESRS0J5O87UUJTXisyjYJKQjSAVUesGgEHw+Hk6ra5+chQ5ZLIXsEDfllSApZ44O0hBRAjph8SPAoz4RyDBmEcICTBA8YJrOQyyWAoH2WDWlIgjmhEGiXdAdx1JTY3uL93xFo5kzMkSJHUT+g+5BNxVpWMAYAAA==') format('woff2')}.iconfont{font-family:iconfont!important;font-size:24rpx;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-finish:before{content:"\e600"}.icon-error:before{content:"\e6cf"}
</style>