const morgan = require('morgan');

morgan.token('url', (req) => req.baseUrl + req.path);
morgan.token('querydata', (req) => {
  return Object.keys(req.query).length ? JSON.stringify(req.query) : 'None';
});
morgan.token('bodydata', (req, res) => {
  let result = {};
  if(Object.keys(req.body).length) {
    result.json = req.body;
  }else {
    result.json = 'None';
  }
  if(!!req.files) {
    if(Array.isArray(req.files)){
      result.file = req.files.map(file=>`${file.originalname}(${file.size})`);
    }else if(typeof req.files === 'object' && Object.keys(req.files).length){
      result.file = Object.keys(req.files).reduce((acc, item)=>{
        acc[item] = (req.files[item].map(file=>`${file.originalname}(${file.size})`));
        return acc;
      }, {});
    }
  }

  return JSON.stringify(result);
});
morgan.token('remote-addr', (req) => {
  try {
    return (
      req.headers['x-forwarded-for'].replace(/ /g, '').split(',')[0] ||
      undefined
    );
  } catch (e) {
    return req.ip || req._remoteAddress || undefined;
  }
});
morgan.token('KST', ()=>{
  return KST().toLocaleString();
});
morgan.token('response-body', (req, res)=>{
  return res._body_buffer;
});
morgan.format(
  'mvpick-dev-1',
  '\x1b[33m================================= Request =================================\x1b[0m\n' +
  'Datetime       : :KST\n' +
  'Source address : :remote-addr\n' +
  'Method         : :method\n' +
  'URL            : :url\n' +
  'Content-Type   : :req[content-type]\n' +
  'Request-data\n' +
  '   Query       : :querydata\n'+
  '   Body        : :bodydata\n'+
  '\x1b[33m================================= Response ================================\x1b[0m\n' +
  'StatusCode     : :status\n' +
  'Response-Time  : :response-time ms\n' +
  'Response-Body  : :response-body\n' +
  '\x1b[33m================================== Close ==================================\x1b[0m\n'
);

module.exports = morgan('Practice-Node.js-Express-MySQL-Vue.js');
