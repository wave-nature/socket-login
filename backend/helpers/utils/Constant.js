module.exports = {
  SUCCESS: 200,
  ACCEPTED: 202,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CAPTCHA_FAILED: 406, //new for captcha failure
  UNPROCESSED: 422,
  INTERNAL_FUNCTION_CALL: 423,
  TOO_MANY_REQUEST: 429,
  SERVER_ERROR: 500,
  REDIRECT: 302,

  RECORDS_PER_PAGE: 50,

  // PAYMENT STAUS
  PAYMENT_STATUS_PENDING: "PENDING",
  PAYMENT_STATUS_COMPLETED: "COMPLETED",
};