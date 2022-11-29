<script setup>
import Supervise from './components/Supervise/index.vue'

</script>

<template>
  <div class="page-wrap">
    <Supervise />
  </div>
</template>

<style lang="scss" scoped>
.page-wrap {
  min-height: 100vh;
  color: #fff;
  background: #04185b;
  font-size: 30px;
  padding: 40px 20px;
  .header-img {
    img {
      width: 100%;
    }
  }
  .panel-list-wrap {
    padding: 0px 20px;
  }
}
</style>
