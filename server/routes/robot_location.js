const express = require("express");
const router = express.Router();
const getRobotLocation = require("../controllers/robotController");

router.route("/").get(getRobotLocation);

module.exports = router;