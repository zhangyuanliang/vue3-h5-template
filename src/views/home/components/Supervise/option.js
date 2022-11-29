import * as echarts from 'echarts'

export const etjkOption = {
  grid: {
    top: '20%',
    left: '3%',
    right: '3%',
    bottom: '0',
    containLabel: true
  },
  legend: {
    data: ['儿童健康档案随访率'],
    textStyle: {
      color: "#87c6FF",
    }
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      lineStyle: {
        color: "#ddd",
      },
    },
    backgroundColor: "rgba(255,255,255,1)",
    padding: [15, 10],
    textStyle: {
      color: "#87c6FF",
    },
    extraCssText: "box-shadow: 0 0 5px rgba(0,0,0,0.3)",
  },
  xAxis: {
    type: "category",
    data: ["2016年", "2018年", "2019年", "2020年", "2021年", "2022年"],
    boundaryGap: false,
    axisTick: {
      show: false, // 不显示坐标轴刻度线
    },
    axisLine: {
      show: true, // 不显示坐标轴线
    },
    axisLabel: {
      rotate: 45, //代表逆时针旋转
      show: true, // 不显示坐标轴上的文字
    },
    splitLine: {
      show: false, // 不显示网格线
    },
  },
  yAxis: {
    name: "单位：%",
    nameTextStyle: {
      fontSize: 12,
    },
    type: "value",
    axisTick: {
      show: false, // 不显示坐标轴刻度线
    },
    axisLine: {
      show: false, // 不显示坐标轴线
    },
    axisLabel: {
      show: true, // 不显示坐标轴上的文字
      textStyle: {
        padding: 0,
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "#0a3256",
      },
    },
  },
  series: [
    {
      data: [20, 60, 50, 80, 92, 60],
      name: "儿童健康档案随访率",
      type: "line",
      smooth: true,
      showSymbol: true,
      symbol: "emptyCircle",
      symbolSize: 8,
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "#66a7ff",
              },
              {
                offset: 1,
                color: "#f4faff",
              },
            ],
            false
          ),
        },
      },
      itemStyle: {
        normal: {
          color: "#127bfe",
        },
      },
      lineStyle: {
        normal: {
          width: 3,
        },
      },
    },
  ],
}
