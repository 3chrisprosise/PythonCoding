'use strict';

// had enabled by egg
// exports.static = true;

exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks'
}

exports.mysql = {
    enable: true,
    package: 'egg-mysql'
}

exports.sequelize = {
    enable: true,
    package: 'egg-sequelize'
}

exports.security = {
    enable: false  // 开发阶段关闭安全模式
}