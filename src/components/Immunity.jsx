import { React, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import QueryResults from "./QueryResults";
import InputArea from "./InputArea";
import QueryRec from "./QueryRec";
import { getQueriesForElement } from "@testing-library/react";

export const Immunity = () => {
  const [terms, setTerms] = useState([
    "Immunity",
    "Immune System",
    "Virus",
    "Infection",
  ]);

  const colorScheme = {
    border: "red.100",
    addTermButton: "red.700",
    queryTagBg: "red.100",
    queryTagText: "red.700",
    generateButton: "red",
  };

  return (
    <div className="Focus">
      <Box maxW="100%" borderWidth="1px" margin={4} borderRadius="lg">
        <Heading m={4}>Immunity</Heading>
        <InputArea
          currentTerms={terms}
          onAddTerm={setTerms}
          themeColor={colorScheme}
        />
        <QueryResults
          terms={terms}
          updateTerms={setTerms}
          themeColor={colorScheme}
        />
        <QueryRec themeColor={colorScheme} />
      </Box>
    </div>
  );
};
