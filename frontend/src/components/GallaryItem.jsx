import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { Flex, Image, Center, Text, Box } from "@chakra-ui/react";

const GallaryItem = (props) => {
  return (
    <div>
      <ReactLink to={props.path}>
        <Box
          border="solid 1px"
          borderColor="blackAlpha.500"
          rounded="xl"
          className="gallaryItem"
          overflow="hidden"
          padding={4}
          marginTop={4}
          marginBottom={4}
        >
          <Text fontSize="xl" fontWeight="bold" color="blackAlpha.700">
            {props.name}
          </Text>
        </Box>
      </ReactLink>
    </div>
  );
};

export default GallaryItem;
