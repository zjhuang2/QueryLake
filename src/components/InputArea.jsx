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

  const handleAddTerm = (event) => {
    event.preventDefault();
    const userInput = inputTerm;
    props.onAddTerm([...props.currentTerms, userInput]);

    setInputTerm("");
  };

  return (
    <div>
      <Box width="100%">
        <form
          onSubmit={(event) => {
            handleAddTerm(event);
          }}
        >
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
              onClick={handleAddTerm}
            >
              Add Term
            </Button>
          </HStack>
        </form>
      </Box>
    </div>
  );
};

export default InputArea;
