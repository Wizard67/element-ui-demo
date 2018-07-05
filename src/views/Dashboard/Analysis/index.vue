<template>
  <article>
    <el-row :gutter="20">
      <el-col :lg="6">
        <ChartCard height="80px" title="销售额" tip="指标说明"
          :options="salesChartConfig"
          :value="salesChartData.chart"
        >
          <template slot="content">{{salesChartData.value | toThousands}}</template>
          <template slot="foot">总销售额 ￥{{visitsChartData.total | toThousands}}</template>
        </ChartCard>
      </el-col>

      <el-col :lg="6">
        <ChartCard height="80px" title="访问量" tip="指标说明"
          :options="visitsChartConfig"
          :value="visitsChartData.chart"
        >
          <template slot="content">{{visitsChartData.value | toThousands}}</template>
          <template slot="foot">总访问 {{visitsChartData.total | toThousands}}</template>
        </ChartCard>
      </el-col>

      <el-col :lg="6">
        <ChartCard height="80px" title="支付笔数" tip="指标说明"
          :options="paymentsChartConfig"
          :value="paymentsChartData.chart"
        >
          <template slot="content">{{paymentsChartData.value | toThousands}}</template>
          <template slot="foot">转化率 {{paymentsChartData.total | toThousands}}</template>
        </ChartCard>
      </el-col>

      <el-col :lg="6">
        <ChartCard height="80px" title="运营活动效果" tip="指标说明"
          :options="activityChartConfig"
          :value="activityChartData.chart"
        >
          <template slot="content">{{activityChartData.value}}%</template>
          <template slot="foot">周同比 {{activityChartData.total}}%</template>
        </ChartCard>
      </el-col>
    </el-row>

    <el-row style="width: 100%">
      <el-col>
        <MapCard :options="areaVisitsChartConfig"
          :value="areaVisitsChartData"
        >
          <template slot="helper">
            <el-date-picker type="daterange" align="right" value-format= "timestamp"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              v-model="date"
              :pickerOptions="pickerOptions"
              @change="fetchMapDate"
            />
          </template>
        </MapCard>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :lg="8">
        <ChartCard height="280px" title="即时流量" tip="指标说明"
          :options="trafficChartConfig"
          :value="trafficChartDate"
        />
      </el-col>

      <el-col :lg="8">
        <ChartCard height="280px" title="负载率" tip="指标说明" 
          :options="payloadChartConfig"
          :value="payloadChartDate.chart"
        />
      </el-col>

      <el-col :lg="8">
        <ChartCard height="280px" title="访问渠道" tip="指标说明"
          :options="visitsTypeChartConfig"
          :value="visitsTypeChartData.chart"
        />
      </el-col>
    </el-row>
  </article>
</template>

<script>
import ChartCard from './_ChartCard';
import MapCard from './_MapCard';

import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/geo';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/map';
import 'echarts/lib/chart/effectScatter';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/gauge';

import {
  salesChartConfig,
  visitsChartConfig,
  paymentsChartConfig,
  activityChartConfig,
  areaVisitsChartConfig,
  trafficChartConfig,
  visitsTypeChartConfig,
  payloadChartConfig
} from '@/themes/echarts/chartsConfig';

import { mapState } from 'vuex';

export default {
  name: 'Analysis',
  components: {
    ChartCard,
    MapCard
  },
  filters: {
    toThousands(num) {
      return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    }
  },
  data() {
    return {
      date: [new Date(), new Date()],
      pickerOptions: {
        disabledDate(date) {
          return date.getTime() > Date.now();
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
    this.$store.dispatch('analysis/initAnalysis');
  },
  methods: {
    fetchMapDate() {
      this.$store.dispatch('analysis/getMapDate');
    }
  }
};
</script>
