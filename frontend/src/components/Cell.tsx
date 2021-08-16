import React from "react";

import { Box, Text } from "@chakra-ui/react";

type Props = {
  move: string;
  noBorderLeft?: boolean;
  noBorderRight?: boolean;
  noBorderTop?: boolean;
  noBorderBottom?: boolean;
  onClick: () => void;
};
const Cell = ({
  move,
  noBorderLeft,
  noBorderRight,
  noBorderTop,
  noBorderBottom,
  onClick,
}: Props) => {
  const color = move === "-" ? "blue.500" : "white";
  return (
    <Box
      h={24}
      w={24}
      fontSize={48}
      fontWeight="bold"
      textAlign="center"
      color="blue.800"
      borderLeft={noBorderLeft ? "0" : "4px"}
      borderRight={noBorderRight ? "0" : "4px"}
      borderTop={noBorderTop ? "0" : "4px"}
      borderBottom={noBorderBottom ? "0" : "4px"}
      p={2}
    >
      <Box
        onClick={onClick}
        _hover={{
          cursor: "pointer",
          bgColor: "blue.800",
          borderRadius: "12",
          transform: "scale(0.90)",
        }}
        _active={{
          transform: "scale(0.8)",
        }}
      >
        <Text color={color}>{move}</Text>
      </Box>
    </Box>
  );
};

export default Cell;
