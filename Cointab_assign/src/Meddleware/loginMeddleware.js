
const User = require("../modal/userModal");

const blockUserMiddleware = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return next();
  }

  if (user.lockedUntil && user.lockedUntil > new Date()) {
    const remainingTime = Math.ceil((user.lockedUntil - new Date()) / 1000);
    return res
      .status(403)
      .send(
        `Your account has been locked due to too many failed login attempts. Please try again in ${remainingTime} seconds.`
      );
  }

  next();
};

module.exports =blockUserMiddleware