import { React, useState, useEffect } from "react";
import {
  Box,
  Heading,
  useRangeSlider,
  Button,
  Input,
  MenuProvider,
} from "@chakra-ui/react";
import InputArea from "./InputArea";
import { db } from "../lib/firebase-config";
import { collection, getDocs, addDoc, onSnapshot } from "firebase/firestore";
import ExcludedTerms from "./ExcludedTerms";
import PrimaryTerms from "./PrimaryTerms";
import { mentalPerformanceCollectionRef } from "../lib/firestoreCollection";

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
    border: "orange.100",
    addTermButton: "orange.700",
    queryTagBg: "orange.100",
    queryTagText: "orange.700",
    generateButton: "orange",
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
    </div>
  );
};

export default Focus;
