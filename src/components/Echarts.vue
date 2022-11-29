<template>
  <div
    class="echarts"
    ref="echarts"
    :style="{ width: echartsWidth, height: echartsHeight }"
  ></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  props: {
    echartsWidth: {
      type: String,
      default: '100%'
    },
    echartsHeight: {
      type: String,
      default: '300px'
    },
    echartsOption: {
      type: Object,
      default() {
        return {};
      }
    },
    dataEcharts: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      echarts: ''
    };
  },
  mounted() {
    this.initEcharts(true);
    window.onresize = () => {
      this.echarts && this.echarts.resize(false);
    };
  },
  watch: {
    echartsOption: {
      handler() {
        this.initEcharts(false);
      },
      deep: true
    }
  },
  methods: {
    initEcharts() {
      this.echarts = echarts.init(this.$refs.echarts);
      this.echarts.setOption(this.echartsOption, true);
      this.echarts.off('click');
      this.echarts.on('click', param => {
        this.$emit('echartsClick', param);
      });
      this.echarts.on('legendselectchanged', params => {
        this.$emit('legendselectchanged', params);
      });
    }
  }
};
</script>
