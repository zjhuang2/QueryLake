import { React, useState, useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import InputArea from "../components/InputArea";
import { onSnapshot } from "firebase/firestore";
import ExcludedTerms from "../components/ExcludedTerms";
import PrimaryTerms from "../components/PrimaryTerms";
import { mentalPerformanceCollectionRef } from "../lib/firestoreCollection";
import Clipboard from "../components/Clipboard";

const Focus = (props) => {
  const [terms, setTerms] = useState([]);
  const collectionRef = mentalPerformanceCollectionRef;

  useEffect(() => {
    const unsubscribe = onSnapshot(
      mentalPerformanceCollectionRef,
      (snapshot) => {
        setTerms(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  const colorScheme = {
    border: "blue.100",
    addTermButton: "blue.700",
    queryTagBg: "blue.500",
    queryTagText: "white",
    generateButton: "blue",
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
          collectionRef={collectionRef}
          collectionName="mentalperformance"
        />
        <PrimaryTerms
          terms={terms}
          updateTerms={setTerms}
          themeColor={colorScheme}
          termType="Primary Terms"
          collectionRef={collectionRef}
          collectionName="mentalperformance"
        />
        <div>&nbsp;</div>
        <ExcludedTerms
          terms={terms}
          updateTerms={setTerms}
          themeColor={colorScheme}
          termType="Excluded Terms"
          collectionRef={collectionRef}
          collectionName="mentalperformance"
        />
      </Box>
      <Box
        maxW="80%"
        margin="3em auto"
        rounded="2xl"
        boxShadow="2xl"
        padding={10}
      >
        <Clipboard terms={terms} />
      </Box>
    </div>
  );
};

export default Focus;
