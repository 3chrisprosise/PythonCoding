'use strict'

const moment = require('moment');

module.exports = app => {
  const { STRING, INTEGER, DATE, NOW } = app.Sequelize

  const AccessToken = app.model.define("access_token", {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    access_token: {
      type: STRING,
      allowNull: false,
      unique: true 
    },

    expirs_in: {
      type: INTEGER,
      allowNull: false
    }
  });

  return AccessToken
  

}