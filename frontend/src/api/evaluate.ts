import { EvaluationRequest } from "../types";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const evaluateBoard = async ({ history, state }: EvaluationRequest) => {
  const rawResponse = await fetch(
    `${process.env.REACT_APP_API_HOST}/evaluate`,
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ history, state }),
    }
  );
  const response = await rawResponse.json();

  return response;
};
