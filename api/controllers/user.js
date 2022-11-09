const {
  sequelize,
  user: User,
} = require('../models');
// const { encrypt, decrypt } = require('../utils/encrypt');
// const jwt = require('../utils/jwt');

module.exports = {
  async sign_up(req, res, next) {
    try {
      const user_temp = req.body.user_info;

      // 임시 salt
      user_temp.password_salt = 'aaa'
      const [find_user, created] = await User.findOrCreate({
        where: { login_id: user_temp.login_id},
        defaults: user_temp,
      });

      if(!created) return res.status(500);

      return res.status(200).send('good');
    } catch (e) {
      console.error(e);
      return next(e);
    }
  },

  async test(req, res, next) {
    try {

      return res.status(200).send('@@@@@@@');
    } catch (e) {
      console.error();
      return next(e);
    }
  }
}
