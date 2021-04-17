const errorName = {
  INVALID_URL: "INVALID URL",
  SERVER_ERROR: "SERVER ERROR"
};

const errorType = {
  INVALID_URL: {
    message: "Submitted url is invalid",
    statusCode: 400,
  },
  SERVER_ERROR: {
    message: "Internal Server Error",
    statusCode: 500,
  }

};

module.exports = { errorName, errorType };
