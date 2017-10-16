/**
 * Request地址请求设置
 * 
 * @module {Object} host
 * @vars {String} localUrl 前端本地地址
 * @vars {String} localPort 前端本地端口
 * @vars {String} dir 接口前缀,和后端接口一致
 * @vars {String} localHost 前端请求域，端口和后端NodeJs一致
 * @attr {String} baseHost 导出模块的属性--前端请求域
 * @attr {} mine 
 * @attr {} login
 * @attr {} loginCellPhone
 * @attr {} loginRefresh 登录信息刷新
 * @attr {} banner 
 * @attr {} playListCatList 歌单类型列表
 * @attr {} 
 */

const localUrl = 'http://192.168.1.15';
const localPort = '3000';
const dir = '/v1';
const localHost = `${localUrl}:${localPort}${dir}`;
const useHost = localHost;
module.exports = {
  baseHost: useHost,
  mine: `${useHost}/mine`,
  login: `${useHost}/login`,
  loginCellPhone: `${useHost}/login/cellphone`,
  loginRefresh: `${useHost}/login/refresh`,
  banner: `${useHost}/banner`,
  playListCatList: `${useHost}/playlist/catlist`,
  
}