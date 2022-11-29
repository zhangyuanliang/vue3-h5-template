<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  updateTime: {
    type: String,
    default: '截至上月末'
  },
  hideUpdateTime: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div>
    <div class="yTitle" v-if="props.title">
      {{ props.title }}
    </div>
    <div v-if="!props.hideUpdateTime" class="updateTime">期别: {{ props.updateTime }}</div>
    <slot name="origen"></slot>
  </div>
</template>

<style lang="scss" scoped>
.yTitle {
  color: #ffffff;
  position: relative;
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
  font-size: 24px;
  background: linear-gradient(to right, #042855, #0a74f8);
}
.yTitle::before {
  background: #69a8ff;
  position: absolute;
  left: 0;
  height: 100%;
  content: '';
  top: 0;
  bottom: 0;
  width: 10px;
}
.updateTime {
  color: #acacac;
  font-size: 16px;
  text-align: right;
  margin: 10px 0;
}
</style>
