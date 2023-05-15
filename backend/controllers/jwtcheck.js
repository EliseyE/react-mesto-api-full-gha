module.exports.jwtCheckInCookies = (req, res) => {
  if (req.user) res.status(200).json({ _id: req.user._id });
};
