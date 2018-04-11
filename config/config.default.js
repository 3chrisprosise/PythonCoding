'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1519863722471_581';

  // add your config here
  config.middleware = [];
  
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks'
    }
  }

  // 微信配置相关
  config.wechat_config = {
    token: 'wx84585f075bb7a794',  //这里目前是测试号配置
    appid: 'wx84585f075bb7a794',
    encodingAESKey: '',
    appsecret: '995d8f78879302e1fe5d8ec0cd5c91c6',
    urlPrefix: 'https://api.weixin.qq.com/cgi-bin/'
  }

  // 微信错误提示码
  config.wechat_error = {
    WXBizMsgCrypt_OK: 0,
    WXBizMsgCrypt_ValidateSignature_Error: -40001,
    WXBizMsgCrypt_ParseXml_Error: -40002,
    WXBizMsgCrypt_ComputeSignature_Error: -40003,
    WXBizMsgCrypt_IllegalAesKey: -40004,
    WXBizMsgCrypt_ValidateCorpid_Error: -40005,
    WXBizMsgCrypt_EncryptAES_Error: -40006,
    WXBizMsgCrypt_DecryptAES_Error: -40007,
    WXBizMsgCrypt_IllegalBuffer: -40008,
    WXBizMsgCrypt_EncodeBase64_Error: -40009,
    WXBizMsgCrypt_DecodeBase64_Error: -40010,
    WXBizMsgCrypt_GenReturnXml_Error: -40011,
  }

  // mysql 数据库连接配置
  config.mysql = {
    // 单数据库信息配置
  client: {
    // host
    //host: '10.55.91.107', // 工作室环境配置
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'egg',
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
  }


  //sequelize 配置
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'egg',
    //host: '10.55.91.107',  // 工作室环境配置
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '123456',
  }


  // 微信菜单配置
  config.wechat_menu = {
    "button":
        [
            {
                "name": "医疗服务",
                "type": "view",
                "url": "http://open.weixin.qq.com/connect/oauth2/authorize?appid=wx240b3f1acafff619&redirect_uri=http://wx.tsmtkj.com/wx/index&response_type=code&scope=snsapi_base&state=ok&connect_redirect=1#wechat_redirect"
            },
            {
                "name": "信息查询",
                "sub_button":[
                    {
                        "name": "我的就诊人",
                        "type": "view",
                        "url": "http://open.weixin.qq.com/connect/oauth2/authorize?appid=wx240b3f1acafff619&redirect_uri=http://wx.tsmtkj.com/wx/visit&response_type=code&scope=snsapi_base&state=ok&connect_redirect=1#wechat_redirect"
                    }
                ]
            },
            {
                "name": "个人中心",
                "type": "view",
                "url": "http://open.weixin.qq.com/connect/oauth2/authorize?appid=wx240b3f1acafff619&redirect_uri=http://wx.tsmtkj.com/wx/mine&response_type=code&scope=snsapi_base&state=ok&connect_redirect=1#wechat_redirect"
            }
        ]
  }

  // redis 配置
  config.redis = {
    client: {
      port: 6379,          // Redis port
      host: '120.77.87.244',   // Redis host
      password: '123456',
      db: 0,
    },
  }
  return config;
};
