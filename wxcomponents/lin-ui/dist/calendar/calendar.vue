<template>
<uni-shadow-root class="lin-ui-dist-calendar-calendar"><template v-if="wxTemplateName === 'calendar'">
  <view class="calendar-container">
    <header :showTitle="showTitle" :showSubtitle="showSubtitle" :title="title" :subTitle="subTitle"></header>
    <scroll-view class="calendar-body-wrap" scroll-y :scroll-into-view="scrollIntoViewIndex">
      <mounth v-for="(item,index) in (computed.getMonths(minDate, maxDate))" :key="item.index" :id="'month'+(index)" class="month" :data-date="item" :date="item" :minDate="minDate" :maxDate="maxDate" :currentDate="currentDate" :type="type" @clickDay="_$self.$parent.$parent[('clickDay')]($event)" :showMonthTitle="index !== 0" :formatter="formatter" :color="color">
      </mounth>
    </scroll-view>
    <view>
      <l-button type="default" l-class="bottom-button" size="long" @lintap="_$self.$parent.$parent[('onClickConfirm')]($event)" :bg-color="color">{{confirmText}}</l-button>
    </view>
  </view>
</template></uni-shadow-root>
</template>
<wxs src="./index.wxs" module="computed"></wxs>
<script>

global['__wxRoute'] = 'lin-ui/dist/calendar/calendar'

Component({})

export default global['__wxComponents']['lin-ui/dist/calendar/calendar']
</script>
<style platform="mp-weixin">

</style>