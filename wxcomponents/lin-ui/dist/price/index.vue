<template>
<uni-shadow-root class="lin-ui-dist-price-index"><view :class="'price-container l-class '+(deleted ? "price-del l-deleted-class" : "")" :style="'color: '+(delColor?delColor:color)">
  
  <text class="l-unit-class" :style="'color: '+(unitColor?unitColor:color)+'; font-size: '+(unitSize?unitSize:size)+'rpx; font-weight: '+(unitBold?unitBold:bold)">{{unit}}</text>
  
  <text class="l-value-class" :style="'color: '+(valueColor?valueColor:color)+'; font-size: '+(valueSize?valueSize:size)+'rpx; font-weight: '+(valueBold?valueBold:bold)">{{priceInteger}}<text class="l-dot-class">{{priceDecimal?'.':''}}</text><text class="l-decimal-class">{{priceDecimal?priceDecimal:''}}</text></text>
</view></uni-shadow-root>
</template>

<script>

global['__wxVueOptions'] = {components:{}}

global['__wxRoute'] = 'lin-ui/dist/price/index'
import validator from"../behaviors/validator";Component({externalClasses:["l-deleted-class","l-unit-class","l-value-class","l-class","l-decimal-class","l-dot-class"],behaviors:[validator],properties:{unit:{type:String,value:"￥"},size:{type:String,value:"28"},color:{type:String,value:"#3963BC"},bold:{type:String,value:"500"},unitColor:String,unitSize:String,unitBold:String,value:{type:String,value:"0.00"},mode:{type:String,value:"number",options:["number","text"]},valueColor:String,valueSize:String,valueBold:String,deleted:Boolean,delColor:String,reserveDigit:{type:Number,value:2},autofix:Boolean},data:{priceInteger:{type:String,value:"0"},priceDecimal:{type:String,value:"00"}},observers:{value:function(){this.reserveNumber()}},methods:{reserveNumber(){this.setData({priceInteger:null,priceDecimal:null});const e=Number(this.data.value);if(!(isNaN(Number(e))||"text"===this.data.mode)&&this.data.autofix){const t=e.toFixed(this.data.reserveDigit).toString().split(".");this._setPrice(t)}else{const e=this.data.value.split(".");this._setPrice(e)}},_setPrice(e){if(1===e.length)this.setData({priceInteger:e[0]});else{if(2!==e.length)throw"price 格式有误，请仔细检查！";this.setData({priceInteger:e[0],priceDecimal:e[1]})}}}});
export default global['__wxComponents']['lin-ui/dist/price/index']
</script>
<style platform="mp-weixin">
.price-del{text-decoration:line-through!important}.price-container{display:inline-block;text-align:center;color:#3963bc;font-size:28rpx}
</style>