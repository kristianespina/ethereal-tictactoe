import React from "react";

import { Box, IconButton } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";

import { EvaluationResponse } from "../types";

type Props = {
  player: string;
  result?: EvaluationResponse;
  onReset: () => void;
};
const Header = ({ player, result, onReset }: Props) => {
  const getResultMessage = () => {
    switch (result?.winner) {
      case "draw":
        return "It's a draw! 🤦‍♂️";
      case "none":
        return `Player ${player}'s turn`;
      case "invalid":
        return "Invalid board state! 😡";
      default:
        return `Player ${result?.winner} won! Congratulations 🎉👏`;
    }
  };

  return (
    <Box
      bgColor="white"
      color="blue.500"
      fontSize={24}
      fontWeight="bold"
      p={4}
      mb={4}
      borderRadius={8}
    >
      {getResultMessage()}
      {result?.winner !== "none" && (
        <IconButton
          colorScheme="blue"
          aria-label="Rematch"
          size="lg"
          ml={4}
          onClick={onReset}
          icon={<RepeatIcon />}
        />
      )}
    </Box>
  );
};

export default Header;
