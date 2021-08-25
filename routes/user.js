const express = require ("express"),
{createUser, updateUser} = require("../middleware/user");
router = express.Router();

router.route("/").post(createUser);

router.route("/:id").put(updateUser);
module.exports =router;