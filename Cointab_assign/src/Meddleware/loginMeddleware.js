// let blockedUsers = {};

const User = require("../modal/userModal");

// const blockUserMiddleware = (req, res, next) => {
//   const email = req.body.email;
//   if (blockedUsers[email] && blockedUsers[email].count >= 5) {
//     const lastAttemptTime = blockedUsers[email].lastAttempt;
//     const currentTime = new Date().getTime();
//     const differenceInSeconds = (currentTime - lastAttemptTime) / 1000;
//     const remainingTime = Math.floor(24 * 3600 - differenceInSeconds);
//     return res.status(401).json({
//       error: `Too many incorrect attempts. Try again in ${remainingTime} seconds.`,
//     });
//   }
//   next();
// };

// module.exports = { blockedUsers, blockUserMiddleware };

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