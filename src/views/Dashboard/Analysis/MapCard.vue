<template>
  <Card>
    <template slot="head">
      <span>地区访问统计</span>
      <slot name="helper"></slot>
    </template>
    <template slot="content">
      <el-row  style="width: 100%">
        <el-col :lg="16">
          <Chart ref="map" :options="mergeOptions" :auto-resize="false" style="width: 100%; height: 500px;"></Chart>
        </el-col>
        <el-col :lg="8">
          <List :orderMark="6" :data="lists"></List>
        </el-col>
      </el-row>
    </template>
  </Card>
</template>

<script>
import Card from "@/components/Card";
import List from '@/components/List';
import ECharts from "vue-echarts/components/ECharts";
import debounce from 'lodash/debounce';

import chinaJson from "./china.json"
ECharts.registerMap('china', chinaJson)

export default {
  name: 'MapCard',
  props: {
    options: {
      type: Object,
      required: true
    },
    value: {
      type: [Array, Object],
      default: () => []
    }
  },
  data() {
    return {
      mapResize: ''
    }
  },
  computed: {
    mergeOptions() {
      this.options.series[0].data = this.value
      this.options.series[1].data = this.value.slice(0, 6)
      return this.options
    },
    lists() {
      return this.value.slice(0, 10).map((v)=>({name: v.name, value: v.value[2]}))
    }
  },
  mounted() {
    // echarts map 使用 auto-resize 时导致页面性能问题
    // 这里手动监听
    this.$nextTick(()=>{
      this.mapResize = this.$refs.map.resize
      setTimeout(()=>{window.addEventListener('resize', debounce(this.mapResize,100))},100)
    })
  },
  destroyed() {
    // 移除监听
    window.removeEventListener('resize',this.mapResize)
  },
  components: {
    Card,
    List,
    Chart: ECharts
  }
}
</script>
