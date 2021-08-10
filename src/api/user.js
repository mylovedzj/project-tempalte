import $axios from '../utils/axios';
//获取钉钉配置参数
export function getConfigs(params) {
    return request({
      url: '/sys/login/getConfigs.do',
      method: 'get',
      params
    })
  }
  
  // 获取钉钉用户信息(免登)
export function dtalkLogin(params) {
    return request({
        url: '/sys/login/getDtalkUser.do',
        method: 'get',
        params
    })
}