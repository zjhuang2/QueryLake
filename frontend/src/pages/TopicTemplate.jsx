import { React, useState, useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import InputArea from "../components/InputArea";
import PrimaryTerms from "../components/PrimaryTerms";
import ExcludedTerms from "../components/ExcludedTerms";
import Clipboard from "../components/Clipboard";
import { koueryRef } from "../lib/firestoreCollection";
import { onSnapshot } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { db } from "../lib/firebase-config";
import DangerZone from "../components/DangerZone";

export const TopicTemplate = (props) => {
  const [terms, setTerms] = useState([]);

  const topicName = props.topicName;
  const topicId = props.topicId;

  const path = "kouery/" + topicId + "/terms";

  const collectionRef = collection(db, path);
  console.log(collectionRef);

  useEffect(() => {
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      setTerms(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  console.log(terms);

  // useEffect(() => {
  //   const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
  //     setTerms(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

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
        <Heading m={4}>{topicName}</Heading>
        <InputArea
          currentTerms={terms}
          onUpdateTerms={setTerms}
          themeColor={colorScheme}
          collectionRef={collectionRef}
          collectionName={topicId}
        />
        <PrimaryTerms
          terms={terms}
          updateTerms={setTerms}
          themeColor={colorScheme}
          termType="Primary Terms"
          collectionRef={collectionRef}
          collectionName={topicId}
        />
        <div>&nbsp;</div>
        <ExcludedTerms
          terms={terms}
          updateTerms={setTerms}
          themeColor={colorScheme}
          termType="Excluded Terms"
          collectionRef={collectionRef}
          collectionName={topicId}
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
      <DangerZone topicId={topicId} />
    </div>
  );
};
