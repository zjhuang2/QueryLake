import { React, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import QueryResults from "./PrimaryTerms";
import InputArea from "./InputArea";
import PrimaryTerms from "./PrimaryTerms";
import ExcludedTerms from "./ExcludedTerms";

export const Immunity = () => {
  const [primaryTerms, setPrimaryTerms] = useState([
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
      <Box
        maxW="80%"
        margin="1em auto"
        rounded="2xl"
        boxShadow="2xl"
        padding={2}
      >
        <Heading m={4}>Immunity</Heading>
        <InputArea
          currentPrimaryTerms={primaryTerms}
          currentExcludedTerms={excludedTerms}
          onAddPrimaryTerm={setPrimaryTerms}
          onAddExcludeTerm={setExcludedTerms}
          themeColor={colorScheme}
        />
        <PrimaryTerms
          terms={primaryTerms}
          updateTerms={setPrimaryTerms}
          themeColor={colorScheme}
        />
        <div>&nbsp;</div>
        <ExcludedTerms
          terms={excludedTerms}
          updateTerms={setExcludedTerms}
          themeColor={colorScheme}
        />
      </Box>
    </div>
  );
};
