const { JWT_SECRET } = process.env;
const {
  JOI_PRESETS,
} = require('./utils/joi-preset-validation-rules');

module.exports = {
  JWT_SECRET,
  JOI_PRESETS,
};
