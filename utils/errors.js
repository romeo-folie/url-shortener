const { errorType } = require('./constants')

const getErrorCode = (errorName) => {
  console.log("error name ", errorName)
  return errorType[errorName] || errorName;
};

module.exports = getErrorCode;
