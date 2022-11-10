const {AESDecrypt} = require('../utils/encrypt');
const jwt = require('../utils/jwt');
const {ignore_error, get_ip} = require('../utils/common');

module.exports = {
  error_handler: function (error, req, res, next) {
    const result = {
      status: 500,
      message: '처리중 오류가 발생했습니다.',
    };
    /**
     * data 는 필요할 때 쓰기
     */
    let data = null;
    switch (error.name) {
      case 'NotFoundError':
        result.status = 404;
        result.message = '요청을 찾을 수 없습니다.';
        break;
      case 'BadRequestError':
      case 'ValidationError':
        result.status = 400;
        result.message = error.message || '잘못된 요청입니다.';
        console.error(error);
        break;
      case 'AuthorizationError':
        if (error.message === 'NotFoundToken') {
          result.status = 403;
          result.message = error.message || '권한이 없습니다.';
        } else if (error.message === 'TokenExpiredError') {
          result.status = 401;
          result.message = error.message || '권한이 만료되었습니다.';
        } else if (error.message === 'JsonWebTokenError') {
          result.status = 901;
          result.message = error.message || '잘못된 권한입니다.';
        } else if (error.message === 'RefreshExpiredError') {
          result.status = 901;
          result.message = error.message || '만료된 권한입니다.';
        }
        break;
      default:
        console.error(error);
    }
    res._body_buffer = JSON.stringify(result);
    return res.status(result.status).json(result);
  },
}
