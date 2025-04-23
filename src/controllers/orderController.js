// src/controllers/orderController.js
const { saveOrder, getOrdersBySymbol } = require("../services/orderService");

async function postOrder(req, res, next) {
	try {
		const { symbol, orderType, price } = req.body;
		if (!symbol || !orderType || !price) {
			return res.status(400).json({ error: "symbol, orderType and price are required." });
		}
		const order = { symbol, orderType, price, timestamp: new Date().toISOString() };
		const saved = await saveOrder(order);
		res.status(201).json(saved);
	} catch (err) {
		next(err);
	}
}

async function getOrders(req, res, next) {
	try {
		const { symbol } = req.params;
		const orders = await getOrdersBySymbol(symbol);
		if (orders.length === 0) {
			return res.status(404).json({ error: `No orders found for symbol "${symbol}".` });
		}
		res.json(orders);
	} catch (err) {
		next(err);
	}
}

module.exports = { postOrder, getOrders };
