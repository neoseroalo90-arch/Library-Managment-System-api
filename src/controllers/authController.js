const authService =
  require('../service/authService');

const register = async (req, res) => {
  try {
    const user =
      await authService.registerUser(
        req.body
      );

    res.status(201).json({
      message: 'User registered successfully',
      user
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

const login = async (req, res) => {
  try {
    const token =
      await authService.loginUser(
        req.body.email,
        req.body.password
      );

    res.json({
      token
    });
  } catch (error) {
    res.status(401).json({
      message: error.message
    });
  }
};

module.exports = {
  register,
  login
};