/**
 * @module 本地存储功能封装
 * @attr {Fn} getLocal 获取本地存储的值
 * @attr {Fn} setLocal 设置本地存储的值
 * @attr {Fn} removeLocal
 */
const STORAGE_USER_KEY = 'STORAGE_USER_KEY'

export default {
  /**
   * 获取指定键的本地存储值
   * @param {*} key 如果不填此参数，默认本地存储的键 'STORAGE_USER_KEY'
   * @return {JSON} 返回一个有本地存储值构成的对象 
   */
  getLocal (key = STORAGE_USER_KEY) {
    console.log('get local opeartion')
    return JSON.parse(window.localStorage.getItem(key))
  },

  /**
   * 设置指定键的本地存储值
   * @param {} key 本地存储的键
   * @param {} res 对应键的值
   * @param {} isSaveOldData 可选，判断是增加值还是替换为新的值(false：替换)
   */
  setLocal (key = STORAGE_USER_KEY, res, isSaveOldData = false) {
    console.log(res);
    console.log('set local opeartion')
    if (isSaveOldData) {
      let oldData = this.getLocal(key)
      const newData = JSON.stringify(oldData.concat(res))
      return window.localStorage.setItem(key, newData)
    }
    return window.localStorage.setItem(key, JSON.stringify(res))
  },

  /**
   * 清除本地存储
   * @param {*} key 可选，默认本地存储的键'STORAGE_USER_KEY'
   */
  removeLocal (key = STORAGE_USER_KEY) {
    console.log('remove local opeartion')
    window.localStorage.removeItem(key)
  }
}