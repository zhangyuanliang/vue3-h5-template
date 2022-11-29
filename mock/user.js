const roles = [
  {
    searchValue: null,
    createBy: null,
    createTime: null,
    updateBy: null,
    updateTime: null,
    remark: null,
    params: {},
    roleId: 1,
    roleName: '系统管理员',
    roleKey: 'admin',
    roleSort: '1',
    dataScope: '1',
    menuCheckStrictly: false,
    deptCheckStrictly: false,
    status: '0',
    delFlag: null,
    flag: false,
    menuIds: null,
    deptIds: null,
    admin: true
  }
]
export default [
  {
    url: '/dev_api/accountLogin',
    method: 'post',
    response: ({ body }) => {
      console.log('body>>>>>>>>', body)
      return {
        code: 200,
        msg: null,
        data: {
          token:
            'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjE1ODk3OTM5Mzc5Njk3NTgyMDgifQ.JCX6VHEdiiiBgFAHcRGfhQDMpypXmuKVVv_TPLngwe9kFgBhN4sIsbtNLlGvM1NIGk0Ud1AKJDZaP8yJTKFifg'
        },
        success: true
      }
    }
  },
  {
    url: '/dev_api/sysUser/getUserInfo',
    method: 'get',
    response: ({ body }) => {
      console.log('body>>>>>>>>', body)
      return {
        code: 200,
        message: 'ok',
        permissions: ['*:*:*'],
        roles: ['admin'],
        user: {
          searchValue: null,
          createBy: 'admin',
          createTime: '2018-03-16 11:33:00',
          updateBy: null,
          updateTime: null,
          remark: '管理员',
          params: {},
          userId: 1,
          deptId: null,
          userName: 'admin',
          nickName: '系统管理员',
          email: '975321416@163.com',
          phonenumber: '15888888888',
          sex: '1',
          avatar: '',
          password: '$2a$10$wiogkKfZf2gZxfAldUaY4O6RHL.DJtYldjQIaSgHcnQQBbOrOcjhy',
          salt: null,
          status: '0',
          delFlag: '0',
          loginIp: '10.68.12.165',
          loginDate: '2022-06-16T09:45:38.000+08:00',
          dept: null,
          roles: roles,
          roleIds: null,
          postIds: null,
          roleId: null,
          admin: true
        }
      }
    }
  },
  {
    url: '/dev_api/logout',
    method: 'post',
    response: ({ body }) => {
      console.log('body>>>>>>>>', body)
      return {
        code: 200,
        message: 'ok',
        data: {}
      }
    }
  }
]
