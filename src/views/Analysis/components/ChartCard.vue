<template lang="pug">
  Card
    template(slot="head")
      span {{title}}
      el-tooltip(effect="dark" placement="top" :content="tip")
        i.el-icon-icon-question-circle-o

    template(slot="content")
      template(v-if="$slots.content")
        .font--focus
          slot(name="content")

      ECharts(style="width: 100%;" :style="{height: height}"
        :options="mergeOptions" :auto-resize="true")

    template(slot="foot")
      slot(name="foot")

</template>

<script>
import Card from '@/components/Card'
import ECharts from '@/assets/echarts'

import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: { Card, ECharts }
})
export default class ChartCard extends Vue {
  @Prop({ type: String, default: '100px' })
  height
  @Prop({ type: String, default: 'Title' })
  title
  @Prop({ type: String, default: 'Tip' })
  tip
  @Prop({ type: Object, required: true })
  options
  @Prop({ type: [Array, Object], default: () => [] })
  value

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
