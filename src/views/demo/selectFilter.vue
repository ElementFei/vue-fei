<template>
	<div>
		<el-select v-model="value1" 
			clearable
			filterable 
			@visible-change="visibleChange"
			:filter-method="dataFilter"
   		placeholder="请选择飞行任务">
     	<template v-for="(group, index) in options1">
				<el-option-group v-if="group.options"
		      :key="index"
		      :label="group.label">
		      <el-option
		        v-for="item in group.options"
		        :key="item.value"
		        :label="item.label"
		        :value="item.value">
		      </el-option>
		    </el-option-group>
		    <el-option v-else
	        :key="group.value"
	        :label="group.label"
	        :value="group.value">
	      </el-option>
			</template>
	  </el-select>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				value1: '',
				optionsArr: [{
					"label": "调机",
					"value": null,
					"options": [{
						"value": "dhz",
						"label": "调机止",
						"text": null
					}, {
						"value": "dz",
						"label": "调机中",
						"text": null
					}, {
						"value": "dr",
						"label": "调机入",
						"text": null
					}, {
						"value": "dc",
						"label": "调机出",
						"text": null
					}]
				}, {
					"label": "定检",
					"value": null,
					"options": [{
						"value": "djjj",
						"label": "定检始",
						"text": null
					}, {
						"value": "djz",
						"label": "定检中",
						"text": null
					}, {
						"value": "djzi",
						"label": "定检止",
						"text": null
					}]
				}, {
					"label": "转场",
					"value": null,
					"options": [{
						"value": "zczr",
						"label": "转场转入",
						"text": null
					}, {
						"value": "zcd",
						"label": "转场到",
						"text": null
					}, {
						"value": "zhbc",
						"label": "转回本场",
						"text": null
					}]
				}],
				options1: [{
					"label": "调机",
					"value": null,
					"options": [{
						"value": "dhz",
						"label": "调机止",
						"text": null
					}, {
						"value": "dz",
						"label": "调机中",
						"text": null
					}, {
						"value": "dr",
						"label": "调机入",
						"text": null
					}, {
						"value": "dc",
						"label": "调机出",
						"text": null
					}]
				}, {
					"label": "定检",
					"value": null,
					"options": [{
						"value": "djjj",
						"label": "定检始",
						"text": null
					}, {
						"value": "djz",
						"label": "定检中",
						"text": null
					}, {
						"value": "djzi",
						"label": "定检止",
						"text": null
					}]
				}, {
					"label": "转场",
					"value": null,
					"options": [{
						"value": "zczr",
						"label": "转场转入",
						"text": null
					}, {
						"value": "zcd",
						"label": "转场到",
						"text": null
					}, {
						"value": "zhbc",
						"label": "转回本场",
						"text": null
					}]
				}]
			}
		},
		methods: {
			dataFilter (val) {
//			如果有值，进行筛选
				if (val) {
					var oneArr = [];
					for (let i = 0; i < this.optionsArr.length; i++) {
						if (this.optionsArr[i].options) {
							var twoArr = [];
							var bool = false;
							for (let j = 0; j < this.optionsArr[i].options.length; j++) {
								if (this.optionsArr[i].options[j].label.indexOf(val) >= 0) {
									twoArr.push(this.optionsArr[i].options[j]);
									bool = true;
								}
								if (this.optionsArr[i].options[j].value.indexOf(val) >= 0) {
									twoArr.push(this.optionsArr[i].options[j]);
									bool = true;
								}
							}
							if (bool) {
								var obj = this.optionsArr[i];
								obj.options = twoArr;
								oneArr.push(obj);
							}
						}
					}
					this.options1 = oneArr;
				} else {
					this.options1 = this.optionsArr;
				}
			},
			visibleChange (bool) {
//			关闭弹框时，重新给下拉框赋值
				if (!bool) {
					this.options1 = this.optionsArr;
				}
			}
		}
	}
</script>

<style>
</style>