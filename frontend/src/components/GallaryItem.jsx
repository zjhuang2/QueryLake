import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { Flex, Image, Center, Text } from "@chakra-ui/react";

const GallaryItem = (props) => {
  return (
    <div>
      <ReactLink to={props.path}>
        <Flex
          border="solid 1px"
          borderColor="blackAlpha.500"
          rounded="xl"
          className="gallaryItem"
          overflow="hidden"
        >
          <Image src={props.imgSource} objectFit="cover" w={200} h={150} />
          <Center padding={8}>
            <Text fontSize="2xl" fontWeight="bold" color="blackAlpha.700">
              {props.name}
            </Text>
          </Center>
        </Flex>
      </ReactLink>
    </div>
  );
};

export default GallaryItem;
