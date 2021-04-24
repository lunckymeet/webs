<template>
<uni-shadow-root class="lin-ui-dist-textarea-index"><label :class="'form-item '+(disabled? "disabled": "")">
  <view :class="'default-border '+(border? "border": "")+' l-class'">
    <view class="mask" v-if="disabled"></view>
    
    <textarea :class="(autoHeight ? 'textarea-auto-height': 'textarea')+' l-inner-class'" :type="type" :value="value" :password="type==='password'" :placeholder="placeholder" :maxlength="maxlength" placeholder-class="pls-class" :placeholder-style="placeholderStyle" :disabled="disabled" :focus="focus" :auto-height="autoHeight" :cursor-spacing="cursorSpacing" @input="handleInputChange" @focus="handleInputFocus" @blur="handleInputBlur" @confirm="handleInputConfirm"></textarea>
      <view class="indicator" v-if="indicator">{{value.length + '/' +  maxlength}}</view>
  </view>
</label>
  <l-error-tip l-error-text-class="l-error-text l-error-text-class" :errorText="errorText" v-if="errorText"></l-error-tip></uni-shadow-root>
</template>

<script>
import LIcon from '../icon/index.vue'
import LErrorTip from '../error-tip/index.vue'
global['__wxVueOptions'] = {components:{'l-icon': LIcon,'l-error-tip': LErrorTip}}

global['__wxRoute'] = 'lin-ui/dist/textarea/index'
import rules from"../behaviors/rules";import eventBus from"../core/utils/event-bus";Component({behaviors:["wx://form-field",rules],externalClasses:["l-class","l-error-text","l-error-text-class","l-inner-class"],properties:{placeholder:{type:String,value:""},value:{type:String,value:""},focus:{type:Boolean,value:!1},maxlength:{type:Number,value:140},indicator:{type:Boolean,value:!0},autoHeight:{type:Boolean,value:!1},disabled:{type:Boolean,value:!1},border:{type:Boolean,value:!0},rules:{type:Object},placeholderStyle:{type:String,value:""},cursorSpacing:{type:Number,value:0}},data:{},attached(){this.initRules()},methods:{handleInputChange(e){const{detail:t={}}=e,{value:a=""}=t;this.setData({value:a}),eventBus.emit("lin-form-change-"+this.id,this.id),this.triggerEvent("lininput",e.detail)},handleInputFocus(e){this.triggerEvent("linfocus",e.detail)},handleInputBlur(e){this.validatorData({[this.data.name]:e.detail.value}),eventBus.emit("lin-form-blur-"+this.id,this.id),this.triggerEvent("linblur",e.detail)},handleInputConfirm(e){this.triggerEvent("linconfirm",e.detail)},getValues(){return this.data.value},reset(){this.data.value=""}}});
export default global['__wxComponents']['lin-ui/dist/textarea/index']
</script>
<style platform="mp-weixin">
.form-item{position:relative;font-size:28rpx;color:#333;width:100%;display:flex;flex-direction:column;align-items:center;box-sizing:border-box}.disabled{color:#9a9a9a!important}.mask{position:absolute;z-index:999;height:100%;width:100%}.textarea{width:100%;box-sizing:border-box;font-size:28rpx;color:#333;height:200rpx;line-height:40rpx;flex:1;min-height:88rpx}.textarea-auto-height{width:100%;box-sizing:border-box;font-size:28rpx;color:#333}.default-border{position:relative;font-size:28rpx;color:#333;width:100%;display:flex;flex-direction:column;align-items:center;box-sizing:border-box;padding:25rpx}.border{border-radius:4rpx;border:1rpx solid #d8dee5}.pls-class{color:#9a9a9a}.indicator{width:95%;text-align:right;margin-bottom:15rpx;color:#9a9a9a}
</style>