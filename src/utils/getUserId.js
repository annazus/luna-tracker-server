import jwt from "jsonwebtoken";

const getUserId = (request, requireAuth = true) => {
  let header = request.request
    ? request.request.headers.authorization
    : request.connecton.context.Authorization;
  if (header) {
    const token = header.replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return decoded.userId;
  }

  if (requireAuth) throw new Error("Authentication required");
  return null;
};
export { getUserId as default };
