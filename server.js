const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const db = require("./queries");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});
// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

app.get("/regate", db.getAllRegate);
app.get("/news", db.getAllNews);
app.get("/users", db.getUsers);
app.get("/users/:user_id", db.getUserById);
app.post("/users", db.createUser);
app.put("/users/:user_id", db.updateUser);
app.delete("/users/:user_id", db.deleteUser);