module.exports.logout = (req, res) => {
  res.clearCookie('jwt', {
    sameSite: 'none',
    secure: true,
  });
  res.json({ message: 'Your token was deleted from cookies. Your are logged out.' });
};
