const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.json());
const services = [
  { id: 1, name: "Service 1", description: "Train booking" },
  { id: 2, name: "Service 2", description: "Bus booking" },
];
const bookings = [];
app.get("/api/services/:id", (req, res) => {
  const serviceId = parseInt(req.params.id);
  const service = services.find((s) => s.id === serviceId);
  if (service) {
    res.json(service);
  } else {
    res.status(404).send("Service not found");
  }
});
app.post("/api/bookings", (req, res) => {
  const booking = req.body;
  bookings.push(booking);
  res.json(booking);
});
app.listen(port, () => {
  console.log("listening on port ${port}");
});
