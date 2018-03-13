'use strict'

const Service = require('egg').Service;
const Crypto = require('crypto');
const Sha1 = require('sha1')
class WechatService extends Service {

  constructor(ctx){
      super(ctx); // 继承配置项
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


  async getAndSaveAccessToken(grant_type, appid, secret){
    
  }


  async updateAccessToken(){

  }


  async makeMenu(){

  }

}

module.exports = WechatService;