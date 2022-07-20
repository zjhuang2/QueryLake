import React from "react";
import {
  ChakraProvider,
  Text,
  Heading,
  Container,
  Flex,
  Tag,
  TagLabel,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <div className="header">
      <Container maxW="100%" bg="blue.900" color="white" shadow="lg">
        <Flex>
          <Text fontSize="5xl" fontWeight="bold">
            KOuery for TCR
          </Text>
          <Text>&nbsp;&nbsp;</Text>
          <Tag height={2} marginTop={3}>
            <TagLabel>Beta</TagLabel>
          </Tag>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
