'use strict'

const Service = require('egg').Service;
const Crypto = require('crypto');
const moment = require('moment');

/**
 * 封装微信相关方法，需要用到 redis 缓存数据库和 mysql 数据库
 * 
 * @class WechatService
 * @extends {Service}
 */
class WechatService extends Service {

  constructor(ctx){
    super(ctx);
    this.appid = this.config.wechat_config.appid;
    this.appsecret = this.config.wechat_config.appsecret;
    this.redis = this.app.redis;
  }

  /**
   * 微信验证 Service
   * @param { str } token 微信token
   * @param { str } signature 微信加密签名
   * @param { str } timestamp 时间戳
   * @param { str } nonce 随机数
   * @param { str } echostr 随机字符串
   */
  async varidate(token, signature, timestamp, nonce, echostr){
    let array = [token, timestamp, nonce];
    let str = array.sort().join('');
    let sha1Code = Crypto.createHash("sha1");
    let code = sha1Code.update(str).digest("hex");  
    return code === signature ? echostr : "err"
  }


  /**
   * BASE API
   * 从微信端获取的 access_token 默认加载配置项中的 appid 和 appsecret， 同时会强制更新本地存储的 access_token, 过期时间与返回的时间提前 20 秒
   * @returns { json } 从微信端获取的 accessToken { access_token: 'access_token', expires_in: 'number' }
   * @memberof WechatService
   */
  async getAccessTokenFromServer(){
    let appid = this.appid;
    let secret = this.appsecret;
    let resData = await this.app.curl(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${secret}`,{
      method: 'GET',
      dataType: 'json'
    });
    console.log(resData.data);
    if(!resData.data.access_token){
      console.error("从服务器端获取 access_token 异常");
      let err = new Error('accessToken Error');
      err.name = 'WeChatAPIError';
      err.code = 40001;
      throw err;
    }
    this.redis.set('access_token', resData.access_token, 'EX', parseInt(resData.data.expires_in) - 20)
    return resData.data;
  }

  /**
   * BASE API
   * 获取 accessToken
   * @returns accessToken的值
   * @memberof WechatService
   */
  async getAccessToken(){

    this.getAccessTokenFromServer();
    if( ! this.redis.get('access_token')){
      return await this.getAccessTokenFromServer();
    }
    return await this.redis.get('access_token')
  }

  async getWeChatServerIp(){

  }

  async makeMenu(){

  }

}

module.exports = WechatService;