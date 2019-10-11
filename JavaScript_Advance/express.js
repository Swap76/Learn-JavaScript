const express = require("express");

const port = 3003;
const app = express();

const routes = express.Router();

routes.get("/system_info", (req, res) => {
  res.send("System on!");
});

app.use(express.json());
app.use(routes);
app.listen(port, () => console.log(`Server running in port ${port}`));