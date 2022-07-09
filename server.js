const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/products", function (req, res) {
	const query = req.query;
	console.log("Query", query);
	res.send({
		products: [
			{ id: 1, name: "습식사료", price: 10000, seller: "내추럴코어", imageUrl: "images/products/food1.jpg" },
			{ id: 2, name: "하네스", price: 50000, seller: "도기멍", imageUrl: "images/products/acc1.jpg" },
			{ id: 3, name: "배변패드", price: 30000, seller: "흡수혁명", imageUrl: "images/products/house1.jpg" },
		],
	});
});
app.get("/products/:id/events/:eventId", function (req, res) {
	const params = req.params;
	const { id, eventId } = params;
	res.send(`id는 ${id} 와 ${eventId} 입니다`);
});
app.post("/products", function (req, res) {
	const body = req.body;
	res.send({
		body,
	});
});

app.listen(port, () => {
	console.log("망고샵 서버 실행중");
});
