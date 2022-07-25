import { React, useEffect, useState } from "react";
import { Wrap, WrapItem, Heading, Box } from "@chakra-ui/react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../lib/firebase-config";
import QueryTag from "./Widgets/QueryTag";

const PrimaryTerms = (props) => {
  const primaryTerms = props.terms.filter(
    (item) => item.data.type === "primary"
  );
  const themeColor = props.themeColor;
  const collectionRef = props.collectionRef;

  const deleteTerm = (id) => {
    const docRef = doc(db, "mentalperformance", id);
    deleteDoc(docRef)
      .then(() => {
        console.log("Document deleted");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <Box boxShadow="lg" margin={4} rounded="xl" padding={2}>
        <Heading
          fontSize="xl"
          margin="1.2em 0.2em 0 1.2em"
          color={themeColor.queryTagText}
        >
          Primary Terms
        </Heading>

        <Wrap margin={4} spacing={1}>
          {primaryTerms.map((term) => (
            <WrapItem>
              <QueryTag
                id={term.id}
                name={term.data.text}
                onDelete={deleteTerm}
                themeColor={themeColor}
                collectionRef={collectionRef}
                onApplyChanges={props.updateTerms}
                terms={props.terms}
              />
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </div>
  );
};

export default PrimaryTerms;
