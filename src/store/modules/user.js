import store from '@/store'
import { getToken, removeToken, setToken } from '@/utils/auth'
import { login, getInfo, logout as userLogout } from '@/api/user'

export const useUserStore = defineStore('user', () => {
  const token = ref(getToken() || '')
  const userInfo = ref({})

  const loginRequest = (loginData) => {
    return new Promise((resolve, reject) => {
      login({
        uuid: loginData.uuid,
        userName: loginData.userName,
        password: loginData.password,
        code: loginData.code
      })
        .then(({ data }) => {
          setToken(data.token)
          token.value = data.token
          resolve(true)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  const queryUserInfo = () => {
    return new Promise((resolve, reject) => {
      getInfo()
        .then((res) => {
          userInfo.value = res.data
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  const logout = () => {
    return new Promise((resolve, reject) => {
      userLogout()
        .then((res) => {
          removeToken()
          token.value = ''
          roles.value = []
          resetRouter()
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  const resetToken = () => {
    removeToken()
    token.value = ''
    roles.value = []
  }

  return {
    token,
    userInfo,
    loginRequest,
    queryUserInfo,
    logout,
    resetToken
  }
})

export function useUserStoreHook() {
  return useUserStore(store)
}
