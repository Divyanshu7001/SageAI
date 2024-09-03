class ErrorHandler extends Error {
  constructor(message, statuscode) {
    super(message);
    this.statuscode = statuscode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statuscode = err.statuscode || 501;

  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  if (err.code == 500) {
    const message = `Internal Server Error, Try again later`;
    err = new ErrorHandler(message, 500);
  }

  if (err.name == "JsonWebTokenError") {
    const message = `JsonWebTokenError,Please try again later`;
    err = new ErrorHandler(message, 400);
  }

  if (err.name == "TokenExpiredError") {
    const message = `Json Web Token got expired,try again later`;
    err = new ErrorHandler(message, 400);
  }

  if (err.name == "CastError") {
    const message = `Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  const errorMessage = err.errors
    ? Object.values(err.errors)
        .map((error) => {
          error.message;
        })
        .join("")
    : err.message;

  res.statuscode(err.statuscode).json({
    success: false,
    message: errorMessage,
  });
};

export default ErrorHandler;
