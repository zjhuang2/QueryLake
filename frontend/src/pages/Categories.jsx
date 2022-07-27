import React from "react";
import {
  Box,
  Text,
  Heading,
  SimpleGrid,
  Button,
  Center,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import "./CategoryStyle.css";

const Categories = () => {
  return (
    <div>
      <Box maxW="90%" margin="1em 3.5em" rounded="2xl" padding={5}>
        <Text fontSize="7xl" fontWeight="extrabold" color="blackAlpha.800">
          Select the category you want to edit on.
        </Text>
      </Box>
      <Box>
        <SimpleGrid columns={3} spacing={10} margin={20}>
          <ReactLink to="/focus">
            <Center
              border="solid 1px"
              borderColor="blackAlpha.500"
              rounded="xl"
              padding={8}
              className="gallaryItem"
            >
              <Heading size="xl">Mental Performance</Heading>
            </Center>
          </ReactLink>

          <ReactLink to="/immunity">
            <Center
              border="solid 1px"
              borderColor="blackAlpha.500"
              rounded="xl"
              padding={8}
              className="gallaryItem"
            >
              <Heading size="xl">Immunity</Heading>
            </Center>
          </ReactLink>
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Categories;
