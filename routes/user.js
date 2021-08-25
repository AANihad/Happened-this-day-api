const express = require("express"),
  { requestCreateUser, updateUser } = require("../middleware/user"),
  { isLoggedIn } = require("../middleware/auth");

router = express.Router();

router.route("/").post(requestCreateUser);

router.route("/:id").put(isLoggedIn, updateUser);
module.exports = router;
