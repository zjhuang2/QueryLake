import { React, useState, useEffect } from "react";
import { Box, Heading, useRangeSlider, Button, Input } from "@chakra-ui/react";
import QueryResults from "./QueryResults";
import InputArea from "./InputArea";
import QueryRec from "./QueryRec";
import { db } from "../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

const Focus = (props) => {
  const [terms, setTerms] = useState([
    "Cognition",
    "Cognitive",
    "Sports Psychology",
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
          currentTerms={terms}
          onAddTerm={setTerms}
          themeColor={colorScheme}
        />
        <QueryResults
          terms={terms}
          updateTerms={setTerms}
          themeColor={colorScheme}
          termType="Included Terms"
        />
        <QueryResults
          terms={terms}
          updateTerms={setTerms}
          themeColor={colorScheme}
          termType="Excluded Terms"
        />
        <QueryRec themeColor={colorScheme} />
      </Box>
    </div>
  );
};

export default Focus;
