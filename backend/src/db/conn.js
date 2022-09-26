const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/blog", {
  // .connect("mongodb://localhost:27017/blog/?replicaSet=rs&authSource=authDB", {
    // .connect(
    //   "mongodb+srv://priyanshpsalian:username1234@cluster0.0ylymgc.mongodb.net/?retryWrites=true&w=majority",
    //   {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log("connection to db is successfull");
  })
  .catch((e) => {
    console.log("no connection", e);
  });
