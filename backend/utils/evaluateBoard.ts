import { EvaluationRequest, EvaluationResponse } from "../types";
const winningStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
/**
 * Check if THERE EXISTS possibility that there may be a winner for the succeeding states
 * by checking if there are atleast 2 similar cells and 1 unoccupied cells
 * for the current player
 */
const validatePossibility = ({ history, state }: EvaluationRequest) => {
  let possibility = false;
  for (let condition of winningStates) {
    const boardArray = condition.map((el) => state[el]);
    if (boardArray.every((el) => el === "O" || el === "-")) possibility = true;
    if (boardArray.every((el) => el === "X" || el === "-")) possibility = true;
  }
  return possibility;
};
/**
 * Evaluate the result of the current board state
 */
export const evaluateBoardState = ({
  history,
  state,
}: EvaluationRequest): EvaluationResponse => {
  const board = state;
  // Verify board size
  const SIZE = 3;
  if (board.length !== SIZE ** 2) return { winner: "invalid" };

  // Evaluate State
  for (let condition of winningStates) {
    const boardArray = condition.map((el) => board[el]);
    if (boardArray.every((el) => el === "O")) return { winner: "O" };
    if (boardArray.every((el) => el === "X")) return { winner: "X" };
  }
  // Condition for draw: ALL CELLS FILLED UP
  if (!board.includes("-") || !validatePossibility({ history, state }))
    return { winner: "draw" };

  // Continue
  return { winner: "none" };
};
