import { React, useState, useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import InputArea from "../components/InputArea";
import PrimaryTerms from "../components/PrimaryTerms";
import ExcludedTerms from "../components/ExcludedTerms";
import { immunityRef } from "../lib/firestoreCollection";
import { onSnapshot } from "firebase/firestore";

export const Immunity = () => {
  const [terms, setTerms] = useState([]);
  const collectionRef = immunityRef;

  useEffect(() => {
    const unsubscribe = onSnapshot(immunityRef, (snapshot) => {
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
          currentTerms={terms}
          onUpdateTerms={setTerms}
          themeColor={colorScheme}
          collectionRef={collectionRef}
          collectionName="immunity"
        />
        <PrimaryTerms
          terms={terms}
          updateTerms={setTerms}
          themeColor={colorScheme}
          termType="Primary Terms"
          collectionRef={collectionRef}
          collectionName="immunity"
        />
        <div>&nbsp;</div>
        <ExcludedTerms
          terms={terms}
          updateTerms={setTerms}
          themeColor={colorScheme}
          termType="Excluded Terms"
          collectionRef={collectionRef}
          collectionName="immunity"
        />
      </Box>
    </div>
  );
};
