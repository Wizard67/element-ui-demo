<template>
  <article>
    <el-row :gutter="20">
      <el-col :lg="6">
        <ChartCard height="80px" :options="salesChartConfig" :value="salesChartData.chart" title="销售额" tip="指标说明">
          <template slot="content">{{salesChartData.value | toThousands}}</template>
          <template slot="foot">总销售额 ￥{{visitsChartData.total | toThousands}}</template>
        </ChartCard>
      </el-col>

      <el-col :lg="6">
        <ChartCard height="80px" :options="visitsChartConfig" :value="visitsChartData.chart" title="访问量" tip="指标说明">
          <template slot="content">{{visitsChartData.value | toThousands}}</template>
          <template slot="foot">总访问 {{visitsChartData.total | toThousands}}</template>
        </ChartCard>
      </el-col>

      <el-col :lg="6">
        <ChartCard height="80px" :options="paymentsChartConfig" :value="paymentsChartData.chart" title="支付笔数" tip="指标说明">
          <template slot="content">{{paymentsChartData.value | toThousands}}</template>
          <template slot="foot">转化率 {{paymentsChartData.total | toThousands}}</template>
        </ChartCard>
      </el-col>

      <el-col :lg="6">
        <ChartCard height="80px" :options="activityChartConfig" :value="activityChartData.chart" title="运营活动效果" tip="指标说明">
          <template slot="content">{{activityChartData.value}}%</template>
          <template slot="foot">周同比 {{activityChartData.total}}%</template>
        </ChartCard>
      </el-col>

    </el-row>

    <el-row style="width: 100%">
      <el-col>
        <MapCard :options="areaVisitsChartConfig" :value="areaVisitsChartData">
          <template slot="helper">
            <el-date-picker
              v-model="date"
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              align="right"
              value-format= "timestamp"
              :pickerOptions="pickerOptions"
              @change="fetchMapDate">
            </el-date-picker>
          </template>
        </MapCard>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :lg="8">
        <ChartCard height="280px" :options="trafficChartConfig" :value="trafficChartDate" title="即时流量" tip="指标说明" />
      </el-col>

      <el-col :lg="8">
        <ChartCard height="280px" :options="payloadChartConfig" :value="payloadChartDate.chart" title="负载率" tip="指标说明" />
      </el-col>

      <el-col :lg="8">
        <ChartCard height="280px" :options="visitsTypeChartConfig" :value="visitsTypeChartData.chart" title="访问渠道" tip="指标说明" />
      </el-col>
    </el-row>

  </article>
</template>

<script>
import ChartCard from './ChartCard';
import MapCard from './MapCard';

import ECharts from "vue-echarts/components/ECharts";
import "echarts/lib/component/visualMap";
import 'echarts/lib/component/geo';
import 'echarts/lib/component/tooltip';
import "echarts/lib/chart/scatter";
import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/map";
import 'echarts/lib/chart/effectScatter';
import "echarts/lib/chart/pie";
import "echarts/lib/chart/gauge";

import { salesChartConfig,
        visitsChartConfig,
      paymentsChartConfig,
      activityChartConfig,
    areaVisitsChartConfig,
       trafficChartConfig,
    visitsTypeChartConfig,
       payloadChartConfig } from './chartsConfig'

import { mapState } from 'vuex'

export default {
  name: "Analysis",
  path: "/dashboard/analysis",

  data() {
    return {
      date: [new Date(), new Date()],
      pickerOptions: {
        disabledDate(date) {
          return date.getTime() > Date.now()
        }
      },
      salesChartConfig,
      visitsChartConfig,
      paymentsChartConfig,
      activityChartConfig,
      areaVisitsChartConfig,
      trafficChartConfig,
      visitsTypeChartConfig,
      payloadChartConfig
    };
  },

  computed: {
    ...mapState('analysis', [
      'salesChartData',
      'visitsChartData',
      'paymentsChartData',
      'activityChartData',
      'areaVisitsChartData',
      'trafficChartDate',
      'visitsTypeChartData',
      'payloadChartDate'
    ])
  },

  created() {
    this.$store.dispatch('analysis/initAnalysis')
  },

  methods: {
    fetchMapDate(range) {
      this.$store.dispatch('analysis/getMapDate')
    }
  },

  filters: {
    toThousands(num) {
      return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
    }
  },

  components: {
    ChartCard,
    MapCard,
    Chart: ECharts
  }
};
</script>
