<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const active = ref(0)
const onChange = (index) => {
  switch (index) {
    case 0:
      router.push('/home')
      break
    case 1:
      // router.push('/demo')
      break
    case 2:
      // router.push('/user')
      break
  }
}
</script>

<template>
  <div class="main-page">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
  <!-- <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="setting-o">Demo</van-tabbar-item>
    <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
  </van-tabbar> -->
</template>

<style scoped lang="scss">
.main-page {
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
