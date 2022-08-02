import React from "react";
import { Button, Text, Heading, Flex, useToast, Box } from "@chakra-ui/react";

const Clipboard = (props) => {
  const toast = useToast();

  const copyTrendsToClipboard = () => {
    const primaryArray = props.terms.map((term) => term.data.text);
    const primaryString = primaryArray.join(";");
    navigator.clipboard.writeText(primaryString);
  };

  return (
    <div>
      <Heading size="md">Copy Trending Terms to Clipboard</Heading>
      <Box
        border="solid 1px"
        borderColor="blackAlpha.300"
        rounded="2xl"
        padding={4}
        maxW="80%"
        marginTop={5}
        marginBottom={5}
      >
        {props.terms.map((trendTerm) => (
          <Text as="span">{trendTerm.name};</Text>
        ))}
      </Box>
      <Flex>
        <Button
          onClick={() => {
            copyTrendsToClipboard();
            toast({
              title: "Copied to Clipboard",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          }}
          marginTop={1}
          marginRight={8}
        >
          Copy to Clipboard
        </Button>
        <Button marginTop={1}>Export to Excel (In Development)</Button>
      </Flex>
    </div>
  );
};

export default Clipboard;
