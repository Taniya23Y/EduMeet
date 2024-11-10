// take all your requires or input at top!
const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB successfully connected!"))
    .catch((error) => {
      console.log("DB Connection Failed!");
      console.error(error);
      process.exit(1);
    });
};
