// src/utils/fileStore.js
const fs = require("fs").promises;
const path = require("path");

const dataFile = path.join(__dirname, "../../storage/orders.json");

async function readData() {
	try {
		const content = await fs.readFile(dataFile, "utf-8");
		return JSON.parse(content);
	} catch (e) {
		if (e.code === "ENOENT") return []; // no file yet
		throw e;
	}
}

async function writeData(data) {
	await fs.mkdir(path.dirname(dataFile), { recursive: true });
	await fs.writeFile(dataFile, JSON.stringify(data, null, 2));
}

module.exports = { readData, writeData };
