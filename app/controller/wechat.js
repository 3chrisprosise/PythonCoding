'use strict'
const Controller = require('egg').Controller;


class WechatController extends Controller {
  constructor(ctx){
    super(ctx)
  }

  async varidate(){
    let token = this.config.wechat_config_token;
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
}

module.exports = WechatController;