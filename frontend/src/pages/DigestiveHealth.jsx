import { React, useState, useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import InputArea from "../components/InputArea";
import PrimaryTerms from "../components/PrimaryTerms";
import ExcludedTerms from "../components/ExcludedTerms";
import Clipboard from "../components/Clipboard";
import { digestiveRef } from "../lib/firestoreCollection";
import { onSnapshot } from "firebase/firestore";

export const DigestiveHealth = () => {
  const [terms, setTerms] = useState([]);
  const collectionRef = digestiveRef;

  useEffect(() => {
    const unsubscribe = onSnapshot(digestiveRef, (snapshot) => {
      setTerms(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const colorScheme = {
    border: "blackAlpha.600",
    addTermButton: "blackAlpha.600",
    queryTagBg: "orange.500",
    queryTagText: "white",
  };

  return (
    <div className="DigestiveHealth">
      <Box
        maxW="80%"
        margin="1em auto"
        rounded="2xl"
        boxShadow="2xl"
        padding={2}
      >
        <Heading m={4}>Digestive Health</Heading>
        <InputArea
          currentTerms={terms}
          onUpdateTerms={setTerms}
          themeColor={colorScheme}
          collectionRef={collectionRef}
          collectionName="digestivehealth"
        />
        <PrimaryTerms
          terms={terms}
          updateTerms={setTerms}
          themeColor={colorScheme}
          termType="Primary Terms"
          collectionRef={collectionRef}
          collectionName="digestivehealth"
        />
        <div>&nbsp;</div>
        <ExcludedTerms
          terms={terms}
          updateTerms={setTerms}
          themeColor={colorScheme}
          termType="Excluded Terms"
          collectionRef={collectionRef}
          collectionName="digestivehealth"
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

export default DigestiveHealth;
