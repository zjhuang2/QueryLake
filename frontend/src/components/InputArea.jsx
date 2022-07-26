import React, { useState, useContext } from "react";
import { Box, HStack, Button, Input } from "@chakra-ui/react";
import { addDoc, deleteDoc } from "firebase/firestore";

const InputArea = (props) => {
  const [inputTerm, setInputTerm] = useState("");
  const themeColor = props.themeColor;
  const collectionRef = props.collectionRef;

  /* Handle user inputs */
  const handleChange = (event) => {
    const userInput = event.target.value;
    setInputTerm(userInput);
  };

  const handleAddIncludedTerm = (event) => {
    event.preventDefault();
    const userInput = inputTerm;
    if (inputTerm === "") {
      alert("Cannot add empty query.");
      return;
    }
    addDoc(collectionRef, { text: userInput, type: "primary" })
      .then((response) => console.log(response.id))
      .catch((error) => console.log(error.message));
    setInputTerm("");
  };

  const handleAddExcludedTerm = (event) => {
    event.preventDefault();
    const userInput = inputTerm;
    if (inputTerm === "") {
      alert("Cannot add empty query.");
      return;
    }
    // props.onUpdateTerms([
    //   ...props.currentTerms,
    //   { id: id, text: userInput, type: "excluded" },
    // ]);
    addDoc(collectionRef, { text: userInput, type: "excluded" })
      .then((response) => console.log(response.id))
      .catch((error) => console.log(error.message));
    setInputTerm("");
  };

  return (
    <div>
      <Box width="100%">
        <HStack spacing="2%">
          <Input
            placeholder="Add Query Terms"
            size="lg"
            width="50%"
            margin={4}
            required
            type="text"
            id="newTerm"
            onChange={(event) => handleChange(event)}
            value={inputTerm}
          />
          <Button
            color={themeColor.addTermButton}
            variant="ghost"
            size="lg"
            onClick={handleAddIncludedTerm}
          >
            Add Primary Term
          </Button>
          <Button
            color={themeColor.addTermButton}
            variant="ghost"
            size="lg"
            onClick={handleAddExcludedTerm}
          >
            Exclude Term
          </Button>
        </HStack>
      </Box>
    </div>
  );
};

export default InputArea;
