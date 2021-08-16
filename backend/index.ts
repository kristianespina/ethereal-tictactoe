import express from "express";
import cors from "cors";

import { EvaluationRequest } from "./types";

import { evaluateBoardState } from "./utils/evaluateBoard";
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Working");
});

app.post("/evaluate", (req, res) => {
  const body = req.body as EvaluationRequest;
  const response = evaluateBoardState(body);
  res.send(response);
});
app.listen(3001, () => {
  console.log("The application is listening on port 3001!");
});
