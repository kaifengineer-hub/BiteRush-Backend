const User = require("../model/user");
const bcrypt = require("bcrypt");
const { generateToken } = require("../middleware/jwt");

const signin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({
        message: "Invalid username or password"
      });
    }

    const isMatch = await bcrypt.compare(password, user.hashedPassword);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid username or password"
      });
    }

    const payload = {
      userid: user._id,
      username: user.username
    };

    const token = generateToken(payload);

    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
         secure: false,
        sameSite: "strict"
      })
      .json({
        message: "Login successful"
      });

  } catch (err) {
    
    return res.status(500).json({
      message: err.message
    });
  }
};

module.exports = signin;