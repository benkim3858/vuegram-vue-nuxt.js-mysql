const fs = require('fs');
const path = require('path');

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequestError';
  }
}
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}
class AuthorizationError extends Error {
  constructor(message){
    super(message);
    this.name = 'AuthorizationError';
  }
}

global.BadRequestError = BadRequestError;
global.ValidationError = ValidationError;
global.AuthorizationError = AuthorizationError;
global.RefreshExpiredError = 'RefreshExpiredError';

global.response_wrapper = function (res, data) {
  const result = {
    status: 200,
    message: 'OK',
    data,
  }
  /**
   * 로깅용 임시 저장
   */
  res._body_buffer = JSON.stringify(result);
  return res.status(200).json(result);
};
