<template>
<uni-shadow-root class="lin-ui-dist-form-item-index"><view :class="'l-form-item-class form-item-container '+('label-' + labelPlacement)+' '+(tipType === 'text' ? 'textHeight': '')">
    <view :class="'l-form-label-class label-text '+(isRequired ? 'label-text-required': '')+' '+('label-text-' + labelPlacement+ '-' + alignItems)" :style="'min-width: '+(labelPlacement==='row' ? labelWidth : '100%')+';max-width: '+(labelPlacement==='row' ? labelWidth : '100%')">
        <view v-if="labelSlot">
            <slot name="label"></slot>
        </view>
        <view v-else>
            {{label}}
        </view>
    </view>
    <view class="label-content l-form-content-class">
        <slot></slot>
    </view>
    <l-error-tip class="error-text" l-error-text-class="l-error-text-class" :errorText="errorText" v-if="errorText"></l-error-tip>
</view></uni-shadow-root>
</template>

<script>
import LErrorTip from '../error-tip/index.vue'
global['__wxVueOptions'] = {components:{'l-error-tip': LErrorTip}}

global['__wxRoute'] = 'lin-ui/dist/form-item/index'
import rules from"../behaviors/rules";Component({options:{multipleSlots:!0},externalClasses:["l-form-item-class","l-form-label-class","l-form-content-class","l-error-text-class"],behaviors:[rules],relations:{"../form/index":{type:"parent",linked:function(){},linkChanged:function(){},unlinked:function(){}}},properties:{label:String,labelPlacement:{type:String,value:"row"},alignItems:{type:String,value:"start"},labelWidth:{type:String,value:"auto"},labelSlot:{type:Boolean,value:!1},name:{type:String,value:""}},data:{isRequired:!1},attached(){this.initRules(),this.isRequired()},methods:{isRequired(){this.data.rules.forEach(e=>{e.required&&this.setData({isRequired:!0})})}}});
export default global['__wxComponents']['lin-ui/dist/form-item/index']
</script>
<style platform="mp-weixin">
.form-item-container{display:flex;border-bottom:1px solid #eee;color:#777;padding:0 20rpx;position:relative}.form-item-container.textHeight{margin-bottom:44rpx}.form-item-container.label-column{align-items:left;flex-direction:column}.form-item-container.label-column .label-text{line-height:44rpx}.form-item-container.label-row{align-items:center;flex-direction:row}.form-item-container.label-row .label-text{line-height:88rpx}.form-item-container .label-text{display:flex;line-height:88rpx}.form-item-container .label-text-column-start{justify-content:flex-start}.form-item-container .label-text-column-end{justify-content:flex-end}.form-item-container .label-text-column-center{justify-content:center}.form-item-container .label-text-row-start{justify-content:flex-start}.form-item-container .label-text-row-end{justify-content:flex-end}.form-item-container .label-text-row-center{justify-content:center}.form-item-container .label-content{flex:1}.form-item-container .label-text-required::before{display:inline-block;margin-right:4px;color:#f5222d;font-family:SimSun,sans-serif;content:'*'}.error-text{text-align:right;line-height:44rpx;color:#f56c6c;font-size:12px;position:absolute;top:100%;left:0;padding-left:24rpx}.row{display:none!important}
</style>