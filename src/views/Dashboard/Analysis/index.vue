<template>
  <article>
    <el-row :gutter="20">
      <el-col :lg="6">
        <ChartCard height="80px" title="销售额" tip="指标说明"
          :options="chartConfig.sales"
          :value="chartCardDate.sales.chart"
        >
          <template slot="content">{{chartCardDate.sales.value | toThousands}}</template>
          <template slot="foot">总销售额 ￥{{chartCardDate.sales.total | toThousands}}</template>
        </ChartCard>
      </el-col>

      <el-col :lg="6">
        <ChartCard height="80px" title="访问量" tip="指标说明"
          :options="chartConfig.visits"
          :value="chartCardDate.visits.chart"
        >
          <template slot="content">{{chartCardDate.visits.value | toThousands}}</template>
          <template slot="foot">总访问 {{chartCardDate.visits.total | toThousands}}</template>
        </ChartCard>
      </el-col>

      <el-col :lg="6">
        <ChartCard height="80px" title="支付笔数" tip="指标说明"
          :options="chartConfig.payments"
          :value="chartCardDate.payments.chart"
        >
          <template slot="content">{{chartCardDate.payments.value | toThousands}}</template>
          <template slot="foot">转化率 {{chartCardDate.payments.total | toThousands}}</template>
        </ChartCard>
      </el-col>

      <el-col :lg="6">
        <ChartCard height="80px" title="运营活动效果" tip="指标说明"
          :options="chartConfig.activity"
          :value="chartCardDate.activity.chart"
        >
          <template slot="content">{{chartCardDate.activity.value}}%</template>
          <template slot="foot">周同比 {{chartCardDate.activity.total}}%</template>
        </ChartCard>
      </el-col>
    </el-row>

    <el-row style="width: 100%">
      <el-col>
        <MapCard :options="chartConfig.areaVisits"
          :value="mapCardData"
        >
          <template slot="helper">
            <el-date-picker type="daterange" align="right" value-format= "timestamp"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              v-model="datePick"
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
          :options="chartConfig.traffic"
          :value="chartCardDate.traffic.chart"
        />
      </el-col>
      
      <el-col :lg="8">
        <ChartCard height="280px" title="负载率" tip="指标说明" 
          :options="chartConfig.payload"
          :value="chartCardDate.payload.chart"
        />
      </el-col>

      <el-col :lg="8">
        <ChartCard height="280px" title="访问渠道" tip="指标说明"
          :options="chartConfig.visitsType"
          :value="chartCardDate.visitsType.chart"
        />
      </el-col>
    </el-row>
  </article>
</template>

<script>
import ChartCard from './_ChartCard';
import MapCard from './_MapCard';
import ECharts from 'vue-echarts/components/ECharts';

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

import mapJson from '@/assets/echarts/china.json';
ECharts.registerMap('china', mapJson);

import chartConfig from './config';
import { mapState } from 'vuex';

const pickerOptions = {
  disabledDate(date) {
    return date.getTime() > Date.now();
  }
};

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
      datePick: [new Date(), new Date()],
      chartConfig,
      pickerOptions
    };
  },
  computed: {
    ...mapState('analysis', ['chartCardDate', 'mapCardData'])
  },
  created() {
    this.$store.dispatch('analysis/initAnalysis');
    this.$store.dispatch('analysis/getMapDate');
  },
  methods: {
    fetchMapDate() {
      this.$store.dispatch('analysis/getMapDate');
    }
  }
};
</script>
