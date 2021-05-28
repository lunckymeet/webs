<template>
	<view>
		<navtop topTitle="疫苗分类"></navtop>
		<view class="reset">
			<van-tree-select :items="items" :main-active-index="mainActiveIndex" :active-id="activeId"
			 @click-nav="onClickNav" height="100%"/>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				tabCur: 0,
				mainCur: 0,
				verticalNavTop: 0,
				load: true,
				mainActiveIndex: 0,
				activeId: null,
				items: [{
					text: '国药中生北京公司的灭活疫苗',
					// 禁用选项
					disabled: false,
					// 该导航下所有的可选项
					children: [{
							// 名称
							text: '保护率：两针过后79.34%',
							// id，作为匹配选中状态的标识
							id: 1,
						},
						{
							text: '接种计量：2针',
							id: 2,
						},
						{
							text: '适用年龄：18-59岁',
							id: 3,
						},
						{
							text: '获批时间：2020年12月30日',
							id: 4,
						}
					]
				}, 
				{
					text: '武汉生物制品的灭活疫苗',
					// 禁用选项
					disabled: false,
					// 该导航下所有的可选项
					children: [{
							// 名称
							text: '保护率：两针过后72.51%',
							// id，作为匹配选中状态的标识
							id: 1,
						},
						{
							text: '接种计量：2针',
							id: 2,
						},
						{
							text: '适用年龄：/',
							id: 3,
						},
						{
							text: '获批时间：2021年2月25日',
							id: 4,
						}
					]
				},
				{
					text: '北京科兴灭活疫苗',
					// 禁用选项
					disabled: false,
					// 该导航下所有的可选项
					children: [{
							// 名称
							text: '保护率：/',
							// id，作为匹配选中状态的标识
							id: 1,
						},
						{
							text: '接种计量：2针',
							id: 2,
						},
						{
							text: '适用年龄：18岁以上',
							id: 3,
						},
						{
							text: '获批时间：2021年2月5日',
							id: 4,
						}
					]
				},
				{
					text: '天津康希诺腺病毒载体疫苗',
					// 禁用选项
					disabled: false,
					// 该导航下所有的可选项
					children: [{
							// 名称
							text: '保护率：/',
							// id，作为匹配选中状态的标识
							id: 1,
						},
						{
							text: '接种计量：单针',
							id: 2,
						},
						{
							text: '适用年龄：18岁以上',
							id: 3,
						},
						{
							text: '获批时间：2021年2月25日',
							id: 4,
						}
					]
				},
				{
					text: '智飞生物重组新冠疫苗(CHO细胞)',
					// 禁用选项
					disabled: false,
					// 该导航下所有的可选项
					children: [{
							// 名称
							text: '保护率：/',
							// id，作为匹配选中状态的标识
							id: 1,
						},
						{
							text: '接种计量：3针',
							id: 2,
						},
						{
							text: '适用年龄：/',
							id: 3,
						},
						{
							text: '获批时间：2020年3月10日',
							id: 4,
						}
					]
				}]
			};
		},
		onLoad() {
			
		},
		onReady() {
		},
		methods: {
			onClickNav:function({ detail = {} }) {
			    this.$data.mainActiveIndex = detail.index;
			  }
		}
	}
</script>

<style scoped>
	
	
</style>
