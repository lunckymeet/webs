<template>
<uni-shadow-root class="lin-ui-dist-segment-item-index"><slot></slot></uni-shadow-root>
</template>

<script>

global['__wxVueOptions'] = {components:{}}

global['__wxRoute'] = 'lin-ui/dist/segment-item/index'
Component({options:{multipleSlots:!0},relations:{"../segment/index":{type:"parent",linked(){},unlinked(){}}},properties:{tab:String,key:String,icon:String,iconSize:{type:String,value:"20"},image:Object,picPlacement:{type:String,value:"top"},dotBadge:Boolean,badgeCount:{type:Number},badgeMaxCount:{type:Number,value:99},badgeCountType:{type:String,value:"overflow"}},observers:{"**":function(e){this.updateData(e)}},data:{},methods:{updateData(e){let t=this.getRelationNodes("../segment/index")[0];if(!t)return;const a=t.data.tabList;if(!(a&&a.length>0))return;const n=a.findIndex(e=>e.key===this.data.key);a[n]=e,t.setData({tabList:a},()=>{t.data.scrollable&&t.queryMultipleNodes()})}}});
export default global['__wxComponents']['lin-ui/dist/segment-item/index']
</script>
<style platform="mp-weixin">

</style>