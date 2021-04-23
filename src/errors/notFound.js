function notFound(request, response, next) {
  next({ status: 404, message: `Path not found here: ${request.originalUrl}` });
}

module.exports = notFound;
