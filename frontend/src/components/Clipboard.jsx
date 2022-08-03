import React from "react";
import { Button, Text, Heading, Flex, useToast, Box } from "@chakra-ui/react";
import "@fontsource/pt-mono";

const Clipboard = (props) => {
  const toast = useToast();

  const copyPrimaryToClipboard = () => {
    const primaryArray = props.terms
      .filter((term) => term.data.type === "primary")
      .map((term) => term.data.text);
    const primaryString = primaryArray.join(";");
    navigator.clipboard.writeText(primaryString);
  };

  const copyExcludedToClipboard = () => {
    const excludedArray = props.terms
      .filter((term) => term.data.type === "excluded")
      .map((term) => term.data.text);
    const excludedString = excludedArray.join(";");
    navigator.clipboard.writeText(excludedString);
  };

  return (
    <div>
      <Heading size="md">Copy Primary Terms to Clipboard</Heading>
      <Box
        border="solid 1px"
        borderColor="blackAlpha.300"
        rounded="2xl"
        padding={4}
        maxW="80%"
        marginTop={5}
        marginBottom={5}
      >
        {props.terms
          .filter((term) => term.data.type === "primary")
          .map((primaryTerm) => (
            <Text as="span" fontFamily="PT Mono">
              {primaryTerm.data.text};
            </Text>
          ))}
      </Box>
      <Flex>
        <Button
          onClick={() => {
            copyPrimaryToClipboard();
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

      <div>&nbsp;&nbsp;</div>
      <div>&nbsp;&nbsp;</div>

      <Heading size="md">Copy Excluded Terms to Clipboard</Heading>
      <Box
        border="solid 1px"
        borderColor="blackAlpha.300"
        rounded="2xl"
        padding={4}
        maxW="80%"
        marginTop={5}
        marginBottom={5}
      >
        {props.terms
          .filter((term) => term.data.type === "excluded")
          .map((excludedTerm) => (
            <Text as="span" fontFamily="PT Mono">
              {excludedTerm.data.text};
            </Text>
          ))}
      </Box>
      <Flex>
        <Button
          onClick={() => {
            copyExcludedToClipboard();
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
        <Button marginTop={1}>Export to Excel (Under Development)</Button>
      </Flex>
    </div>
  );
};

export default Clipboard;
