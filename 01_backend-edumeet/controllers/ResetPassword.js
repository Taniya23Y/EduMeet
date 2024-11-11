const User = require("../models/User");
const crypto = require("crypto");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");

// resetPasswordToken
exports.resetPasswordToken = async (req, res) => {
  try {
    // get email from req body
    const { email } = req.body;

    // check user for this email, email verification
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is empty",
      });
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email doesn't exist",
      });
    }

    // generate token
    const token = crypto.randomUUID();

    // update user by adding token and expiration time
    const updatedUser = await User.findOneAndUpdate(
      { email },
      {
        token: token,
        resetPasswordExpires: Date.now() + 5 * 60 * 1000,
      },
      { new: true }
    );

    //create url
    const url = `http://localhost:5173/update-password/${token}`;

    // send mail containing the url
    await mailSender(
      email,
      "Password Reset Link",
      `Password reset link: ${url}`
    );

    // return response
    return res.status(200).json({
      success: true,
      message: "Reset link sent",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending reset pwd mail",
    });
  }
};

// resetPassword
exports.resetPassword = async (req, res) => {
  try {
    // data fetch
    const { token, password, confirmPassword } = req.body;

    // validation
    if (!token || !password || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Enter all details",
      });
    }

    // get userDetails from Db using token
    const existingUser = await User.findOne({ token: token });

    // if no entry - invalid token
    if (!existingUser) {
      return res.json({
        success: false,
        message: "Token is invalid",
      });
    }

    // token time check
    if (existingUser.resetPasswordExpires < Date.now()) {
      return res.status(500).json({
        success: false,
        message: "Token is no longer valid",
      });
    }

    if (password !== confirmPassword) {
      return res.status(500).json({
        success: false,
        message: "Password Don't match",
      });
    }

    // hash password
    const hashedPwd = await bcrypt.hash(password, 10);

    // password update
    const updatedUser = await User.findOneAndUpdate(
      { token },
      {
        password: hashedPwd,
      },
      { new: true }
    );
    console.log("Updated user after password change is", updatedUser);

    // return response
    return res.status(200).json({
      success: true,
      message: "Password Changed successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while resetting password",
    });
  }
};
