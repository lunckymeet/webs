<template>
<uni-shadow-root class="lin-ui-dist-radio-index"><view mut-bind:tap="onRadioChangeTap" :class="'label label-'+(placement)+' '+(disabled?'label-disabled l-disabled-class':'l-class')">
        <view class="radio" :style="'color:'+(checked?selectColor:(disabled?disabledColor:color))+';font-size:'+(size)">
            <slot v-if="custom" name="icon"></slot>
            <view v-else :class="'iconfont '+(checked?'icon-select':'icon-unselect')"></view>
        </view>
        <slot></slot>
</view></uni-shadow-root>
</template>

<script>

global['__wxVueOptions'] = {components:{}}

global['__wxRoute'] = 'lin-ui/dist/radio/index'
Component({externalClasses:["l-class","l-disabled-class"],behaviors:["wx://form-field"],relations:{"../radio-group/index":{type:"parent"}},properties:{key:String,cell:Object,size:{type:String,value:"38rpx"},disabled:{type:Boolean},custom:Boolean,color:{type:String,value:"#ccc"},selectColor:{type:String,value:"#3963BC"},disabledColor:{type:String,value:"#ccc"},placement:{type:String,value:"left"},transition:{type:Boolean,value:!0}},data:{checked:!1},methods:{setChecked(e){this.setData({checked:e})},onRadioChangeTap(){if(this.properties.disabled)return;const e=this.getRelationNodes("../radio-group/index")[0],t=e.properties.noneChecked;let r=!0;if(this.isCurrentSelectedKey(e)&&(r=!1,!t))return;const i=!this.data.checked;this.data.checked=i;const s={checked:i,key:this.properties.key,cell:this.properties.cell};e&&e.onEmitEventHandle(s,r)},isCurrentSelectedKey(e){return e.properties.current===this.properties.key}}});
export default global['__wxComponents']['lin-ui/dist/radio/index']
</script>
<style platform="mp-weixin">
.label{display:flex;flex:1;align-items:center;font-size:30rpx;color:#333;width:100%}.label-left{flex-direction:row}.label-right{flex-direction:row-reverse;justify-content:space-between}.label-disabled{color:#ccc}.radio{margin-right:20rpx}.iconfont{font-family:iconfont!important;display:inline-flex;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@font-face{font-family:iconfont;src:url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMMAAsAAAAABwQAAAK9AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqBaIFyATYCJAMMCwgABCAFhG0HOxs9BsgekiQlqiBBkCKqgBDbFA9f+72eu7sf0SUKUEYCjq8CJBWhqlrpakx5POtO5RtaczeTEm4dEZ0nl3vZ/P4QsbZQwBuhkJZZe0ElkSkAzf+5nN4oP2/Mb1kucw086gUYBxToHtgmK5FAPIXhtYt1GOcJtC1qIDsxOz1Aq6DTAvGYpZNAm4sqilRoCvWatUW8V9NMb9Mt4F34/firLbQktYzOPXN3MgNGfhz/9uXVatVlHyGbzw1pExlbgEJcrfWep4izWxTahlppdgJ1RUhzJaqKUGrq6zv94yWijtZ3wRo06aZkroDgZ58ENGRb3WvkdwEvYZyONecufVjvlP/yCN9e6dcv/syKok+S/ILg5fk4v+4VjvzShk88ZPlDX7WRthx5hXV881Hg5krDX9Z84j7MqK4cjZR1JuLFnjJtMX7ePssP3xVQnfFiKPkScCUeVTcdonq0qYhT/P/M8y4Q5ZkuBeY3m1/gqWk5FFo2LcA/s72GnXZzDSQAVPNPvhv+Qobg0R/V/2uDnX/NTgHftl/fyIRqAfkuAJr34wv+r6xnVzEV1JaLLnWltj9bvld3AmI5oEKDYy/j9bPeaUIzJ5MgaViArGkJLdQtqOnYhrqmfWjbZNncMYEpRGlhwxaBMHQNSd8HyIbqaKE+Q83cH9QNQwFtZ2OyZ8dKsPpjjJIEZWBqDrLpUpFyHEQfNboQPZVP4qwiZPsQ5tgEbG1qKRYsqIjwHAu4abqNEApSuFSAZnIZyudLsIxLWZQmTQwh5b7mZqruTU3pUgHoHcOQJALJgFLmQKy0kiLK70/oS593QWhT8pJwC6kh7INgHHZ4qFWTlh6oRVvsRbqXazjTaG0IggJRsJICyExGIXl5JVC5flQWkkY0YUaky/o0s15UX23T+vrC9x2ANrogR4ocRfNNkUP5u9SpAwsAAAAA') format('woff2')}.icon-unselect:before{content:"\e6a1"}.icon-select:before{content:"\e73a"}
</style>