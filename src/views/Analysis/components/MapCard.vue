<template>
  <Card>
    <template slot="head">
      <span>地区访问统计</span>
      <slot name="helper"/>
    </template>

    <template slot="content">
      <el-row style="width: 100%">
        <el-col :lg="16">
          <ECharts ref="map" style="width: 100%; height: 500px;"
            :options="mergeOptions"
            :auto-resize="false"/>
        </el-col>

        <el-col :lg="8">
          <List :orderMark="6" :data="lists"/>
        </el-col>
      </el-row>
    </template>
  </Card>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

import ECharts from 'vue-echarts/components/ECharts'
import Card from '@/components/Card'
import List from '@/components/List'

import { addListener, removeListener } from 'resize-detector'
import debounce from 'lodash/debounce'

@Component({
  components: { Card, List, ECharts }
})
export default class MapCard extends Vue {
  handleResize = debounce(() => this.$refs.map.resize(), 100)

  @Prop({ type: Object, required: true }) options
  @Prop({ type: [Array, Object], default: () => [] }) value

  get mergeOptions () {
    this.options.series[0].data = this.value
    this.options.series[1].data = this.value.slice(0, 6)
    return this.options
  }

  get lists () {
    return this.value.slice(0, 10).map(v => ({ name: v.name, value: v.value[2] }))
  }

  mounted () {
    // echarts map 使用 auto-resize 时导致页面性能问题
    // 这里手动监听
    addListener(this.$el, this.handleResize)
  }

  beforeDestroy () {
    // 移除监听
    removeListener(this.$el, this.handleResize)
  }
}
</script>
