// src/routes/orderRoutes.js
const express = require("express");
const { postOrder, getOrders } = require("../controllers/orderController");

const router = express.Router();

router.post("/", postOrder);
router.get("/:symbol", getOrders);

module.exports = router;
