function notFound(req, res, next) {
  res.status(404);
  res.json({ ok: false, error: 'Not Found' });
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  console.error('Unhandled error:', err);
  const status = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
  res.status(status).json({ ok: false, error: err.message || 'Server Error' });
}

module.exports = { notFound, errorHandler };
