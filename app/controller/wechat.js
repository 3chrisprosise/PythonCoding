'use strict'
const Controller = require('egg').Controller;
const crypto = require('crypto');

class WechatController extends Controller {
  constructor(ctx){
    super(ctx)
  }

  async varidate(){
    let token = this.config.wechat_config_token;
    let signature = this.ctx.request.signature;
    let timestamp = this.ctx.request.timestamp;
    let nonce = this.ctx.request.echostr;

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