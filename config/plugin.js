'use strict';

// had enabled by egg
// exports.static = true;

// Template Engine
exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks'
}

// MySqlConnector
exports.mysql = {
    enable: true,
    package: 'egg-mysql'
}

// Sequelzie ORM
exports.sequelize = {
    enable: true,
    package: 'egg-sequelize'
}

exports.redis = {
    enable: true,
    package: 'egg-redis',
}

exports.security = {
    enable: false  // 开发阶段关闭安全模式
}