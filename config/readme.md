#目录功能规范约定:

1. config.{env}.js 用于编写配置文件
2. config/plugin.js 用于配置需要加载的插件
3. 中间件与插件用法不同，中间件在app/middleware 下编写， 在 config/config.${env}.js 中的 config.middleware 中注册使用
插件则是在 config/plugin 中进行声明使用。