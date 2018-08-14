import ECharts from 'vue-echarts/components/ECharts'

import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/geo'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/effectScatter'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/gauge'

import mapJson from './china.json'

ECharts.registerMap('china', mapJson)
