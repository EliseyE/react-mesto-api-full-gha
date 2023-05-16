const { NODE_ENV, JWT_SECRET_PRODUCTION } = process.env;
const {
  JOI_PRESETS,
} = require('./utils/joi-preset-validation-rules');

const JWT_SECRET = NODE_ENV === 'production' ? JWT_SECRET_PRODUCTION : 'dev-secret';

module.exports = {
  JWT_SECRET,
  JOI_PRESETS,
};
