<template lang="pug">
  Card
    template(slot="head")
      span 地区访问统计
      slot(name="helper")

    template(slot="content")
      el-row(style="width: 100%")
        el-col(:lg="16")
          ECharts(ref="map" style="width: 100%; height: 500px;"
            :options="mergeOptions"
            :auto-resize="false")

        el-col(:lg="8")
          List(:orderMark="6" :data="lists")

</template>

<script>
import Card from '@/components/Card';
import List from '@/components/List';
import ECharts from 'vue-echarts/components/ECharts';
import debounce from 'lodash/debounce';

export default {
  name: 'MapCard',
  components: {
    Card,
    List,
    ECharts
  },
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
  computed: {
    mergeOptions() {
      this.options.series[0].data = this.value;
      this.options.series[1].data = this.value.slice(0, 6);
      return this.options;
    },
    lists() {
      return this.value
        .slice(0, 10)
        .map(v => ({ name: v.name, value: v.value[2] }));
    }
  },
  mounted() {
    // echarts map 使用 auto-resize 时导致页面性能问题
    // 这里手动监听
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    // 移除监听
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize: debounce(function() {
      this.$refs.map.resize();
    }, 100)
  }
};
</script>
