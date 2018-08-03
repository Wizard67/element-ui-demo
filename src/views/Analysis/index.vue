<template>
  <article>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
        <ChartCard
          height="80px" title="销售额" tip="指标说明"
          :options="chartConfig.sales"
          :value="chartCardDate.sales.chart"
        >
          <template slot="content">{{ chartCardDate.sales.value | toThousands }}</template>
          <template slot="foot"> 总销售额 ￥{{ chartCardDate.sales.total | toThousands }}</template>
        </ChartCard>
      </el-col>

      <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
        <ChartCard
          height="80px" title="访问量" tip="指标说明"
          :options="chartConfig.visits"
          :value="chartCardDate.visits.chart"
        >
          <template slot="content">{{ chartCardDate.visits.value | toThousands }}</template>
          <template slot="foot"> 总访问 {{ chartCardDate.visits.total | toThousands }}</template>
        </ChartCard>
      </el-col>

      <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
        <ChartCard
          height="80px" title="支付笔数" tip="指标说明"
          :options="chartConfig.payments"
          :value="chartCardDate.payments.chart"
        >
          <template slot="content">{{ chartCardDate.payments.value | toThousands }}</template>
          <template slot="foot"> 转化率 {{ chartCardDate.payments.total | toThousands }}</template>
        </ChartCard>
      </el-col>

      <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
        <ChartCard
          height="80px" title="运营活动效果" tip="指标说明"
          :options="chartConfig.activity"
          :value="chartCardDate.activity.chart"
        >
          <template slot="content">{{ chartCardDate.activity.value }}%</template>
          <template slot="foot"> 周同比 {{ chartCardDate.activity.total }}%</template>
        </ChartCard>
      </el-col>
    </el-row>

    <el-row style="width: 100%">
      <el-col>
        <MapCard :options="chartConfig.areaVisits" :value="mapCardData">
          <template slot="helper">
            <el-date-picker class="hidden-xs-only" type="daterange" align="right" value-format= "timestamp"
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
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <ChartCard
          height="280px" title="即时流量" tip="指标说明"
          :options="chartConfig.traffic"
          :value="chartCardDate.traffic.chart"
        />
      </el-col>

      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <ChartCard
          height="280px" title="负载率" tip="指标说明"
          :options="chartConfig.payload"
          :value="chartCardDate.payload.chart"
        />
      </el-col>

      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <ChartCard
          height="280px" title="访问渠道" tip="指标说明"
          :options="chartConfig.visitsType"
          :value="chartCardDate.visitsType.chart"
        />
      </el-col>
    </el-row>
  </article>
</template>

<script>
import ChartCard from './components/ChartCard'
import MapCard from './components/MapCard'

import chartConfig from './config'

import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const analysisModule = namespace('analysis')

@Component({
  components: { ChartCard, MapCard },
  filters: { toThousands: num => (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') }
})
export default class Analysis extends Vue {
  datePick = [new Date(), new Date()]
  chartConfig = chartConfig
  pickerOptions = {
    disabledDate: date => date.getTime() > Date.now()
  }

  @analysisModule.State chartCardDate
  @analysisModule.State mapCardData

  @analysisModule.Action initAnalysis
  @analysisModule.Action getMapDate

  created () {
    this.initAnalysis()
  }

  fetchMapDate () {
    this.getMapDate()
  }
}
</script>
