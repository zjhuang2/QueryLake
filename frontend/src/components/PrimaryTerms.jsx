import { React } from "react";
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
  const collectionName = props.collectionName;

  const deleteTerm = (id) => {
    const docRef = doc(db, "kouery", collectionName, "terms", id);
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
          Primary Terms
        </Heading>

        <Wrap margin={2} spacing={1} padding={4}>
          {primaryTerms.map((term) => (
            <WrapItem>
              <QueryTag
                id={term.id}
                name={term.data.text}
                onDelete={deleteTerm}
                tagBgColor="green.500"
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
