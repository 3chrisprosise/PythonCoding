'use strict'

const Controller = require('egg').Controller
const Axios = require('axios')

class GetTokenController extends Controller {

  constructor(ctx){
    super(ctx)
  }

  async getoken(){
    let appid = this.config.wechat_config.appid;
    let secret = this.config.wechat_config.appSecret;
    let grant_type = 'client_credential'
    let token = await Axios.get(`https://api.weixin.qq.com/cgi-bin/token?grant_type=${grant_type}&appid=${appid}&secret=${secret}`)
    console.log(token.data)
    return;
  }

}
module.exports = GetTokenController