export const salesChartConfig = {
  grid: {
    top: "10",
    right: "10",
    bottom: 0,
    left: "10"
  },
  xAxis: {
    type: "category",
    show: false,
    boundaryGap: false,
    axisLabel: {
      show: false
    }
  },
  yAxis: {
    type: "value",
    show: false
  },
  tooltip: {
    show: true,
    confine: true,
    formatter: (params) => `${params.seriesName}</br>${params.marker}${params.data}`
  },
  series: [
    {
      name: '日销售额',
      type: "line",
      data: []
    }
  ],
  color: ['#E6A23C']
}

export const visitsChartConfig = {
  grid: {
    top: "10",
    right: "5",
    bottom: 0,
    left: "5"
  },
  xAxis: {
    type: "category",
    show: false,
    boundaryGap: false,
    axisLabel: {
      show: false
    }
  },
  yAxis: {
    type: "value",
    show: false
  },
  tooltip: {
    show: true,
    confine: true,
    formatter: (params) => `${params.seriesName}</br>${params.marker}${params.data}`
  },
  series: [
    {
      name: '日访问量',
      data: [],
      type: "line",
      smooth: true,
      areaStyle: {}
    }
  ],
  color: ['#F56C6C']
}

export const paymentsChartConfig = {
  grid: {
    top: 0,
    right: "10",
    bottom: 0,
    left: "10"
  },
  xAxis: {
    type: "category",
    show: false,
    boundaryGap: false,
    axisLabel: {
      show: false
    }
  },
  yAxis: {
    type: "value",
    show: false
  },
  tooltip: {
    show: true,
    confine: true,
    formatter: (params) => `${params.seriesName}</br>${params.marker}${params.data}`
  },
  color: ['#409EFF'],
  series: [
    {
      name: '日支付数',
      type: "bar",
      data: []
    }
  ]
}

export const activityChartConfig = {
  grid: {
    top: "20",
    right: "10",
    bottom: 0,
    left: 0
  },
  xAxis: {
    type: "value",
    min: 0,
    max: 100,
    splitLine: {
      lineStyle: {
        color: '#EBEEF5'
      }
    }
  },
  yAxis: {
    type: "category",
    axisLine: {
      lineStyle: {
        color: '#C0C4CC'
      }
    }
  },
  tooltip : {
    show: true,
    confine: true,
    formatter: (params) => `${params.marker}${params.data}%`
  },
  color: [ '#67C23A'],
  series : [
    {
      name: '运营效果',
      type:'bar',
      label: {
          normal: {
              show: true,
              formatter: '{b}'
          }
      },
      barMaxWidth: '30',
      data:[]
    }
  ]
}

export const areaVisitsChartConfig = {
  tooltip: {
    trigger: 'item'
  },
  geo: {
    map: 'china',
    label: {
      emphasis: {
        show: false
      }
    },
    itemStyle: {
      normal: {
        areaColor: '#909399',
        borderColor: '#C0C4CC'
      },
      emphasis: {
        areaColor: '#909399'
      }
    }
  },
  series: [
    {
      name: '访问量',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: [],
      symbolSize: val => val[2] / 10,
      itemStyle: {
        normal: {
          color: '#E6A23C'
        }
      }
    },
    {
      name: '访问量',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: [],
      symbolSize: val => val[2] / 10,
      showEffectOn: 'render',
      rippleEffect: {
        scale: 2,
        brushType: 'fill'
      },
      hoverAnimation: true,
      itemStyle: {
        normal: {
          color: '#E6A23C',
          shadowBlur: 20,
          shadowColor: '#333'
        }
      },
      zlevel: 1
    }
  ]
}

export const trafficChartConfig = {
  grid: {
    top: "20%",
    right: "20",
    bottom: "20%",
    left: "20"
  },
  tooltip: {
    trigger: 'axis',
    formatter: function (params) {
      params = params[0];
      var date = new Date(params.name);
      return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
    },
    axisPointer: {
      animation: false
    }
  },
  xAxis: {
    type: 'time',
    splitLine: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: '#C0C4CC'
      }
    }
  },
  yAxis: {
    show: false,
    type: 'value',
    boundaryGap: [0, '100%'],
    splitLine: {
      show: false
    }
  },
  color: ['#409EFF'],
  series: [{
    name: '即时流量',
    type: 'line',
    showSymbol: false,
    hoverAnimation: false,
    data: []
  }]
}

export const payloadChartConfig = {
  series: [
    {
      type: 'gauge',
      splitNumber: 5,
      axisLine: {
        lineStyle: {
          color: [
            [0.2, '#67C23A'],
            [0.8, '#409EFF'],
            [1, '#F56C6C']
          ],
          width: 15
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#C0C4CC'
      },
      splitLine: {
        show: false,
        length: 10
      },
      pointer : {
        length : '60%',
        width : 2,
      },
      detail: {
        fontSize: 16,
        formatter:'{value}%',
        
      },
      data: [{value: 50}]
    }
  ]
}

export const visitsTypeChartConfig = {
  tooltip : {
    trigger: 'item',
    formatter: (params) => `${params.name}</br>${params.marker}${params.percent}%`
  },
  color: ['#409EFF', '#67C23A', '#E6A23C', '#F56C6C', '#909399'],
  series : [
    {
      name: '访问渠道',
      type: 'pie',
      radius : ['35%', '70%'],
      center: ['50%', '50%'],
      label: {
        show: true,
        color: '#909399'
      },
      labelLine: {
        lineStyle: {
          color: '#DCDFE6'
        }
      },
      data:[],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}
