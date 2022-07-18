import { React, useState, useEffect } from "react";
import { Box, Heading, useRangeSlider, Button, Input } from "@chakra-ui/react";
import QueryResults from "./QueryResults";
import InputArea from "./InputArea";
import QueryRec from "./QueryRec";
import { db } from "../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

const Focus = (props) => {
  const [includedTerms, setIncludedTerms] = useState([
    { id: "cognition", text: "Cognition" },
    { id: "cognitive", text: "Cognitive" },
    { id: "sports-psychology", text: "Sports Psychology" },
  ]);

  const [excludedTerms, setExcludedTerms] = useState([
    { id: "trump", text: "Trump" },
    { id: "biden", text: "Biden" },
    { id: "roe-v-wade", text: "Roe v Wade" },
  ]);

  const colorScheme = {
    border: "purple.100",
    addTermButton: "purple.700",
    queryTagBg: "purple.100",
    queryTagText: "purple.700",
    generateButton: "purple",
  };

  return (
    <div className="Focus">
      <Box maxW="100%" borderWidth="1px" margin={4} borderRadius="lg">
        <Heading m={4}>Mental Performance and Focus</Heading>
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
        <QueryRec
          themeColor={colorScheme}
          currentIncludedTerms={includedTerms}
          currentExcludedTerms={excludedTerms}
          updateTerms={setIncludedTerms}
        />
      </Box>
    </div>
  );
};

export default Focus;
