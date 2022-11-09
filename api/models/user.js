const path = require('path');

/*
 * 사용자
 */
module.exports = (sequelize, DataTypes) => {
  const table_name = path.parse(__filename).name;
  const table = sequelize.define(table_name,
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      login_id: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: '로그인 아이디'
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
        comment: '비밀번호'
      },
      password_salt: {
        type: DataTypes.STRING(255),
        allowNull: false,
        comment: '비밀번호 Salt'
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        comment: '이름'
      },
      nick_name: {
        type: DataTypes.STRING(30),
        allowNull: false,
        comment: '닉이름'
      },
      phone: {
        type: DataTypes.STRING(20),
        allowNull: true,
        comment: '휴대폰 번호'
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: '이메일'
      },
    },
    {
      // paranoid: true,
      freezeTableName: true,
      tableName: table_name,
      underscored: true,
      indexes: [
        {
          unique: true,
          fields: ['login_id']
        },
      ]
    },
  );
  return table;
};
