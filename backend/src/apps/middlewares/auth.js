// eslint-disable-next-line import/no-extraneous-dependencies
import "dotenv/config";

export default (request, response, next) => {
  const { originalUrl } = request;
  const authHeader = request.headers.authorization;

  if (originalUrl.startsWith("/tmp/uploads")) {
    return next();
  }

  if (authHeader && authHeader === process.env.APP_SECRET) {
    return next();
  }

  return response
    .status(401)
    .json({ message: "User not allowed to access this API." });
};
