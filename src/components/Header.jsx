import React from "react";
import { ChakraProvider, Text, Heading, Container } from "@chakra-ui/react";

const Header = () => {
  return (
    <div className="header">
      <Container maxW="100%" bg="red.600" color="white">
        <Text fontSize="5xl" fontWeight="bold">
          TCR Query Collections
        </Text>
      </Container>
    </div>
  );
};

export default Header;
