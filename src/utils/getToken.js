import jwt from "jsonwebtoken";

const getToken = userId => {
  const expiresInSeconds = 24 * 60 * 60;
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: expiresInSeconds
  });
  return { token, expiresInSeconds };
};

export { getToken as default };
