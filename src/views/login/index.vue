<script setup>
import { useUserStore } from '@/store/modules/user'

// 获取router变量
const vueRouter = useRouter()
// 获取store变量
const userStore = useUserStore()

const pageData = reactive({
  projectName: import.meta.env.VITE_PROJECT_NAME,
  username: '',
  password: '',
  checked: true,
  isHidePassword: true
})
const isEmpty = computed(() => {
  return !pageData.username || !pageData.password
})

onMounted(() => {
  if (import.meta.env.DEV) {
    pageData.username = 'zyl'
    pageData.password = 'Zyl@123'
  }
})

const toLogin = () => {
  const param = {
    userName: pageData.username,
    password: pageData.password
  }
  userStore.loginRequest(param).then((res) => {
    vueRouter.push({ path: '/home' }).catch(() => {})
  })
}
</script>

<template>
  <div class="login-wrap">
    <div class="title">{{ pageData.projectName }}</div>
    <div class="input-wrap user">
      <span>账号</span>
      <van-field v-model="pageData.username" placeholder="请输入账号" clearable />
    </div>
    <div class="input-wrap password">
      <span>密码</span>
      <van-field
        v-model="pageData.password"
        :type="pageData.isHidePassword ? 'password' : ''"
        placeholder="请输入密码"
        clearable
      />
      <van-icon v-if="pageData.isHidePassword" @click="pageData.isHidePassword = false" name="closed-eye" />
      <van-icon v-else @click="pageData.isHidePassword = true" name="eye-o" />
    </div>
    <div class="remember-password">
      <div class="checkbox-wrap">
        <van-checkbox v-model="pageData.checked" shape="square">记住密码</van-checkbox>
      </div>
    </div>
    <div v-if="!isEmpty" @click="toLogin" class="login-btn">登录</div>
    <div v-else class="login-btn disable">登录</div>
  </div>
</template>

<style lang="scss" scoped>
.login-wrap {
  width: 100%;
  height: 100vh;
  font-size: 30px;
  padding-top: 262px;
  background: url('@/assets/images/login-bg@2x.png');
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
  box-sizing: border-box;
  .title {
    width: 480px;
    font-size: 44px;
    text-align: center;
    font-family: Alibaba-PuHuiTi-B, Alibaba-PuHuiTi;
    font-weight: normal;
    color: #1c7ffb;
    line-height: 42px;
    letter-spacing: 2px;
  }
  .input-wrap {
    width: 612px;
    height: 80px;
    box-sizing: border-box;
    padding: 0 20px 0 32px;
    border-radius: 3px;
    border: 1px solid #a2aee2;
    font-size: 30px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #343434;
    line-height: 42px;
    display: flex;
    align-items: center;
    &.user {
      margin-top: 142px;
      margin-bottom: 72px;
    }
    .van-cell {
      background-color: transparent;
      padding: 20px 0;
    }
    > span {
      min-width: 68px;
      margin-right: 48px;
    }
  }
  .remember-password {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
    font-size: 28px;
    font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
    font-weight: normal;
    color: #9e9e9e;
    .checkbox-wrap {
      margin-right: 64px;
    }
  }
  .login-btn {
    width: 612px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    margin-top: 80px;
    background: linear-gradient(90deg, #50a8ff 0%, #436fff 100%);
    border-radius: 6px;
    font-size: 32px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
    &.disable {
      background: #dae5ff;
    }
  }
}
</style>
