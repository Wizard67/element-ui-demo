<template>
  <Card>
    <template slot="head">
      <span>{{title}}</span>
      <el-tooltip effect="dark" placement="top" :content="tip">
        <i class="el-icon-icon-question-circle-o"></i>
      </el-tooltip>
    </template>

    <template slot="content">
      <template v-if="$slots.content">
        <div class="font--focus">
          <slot name="content"/>
        </div>
      </template>
      <ECharts style="width: 100%;" :style="{height: height}"
        :options="mergeOptions" :auto-resize="true"/>
    </template>

    <template slot="foot">
      <slot name="foot"/>
    </template>
  </Card>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

import ECharts from 'vue-echarts/components/ECharts'
import Card from '@/components/Card'

@Component({
  components: { Card, ECharts }
})
export default class ChartCard extends Vue {
  @Prop({ type: String, default: '100px' }) height
  @Prop({ type: String, default: 'Title' }) title
  @Prop({ type: String, default: 'Tip' }) tip
  @Prop({ type: Object, required: true }) options
  @Prop({ type: [Array, Object], default: () => [] }) value

  get mergeOptions () {
    this.options.series[0].data = this.value
    return this.options
  }
}
</script>

<style lang="scss" scoped>
.font {
  &--focus {
    font-size: 24px;
    font-weight: 600;
  }

  &--light {
    color: #909399;
    font-size: 14px;
  }
}
</style>
