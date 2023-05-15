const BadRequestError = require('./bad-request-error');
const NotFoundError = require('./not-found-error');
const ConflictError = require('./conflict-error');

function errorHeandler(err) {
  if (err.statusCode) {
    return err;
  }

  switch (err.name) {
    case 'ValidationError': {
      const validationErrors = Object.values(err.errors).map((error) => error.name).join('; ');
      return new BadRequestError(`Validation Error: ${validationErrors}`);
    }
    case 'CastError': {
      return new BadRequestError(err.message);
    }
    case 'DocumentNotFoundError': {
      return new NotFoundError(`DocumentNotFoundError: ${err.message}`);
    }
    case 'MongoServerError': {
      if (err.code === 11000) {
        const exitingItems = Object.values(err.keyValue).map((error) => error).join('; ');
        return new ConflictError(`Sorry, the '${exitingItems}' is almost exist`);
      }
      return err;
    }
    default:
      return err;
  }
}

module.exports = errorHeandler;
