const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  userRouter = require("./routes/user"),
  eventsRouter = require("./routes/events"),
  // authRouter = require("./routes/auth"),
  port = 3000;
app.use(express.json());
// app.use("/", authRouter);
app.use("/", eventsRouter);
app.use("/users", userRouter);
app.use("/events", eventsRouter);
app.use("*", function (req, res, next) {
  res.json({ error: "This route doesn't exist" });
});

mongoose.set("debug", true); // in devolpment process
mongoose
  .connect(
    "mongodb+srv://Admin:shqw02bBizfsFq80@happened-on-this-day.gzzjg.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "happened-on-this-day",
    }
  )
  .then((con) => {
    console.log("Database is connected");
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
