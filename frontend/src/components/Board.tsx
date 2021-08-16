import React, { useState } from "react";
import { Flex, Box, Container, Grid, useToast } from "@chakra-ui/react";

import Header from "./Header";
import Cell from "./Cell";

// Types
import { EvaluationResponse, EvaluationRequest } from "../types";
// API
import { evaluateBoard } from "../api/evaluate";

const defaultState = {
  board: {
    history: [],
    state: "---------",
  } as EvaluationRequest,
  result: {
    winner: "none",
  } as EvaluationResponse,
  player: "X",
};
const Board = () => {
  const [board, setBoard] = useState<EvaluationRequest>(defaultState.board);
  const [result, setResult] = useState<EvaluationResponse>(defaultState.result);
  const [player, setPlayer] = useState(defaultState.player); // Player X as first turn
  const toast = useToast();

  // Reset Board back to initial state
  const resetBoard = () => {
    setBoard(defaultState.board);
    setResult(defaultState.result);
    setPlayer(defaultState.player);
  };
  const pick = async (cell: number) => {
    // Check if cell is already occupied
    if (board.state.charAt(cell) !== "-") {
      return toast({
        title: "Error",
        description: "Invalid move",
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    }

    // Check if we already have a winner
    if (result.winner !== "none") {
      return toast({
        title: "Error",
        description: "Game has already ended!",
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    }
    const newBoardState =
      board.state.substring(0, cell) + player + board.state.substring(cell + 1);

    const newBoard = {
      state: newBoardState,
      history: [...board.history, newBoardState],
    };

    const response = await evaluateBoard(newBoard);

    setResult(response);
    setBoard(newBoard);
    if (player === "X") setPlayer("O");
    else setPlayer("X");
  };
  return (
    <Box bgColor="blue.500" h="100vh">
      <Container maxW="container.lg" h="100%">
        <Flex
          direction="column"
          alignContent="center"
          alignItems="center"
          justifyContent="center"
          h="full"
        >
          <Header
            player={player}
            result={result}
            onReset={() => resetBoard()}
          />
          <Grid templateColumns="repeat(3, 1fr)" gap={0}>
            <Cell
              move={board.state[0]}
              onClick={() => pick(0)}
              noBorderLeft
              noBorderTop
            />
            <Cell move={board.state[1]} onClick={() => pick(1)} noBorderTop />
            <Cell
              move={board.state[2]}
              onClick={() => pick(2)}
              noBorderRight
              noBorderTop
            />
            <Cell move={board.state[3]} onClick={() => pick(3)} noBorderLeft />
            <Cell move={board.state[4]} onClick={() => pick(4)} />
            <Cell move={board.state[5]} onClick={() => pick(5)} noBorderRight />
            <Cell
              move={board.state[6]}
              onClick={() => pick(6)}
              noBorderLeft
              noBorderBottom
            />
            <Cell
              move={board.state[7]}
              onClick={() => pick(7)}
              noBorderBottom
            />
            <Cell
              move={board.state[8]}
              onClick={() => pick(8)}
              noBorderRight
              noBorderBottom
            />
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
};

export default Board;
