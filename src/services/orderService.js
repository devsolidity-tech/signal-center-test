// src/services/orderService.js
const { readData, writeData } = require("../utils/fileStore");

async function saveOrder(order) {
	const orders = await readData();
	orders.push(order);
	await writeData(orders);
	return order;
}

async function getOrdersBySymbol(symbol) {
	const orders = await readData();
	return orders.filter((o) => o.symbol === symbol);
}

module.exports = { saveOrder, getOrdersBySymbol };
