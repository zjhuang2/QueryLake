import { React, useState, useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import InputArea from "../components/InputArea";
import PrimaryTerms from "../components/PrimaryTerms";
import ExcludedTerms from "../components/ExcludedTerms";
import Clipboard from "../components/Clipboard";
import { sustainedEnergyRef } from "../lib/firestoreCollection";
import { onSnapshot } from "firebase/firestore";

export const SustainedEnergy = () => {
  const [terms, setTerms] = useState([]);
  const collectionRef = sustainedEnergyRef;

  useEffect(() => {
    const unsubscribe = onSnapshot(sustainedEnergyRef, (snapshot) => {
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
    <div className="SustainedEnergy">
      <Box
        maxW="80%"
        margin="1em auto"
        rounded="2xl"
        boxShadow="2xl"
        padding={2}
      >
        <Heading m={4}>Natural Sustained Energy</Heading>
        <InputArea
          currentTerms={terms}
          onUpdateTerms={setTerms}
          themeColor={colorScheme}
          collectionRef={collectionRef}
          collectionName="sustainedenergy"
        />
        <PrimaryTerms
          terms={terms}
          updateTerms={setTerms}
          themeColor={colorScheme}
          termType="Primary Terms"
          collectionRef={collectionRef}
          collectionName="sustainedenergy"
        />
        <div>&nbsp;</div>
        <ExcludedTerms
          terms={terms}
          updateTerms={setTerms}
          themeColor={colorScheme}
          termType="Excluded Terms"
          collectionRef={collectionRef}
          collectionName="sustainedenergy"
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

export default SustainedEnergy;
