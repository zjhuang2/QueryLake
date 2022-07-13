import { Heading, Box } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import QueryResults from "./QueryResults";

const ExcludedTermRec = () => {
  const [terms, setTerms] = useState([
    "Trump",
    "Biden",
    "Democrats",
    "Republicans",
    "Jan 6",
    "Roe",
    "Roe v. Wade",
  ]);

  const colorScheme = {
    border: "red.100",
    addTermButton: "red.700",
    queryTagBg: "red.100",
    queryTagText: "red.700",
    generateButton: "red",
  };
  return (
    <div>
      <Box maxW="100%" margin={4} borderRadius="lg">
        <Heading m={3} color="red.600">
          Real-Time Excluded Term Recommendations
        </Heading>
        <QueryResults
          terms={terms}
          updateTerms={setTerms}
          themeColor={colorScheme}
          termType="Topic: Politics"
        />
      </Box>
    </div>
  );
};

export default ExcludedTermRec;
