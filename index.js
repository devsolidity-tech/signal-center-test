// index.js
const express = require("express");
const orderRoutes = require("./src/routes/orderRoutes");

const app = express();
app.use(express.json());

app.use("/signal/order", orderRoutes);

// global error handler
app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).json({ error: "Something went wrong." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
