'use strict'
const Controller = require('egg').Controller;


class WechatController extends Controller {
  constructor(ctx){
    super(ctx)
  }
  
  /**
   * 微信验证接口
   * 
   * @memberof WechatController
   */
  async varidate(){
    let token = this.config.wechat_config.token;
    let signature = this.ctx.query.signature;
    let timestamp = this.ctx.query.timestamp;
    let nonce = this.ctx.query.nonce;
    let echostr = this.ctx.query.echostr;
    console.log(
      'token: ',token, 
      'signature: ', signature,
      'timestamp: ', timestamp,
      'nonce: ', nonce 
    )
    let result = await this.ctx.service.wechat.varidate(
      token,
      signature,
      timestamp,
      nonce,
      echostr
    )
    console.log(result)
    this.ctx.body = result
  }

  async getAndSaveAccessToken(){
    let token = this.config.wechat_config.token;
    let appid = this.config.wechat_config.appid;
    let appSecret = this.config.wechat_config.appSecret;
    let grant_type = "client_credential"

    let result = await this.ctx.service.wechat.getAndSaveAccessToken(
      
    )
  }
}

module.exports = WechatController;