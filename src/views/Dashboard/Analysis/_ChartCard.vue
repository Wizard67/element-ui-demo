<template>
  <Card>
    <template slot="head">
      <span>{{title}}</span>
      <el-tooltip effect="dark" :content="tip" placement="top">
        <i class="el-icon-icon-question-circle-o"></i>
      </el-tooltip>
    </template>
    <template slot="content">
      <template v-if="$slots.content">
        <div class="font--focus">
          <slot name="content"></slot>
        </div>
      </template>
      <Chart :options="mergeOptions" :auto-resize="true" style="width: 100%;" :style="{height: height}"></Chart>
    </template>
    <template slot="foot">
      <slot name="foot"></slot>
    </template>
  </Card>
</template>

<script>
import Card from '@/components/Card';
import ECharts from 'vue-echarts/components/ECharts.vue';

export default {
  name: 'ChartCard',
  components: {
    Card,
    Chart: ECharts
  },
  props: {
    height: {
      type: String,
      default: '100px'
    },
    title: {
      type: String,
      default: 'Title'
    },
    tip: {
      type: String,
      default: 'Tip'
    },
    options: {
      type: Object,
      required: true
    },
    value: {
      type: [Array, Object],
      default: () => []
    }
  },
  computed: {
    mergeOptions() {
      this.options.series[0].data = this.value;
      return this.options;
    }
  }
};
</script>
