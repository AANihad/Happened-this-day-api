const express = require("express"),
  { requestCreateUser, logUser } = require("../middleware/user");
router = express.Router();
router.route("/signup").post(requestCreateUser);
//router.route("/login").post(logUser);
module.exports = router;
