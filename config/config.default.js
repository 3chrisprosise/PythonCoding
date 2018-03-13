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
  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  }

  config.wechat_config = {
    token: 'wx84585f075bb7a794',
    appid: 'wx7999f9177654f5d4',
    encodingAESKey: '',
    appSecret: '3f18e69460af75ecdbc279576e3070f3',
    urlPrefix: 'https://api.weixin.qq.com/cgi-bin/'
  }


  // mysql 数据库连接配置
  config.mysql = {
    // 单数据库信息配置
  client: {
    // host
    host: 'localhost',
    // 端口号
    port: '3306',
    // 用户名
    user: 'root',
    // 密码
    password: '123456',
    // 数据库名
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


  return config;
};
