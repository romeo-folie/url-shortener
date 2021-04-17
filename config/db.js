const mongoose = require("mongoose");
const uri = process.env.MONGO_URI

const connectToDB = async function () {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (error) {
    console.log("db connection error ", error);
    process.exit(1);
  }
};

module.exports = connectToDB;
