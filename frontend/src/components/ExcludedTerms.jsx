import { React, useContext } from "react";
import { Wrap, WrapItem, Heading, Box } from "@chakra-ui/react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../lib/firebase-config";
import QueryTag from "./Widgets/QueryTag";

const ExcludedTerms = (props) => {
  const themeColor = props.themeColor;
  const collectionRef = props.collectionRef;
  const collectionName = props.collectionName;

  const deleteTerm = (id) => {
    const docRef = doc(db, collectionName, id);
    deleteDoc(docRef)
      .then(() => {
        console.log("Document deleted");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <Box boxShadow="lg" margin={4} rounded="xl">
        <Heading fontSize="xl" margin="2em 0 0 1.5em" color="blackAlpha.800">
          Excluded Terms
        </Heading>

        <Wrap margin={2} spacing={1} padding={4}>
          {props.terms
            .filter((item) => item.data.type === "excluded")
            .map((term) => (
              <WrapItem>
                <QueryTag
                  id={term.id}
                  name={term.data.text}
                  onDelete={deleteTerm}
                  themeColor={themeColor}
                  terms={props.terms}
                  collectionRef={collectionRef}
                  onApplyChanges={props.updateTerms}
                />
              </WrapItem>
            ))}
        </Wrap>
      </Box>
    </div>
  );
};

export default ExcludedTerms;
