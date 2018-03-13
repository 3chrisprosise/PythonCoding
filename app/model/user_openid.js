module.exports = app => {
  const { STRING } = app.Sequelize

  const UserOpenId = app.model.define("user", {
    name: STRING
  });

  return UserOpenId

}