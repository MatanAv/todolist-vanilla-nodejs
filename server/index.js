const express = require("express");
const path = require("path");
const { PORT } = require("./config");
const todosRouter = require("./routes/todos");

const app = express();

app.use(express.static(path.resolve(__dirname, "../client")));

app.use(express.json());

app.use("/todos", todosRouter);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
