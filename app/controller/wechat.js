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
    this.ctx.body = await this.ctx.service.wechat.varidate(
      token,
      signature,
      timestamp,
      nonce,
      echostr
    )
  }
}

module.exports = WechatController;