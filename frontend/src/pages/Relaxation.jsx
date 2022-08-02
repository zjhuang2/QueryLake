import { React, useState, useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import InputArea from "../components/InputArea";
import PrimaryTerms from "../components/PrimaryTerms";
import ExcludedTerms from "../components/ExcludedTerms";
import Clipboard from "../components/Clipboard";
import { relaxationRef } from "../lib/firestoreCollection";
import { onSnapshot } from "firebase/firestore";

export const Relaxation = () => {
  const [terms, setTerms] = useState([]);
  const collectionRef = relaxationRef;

  useEffect(() => {
    const unsubscribe = onSnapshot(relaxationRef, (snapshot) => {
      setTerms(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const colorScheme = {
    border: "orange.100",
    addTermButton: "orange.700",
    queryTagBg: "orange.500",
    queryTagText: "white",
    generateButton: "organge",
  };

  return (
    <div className="Relaxation">
      <Box
        maxW="80%"
        margin="1em auto"
        rounded="2xl"
        boxShadow="2xl"
        padding={2}
      >
        <Heading m={4}>Relaxation</Heading>
        <InputArea
          currentTerms={terms}
          onUpdateTerms={setTerms}
          themeColor={colorScheme}
          collectionRef={collectionRef}
          collectionName="relaxation"
        />
        <PrimaryTerms
          terms={terms}
          updateTerms={setTerms}
          themeColor={colorScheme}
          termType="Primary Terms"
          collectionRef={collectionRef}
          collectionName="relaxation"
        />
        <div>&nbsp;</div>
        <ExcludedTerms
          terms={terms}
          updateTerms={setTerms}
          themeColor={colorScheme}
          termType="Excluded Terms"
          collectionRef={collectionRef}
          collectionName="relaxation"
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
