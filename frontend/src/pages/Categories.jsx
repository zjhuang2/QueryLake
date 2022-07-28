import React from "react";
import {
  Box,
  Text,
  Heading,
  SimpleGrid,
  Button,
  Center,
  Image,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import "./CategoryStyle.css";

const Categories = () => {
  return (
    <div>
      <Box maxW="90%" margin="1em 3.5em" rounded="2xl" padding={5}>
        <Text fontSize="7xl" fontWeight="extrabold" color="blackAlpha.800">
          Query Gallary
        </Text>
      </Box>
      <Box>
        <SimpleGrid columns={3} spacing={10} margin={20}>
          <ReactLink to="/focus">
            <Box
              border="solid 1px"
              borderColor="blackAlpha.500"
              rounded="xl"
              className="gallaryItem"
              overflow="hidden"
            >
              <Image
                src="images/focus_box.jpg"
                object-fit="cover"
                w={500}
                h={200}
              />

              <Box display="flex" alignItems="baseline" padding={4}>
                <Text fontSize="2xl" fontWeight="bold" color="blackAlpha.700">
                  Mental Performance
                </Text>
              </Box>
            </Box>
          </ReactLink>

          <ReactLink to="/immunity">
            <Box
              border="solid 1px"
              borderColor="blackAlpha.500"
              rounded="xl"
              className="gallaryItem"
              overflow="hidden"
            >
              <Image
                src="images/immunity_box.jpg"
                objectFit="cover"
                w={500}
                h={200}
              />
              <Box display="flex" alignItems="baseline" padding={4}>
                <Text fontSize="2xl" fontWeight="bold" color="blackAlpha.700">
                  Immunity
                </Text>
              </Box>
            </Box>
          </ReactLink>
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Categories;
