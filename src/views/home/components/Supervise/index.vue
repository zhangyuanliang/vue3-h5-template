<script setup>
import Echarts from '@/components/Echarts.vue'
import Panel from '../Panel/index.vue'
import chartsLabel from '../ChartsLabel/index.vue'
import { etjkOption } from './option.js'

// 门诊急诊情况
const mzjzInfo = ref({
  ryzrc: '223',
  mzzrc: '352',
  ptmz: '23',
  zjmz: '455',
  jz: '56'
})
// 检验检查情况
const jyjcInfo = ref({
  mzjy: '223',
  mzjc: '345',
  zyjy: '467',
  zyjc: '456'
})
</script>

<template>
  <div>
    <Panel name="公卫监管">
      <template #content>
        <div class="panel-content-wrap">
          <chartsLabel title="儿童健康监管" :hideUpdateTime="true"></chartsLabel>
          <div class="mt-4">
            <Echarts echartsHeight="220px" :echartsOption="etjkOption" />
          </div>
        </div>
      </template>
    </Panel>
    <Panel name="医疗监管">
      <template #content>
        <div class="panel-content-wrap line-wrap">
          <div class="line-wrap">
            <chartsLabel title="医疗就诊情况" updateTime="年初截至上月末"></chartsLabel>
            <div class="mzjz-wrap">
              <div class="mzjz-item">
                <div class="total">
                  <span class="name">入院总人次</span>
                  <span>
                    <span class="primary-color">{{ mzjzInfo.ryzrc }}</span>
                    人次
                  </span>
                </div>
              </div>
              <div class="mzjz-item">
                <div class="total">
                  <span class="name">门诊总人次</span>
                  <span>
                    <span class="primary-color">{{ mzjzInfo.mzzrc }}</span>
                    人次
                  </span>
                </div>
                <div class="other">
                  普通门诊{{ mzjzInfo.ptmz }}人次，专家门诊{{ mzjzInfo.zjmz }}人次，急诊{{ mzjzInfo.jz }}人次
                </div>
              </div>
            </div>
          </div>
          <div class="line-wrap">
            <chartsLabel title="检验检查情况" updateTime="年初截至上月末"></chartsLabel>
            <div class="flex justify-items-center jyjc-item">
              <img src="@/assets/images/mzjy.png" alt="" />
              <div class="name">门诊检验</div>
              <div class="value">
                <span class="primary-color">{{ jyjcInfo.mzjy }}</span>
                人次
              </div>
            </div>
            <div class="flex justify-items-center jyjc-item">
              <img src="@/assets/images/mzjc.png" alt="" />
              <div class="name">门诊检查</div>
              <div class="value">
                <span class="primary-color">{{ jyjcInfo.mzjc }}</span>
                人次
              </div>
            </div>
            <div class="flex justify-items-center jyjc-item">
              <img src="@/assets/images/zyjy.png" alt="" />
              <div class="name">住院检验</div>
              <div class="value">
                <span class="primary-color">{{ jyjcInfo.zyjy }}</span>
                人次
              </div>
            </div>
            <div class="flex justify-items-center jyjc-item">
              <img src="@/assets/images/zyjc.png" alt="" />
              <div class="name">住院检查</div>
              <div class="value">
                <span class="primary-color">{{ jyjcInfo.zyjc }}</span>
                人次
              </div>
            </div>
          </div>
        </div>
      </template>
    </Panel>
  </div>
</template>

<style lang="scss" scoped>
.primary-color {
  color: #feb26c;
  font-size: 36px;
  margin-right: 4px;
}
.flex-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.panel-content-wrap {
  padding: 30px;
}
.box {
  width: 48%;
}
.tabs-wrap {
  margin-top: 20px;
}
.line-wrap {
  margin-bottom: 40px;
}

.mzjz-wrap {
  .mzjz-item {
    width: 100%;
    padding: 40px;
    border: 1px solid #3375e6;
    border-radius: 50px;
    margin-top: 40px;
  }
  .total {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }
  .other {
    font-size: 18px;
    text-align: justify;
    margin-top: 10px;
  }
}
.jyjc-item {
  padding: 0 20px;
  margin-top: 30px;
  line-height: 60px;
  > img {
    width: 60px;
  }
  .name {
    width: 260px;
    text-align: center;
  }
  .value {
    width: 370px;
    text-align: right;
  }
}
:deep(.van-tab--card) {
  color: var(--primary-color);
  border-right: var(--primary-color) solid var(--primary-color);
}
:deep(.van-tab--card.van-tab--active) {
  color: #fff;
  background-color: var(--primary-color);
}
:deep(.van-tabs__nav--card) {
  border: var(--van-border-width-base) solid var(--primary-color);
}
</style>
