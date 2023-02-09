const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    mongoose.set('strictQuery', false);
    const conn = mongoose.connect("mongodb://localhost:27017/digi-commerce", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("DAtabase error");
  }
};
module.exports = dbConnect;
