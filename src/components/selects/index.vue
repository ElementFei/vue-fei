<template>
	<div id="layout">
		<el-select filterable @visible-change="filterChange" :filter-method="filterMethod" v-model="value6" placeholder="请选择">
	    <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
	      <span style="float: left">{{ item.label }}</span>
	      <span style="text-align: center">{{ item.label }}</span>
	      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
	    </el-option>
	  </el-select>
		<el-select v-model="value7" placeholder="请选择">
	    <el-option-group
	      v-for="group in options3"
	      :key="group.label"
	      :label="group.label">
	      <el-option
	        v-for="item in group.options"
	        :key="item.value"
	        :label="item.label"
	        :value="item.value">
	      </el-option>
	    </el-option-group>
	  </el-select>
	  <div class="block">
	    <span class="demonstration">默认</span>
	    <el-date-picker
	      v-model="value1"
	      type="date"
	      @change="changes"
	      format="yyyy 年 MM 月 dd 日"
      	value-format="yyyy-MM-dd"
	      placeholder="选择日期">
	    </el-date-picker>
	  </div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
      	value1: '',
        options3: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        value7: '',
        cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
        citiesCopy: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
        value6: ''
      }
    },
    methods: {
    	changes () {
    		console.log(this.value1)
    	},
    	filterChange (bool) {
    		if (bool) {
    			this.cities = this.citiesCopy;
    		}
    	},
    	filterMethod (value) {
    		var arr = [];
    		if (value == '') {
    			this.cities = this.citiesCopy;
    		} else {
    			this.cities = this.citiesCopy;
    			for (var i = 0; i < this.cities.length; i++) {
	    			if (this.cities[i].value.indexOf(value) >= 0) {
	    				arr.push(this.cities[i])
	    			} else if (this.cities[i].label.indexOf(value) >= 0) {
	    				arr.push(this.cities[i])
	    			}
	    		}
    			this.cities = arr;
    		}
    	}
    }
  }
</script>