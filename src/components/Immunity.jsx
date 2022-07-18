import { React, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import QueryResults from "./QueryResults";
import InputArea from "./InputArea";
import QueryRec from "./QueryRec";
import { getQueriesForElement } from "@testing-library/react";

export const Immunity = () => {
  const [includedTerms, setIncludedTerms] = useState([
    { id: "immunity", text: "Immunity" },
    { id: "immune-system", text: "Immune System" },
    { id: "virus", text: "Virus" },
    { id: "infection", text: "Infection" },
  ]);

  const [excludedTerms, setExcludedTerms] = useState([
    { id: "trump", text: "Trump" },
    { id: "biden", text: "Biden" },
    { id: "roe-v-wade", text: "Roe v Wade" },
  ]);

  const colorScheme = {
    border: "teal.100",
    addTermButton: "teal.700",
    queryTagBg: "teal.100",
    queryTagText: "teal.700",
    generateButton: "teal",
  };

  return (
    <div className="Focus">
      <Box maxW="100%" borderWidth="1px" margin={4} borderRadius="lg">
        <Heading m={4}>Immunity</Heading>
        <InputArea
          currentIncludedTerms={includedTerms}
          currentExcludedTerms={excludedTerms}
          onAddIncludeTerm={setIncludedTerms}
          onAddExcludeTerm={setExcludedTerms}
          themeColor={colorScheme}
        />
        <QueryResults
          terms={includedTerms}
          updateTerms={setIncludedTerms}
          themeColor={colorScheme}
          termType="Included Terms"
        />
        <QueryResults
          terms={excludedTerms}
          updateTerms={setExcludedTerms}
          themeColor={colorScheme}
          termType="Excluded Terms"
        />
        <QueryRec themeColor={colorScheme} />
      </Box>
    </div>
  );
};
