<script setup>
const props = defineProps({
  name: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="panel-wrap">
    <div class="content">
      <div class="panel-name">
        {{ props.name }}
      </div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.panel-wrap {
  color: #fff;
  border: 1px solid #62719a;
  margin-bottom: 40px;
  .time {
    font-size: 12px;
    font-weight: 400;
  }
  .content {
    position: relative;
    &::before {
      position: absolute;
      content: '';
      top: -6px;
      left: 64px;
      width: 6px;
      height: 12px;
      background: #fff;
    }
    .panel-name {
      font-size: 30px;
      font-weight: 500;
      color: #fff;
      margin-left: 70px;
      padding: 0 20px 0 46px;
      display: flex;
      align-items: center;
      position: absolute;
      top: -24px;
      background: #04185b;
      &::before {
        position: absolute;
        content: '';
        top: 2px;
        left: 14px;
        width: 16px;
        height: 38px;
        background: url('./panel-icon.png');
        background-size: 100% 100%;
      }
      &::after {
        position: absolute;
        content: '';
        top: 18px;
        right: 0;
        width: 6px;
        height: 12px;
        background: #fff;
      }
    }
  }
}
</style>
