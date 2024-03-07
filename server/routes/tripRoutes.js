const express = require("express");
const router = express.Router();
const { verifyToken, isAdmin } = require("../middlewares/auth");
const multer = require("multer");
const multerConfig = require("../helper/multerConfig");
const {
  createCheckoutSession,
  getReturnStatus,
} = require("../controllers/tripController");
// Create a new item (requires token validation)

// Get all items (requires token validation)

router.post("/create-checkout-session", createCheckoutSession);
router.get("/return", getReturnStatus);
module.exports = router;
