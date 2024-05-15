import { request } from './axios.js'

/**
 * @description -封装User类型的接口方法
 */
export class UserService {       // 模块一
  /**
   * @description 用户登录
   * @param {string} username - 用户名
   * @return {HttpResponse} result
   */
  static async login1(params) {   // 接口一
    return request('/login', params, 'post')
  }
  static async login2(params) {   // 接口二
    return request('/login', params, 'post')
  }
  static async login3(params) {   // 接口三
    return request('/login', params, 'post')
  }
}

export class landRelevant {     // 模块二
  /**
   * @description 获取地列表
   * @return {HttpResponse} result
   */
  static async landList(params) {
    return request('/land_list_info', params, 'get')
  }
}

// export const getCorpTicket = (params) => {
//     return request(`https://qyapi.weixin.qq.com/cgi-bin/service/get_corp_token?suite_access_token=${params.access_token}`, params, 'POST')
// }

export const getAccessToken = (params) => {
  console.log(params, 'access-params')
  return request(`/api/cgi-bin/gettoken?corpid=${params.corpId}&corpsecret=${params.secret}`, {}, 'get')
}

export const getCorpTicket = (params) => {
  console.log(params, 'ticket-params')

  return request(`/api/cgi-bin/get_jsapi_ticket?access_token=${params.access_token}`, params, 'get')
}

export const getAppTicket = (params) => {
  console.log(params, 'ticket-params')

  return request(`/api/cgi-bin/ticket/get?access_token=${params.access_token}&type=agent_config`, params, 'get')
}