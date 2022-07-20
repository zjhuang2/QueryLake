import { React, useState, useEffect } from "react";
import { Box, Heading, useRangeSlider, Button, Input } from "@chakra-ui/react";
import QueryResults from "./PrimaryTerms";
import InputArea from "./InputArea";
import { db } from "../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import ExcludedTerms from "./ExcludedTerms";
import PrimaryTerms from "./PrimaryTerms";

const Focus = (props) => {
  const [terms, setTerms] = useState([
    { id: "cognition", text: "Cognition", type: "primary" },
    { id: "cognitive", text: "Cognitive", type: "primary" },
    { id: "sports-psychology", text: "Sports Psychology", type: "primary" },
    { id: "trump", text: "Trump", type: "excluded" },
    { id: "biden", text: "Biden", type: "excluded" },
    { id: "roe-v-wade", text: "Roe v Wade", type: "excluded" },
  ]);

  const colorScheme = {
    border: "green.100",
    addTermButton: "green.700",
    queryTagBg: "green.100",
    queryTagText: "green.700",
    generateButton: "green",
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
        <Heading m={4}>Mental Performance and Focus</Heading>
        <InputArea
          currentTerms={terms}
          onUpdateTerms={setTerms}
          themeColor={colorScheme}
        />
        <PrimaryTerms
          terms={terms}
          updateTerms={setTerms}
          themeColor={colorScheme}
          termType="Primary Terms"
        />
        <div>&nbsp;</div>
        <ExcludedTerms
          terms={terms}
          updateTerms={setTerms}
          themeColor={colorScheme}
          termType="Excluded Terms"
        />
      </Box>
    </div>
  );
};

export default Focus;
