import React, { useState, useContext } from "react";
import { Box, HStack, Button, Input } from "@chakra-ui/react";

const InputArea = (props) => {
  const [inputTerm, setInputTerm] = useState("");
  const themeColor = props.themeColor;

  /* Handle user inputs */
  const handleChange = (event) => {
    const userInput = event.target.value;
    setInputTerm(userInput);
  };

  const handleAddIncludedTerm = (event) => {
    event.preventDefault();
    const userInput = inputTerm;
    const id = userInput.trim().toLowerCase().replace(/\s+/g, "-");
    props.onAddIncludeTerm([
      ...props.currentIncludedTerms,
      { id: id, text: userInput },
    ]);
    setInputTerm("");
  };

  const handleAddExcludedTerm = (event) => {
    event.preventDefault();
    const userInput = inputTerm;
    const id = userInput.trim().toLowerCase().replace(/\s+/g, "-");
    props.onAddExcludeTerm([
      ...props.currentExcludedTerms,
      { id: id, text: userInput },
    ]);

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
            bgColor={themeColor.addTermButton}
            color="white"
            size="lg"
            onClick={handleAddIncludedTerm}
          >
            Add Term to Include
          </Button>
          <Button
            bgColor={themeColor.addTermButton}
            color="white"
            size="lg"
            onClick={handleAddExcludedTerm}
          >
            Add Term to Exclude
          </Button>
        </HStack>
      </Box>
    </div>
  );
};

export default InputArea;
