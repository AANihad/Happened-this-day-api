const express = require("express"),
  { createUser, updateUser ,showUser, userToAdmin} = require("../middleware/user"),
  { isLoggedIn } = require("../middleware/auth");

router = express.Router();

router.route("/").post(createUser);

router.route("/:id").put(isLoggedIn, updateUser).get(showUser);
router.route("/:id/ToAdmin").put(userToAdmin);
module.exports = router;
