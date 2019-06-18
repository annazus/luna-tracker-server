import bcrypt from "bcryptjs";

const getHashPassword = async password => {
  if (password.length < 8)
    throw new Error("Password must be greater than 8 characters");
  return await bcrypt.hash(password, 10);
};

export { getHashPassword as default };
