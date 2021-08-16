export type EvaluationResponse = {
  winner: "O" | "X" | "draw" | "none" | "invalid";
};

export type EvaluationRequest = {
  history: string[];
  state: string;
};
