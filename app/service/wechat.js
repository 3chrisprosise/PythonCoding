'use strict'

const Service = require('egg').Service;
const Crypto = require('crypto');

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
    let array = new Array(token, timestamp, nonce);
    let str = array.sort().join('');
    let sha1Code = Crypto.createHash("sha1");
    let code = sha1Code.update(str, 'utf-8').digest("hex"); 
    return code === signature ? echostr : "err"
  }

  async makeMenu(){

  }
}

module.exports = WechatService;