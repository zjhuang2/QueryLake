import React from "react";
import {
  Box,
  Text,
  Heading,
  SimpleGrid,
  Button,
  Center,
  Image,
  Container,
  Flex,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import "./CategoryStyle.css";
import GallaryItem from "../components/GallaryItem";

const Categories = () => {
  return (
    <div>
      <Box maxW="90%" margin="1em 3.5em" rounded="2xl" padding={5}>
        <Text fontSize="7xl" fontWeight="extrabold" color="blackAlpha.800">
          Query Gallary
        </Text>
      </Box>

      <Container centerContent maxW="90%">
        <Heading
          size="2xl"
          color="blackAlpha.500"
          marginTop={10}
          marginBottom={8}
        >
          Functional Wellness Narratives
        </Heading>
        <SimpleGrid columns={2} spacing={10}>
          <GallaryItem
            path="/focus"
            imgSource="images/focus_box.jpg"
            name="Mental Performance"
          />
          <GallaryItem
            path="/immunity"
            imgSource="images/immunity_box.jpg"
            name="Immunity"
          />
          <GallaryItem
            path="/relaxation"
            imgSource="images/relax_box.jpg"
            name="Relaxation"
          />
          <GallaryItem
            path="/digestive-health"
            imgSource="images/digestive_box.jpg"
            name="Digestive Health"
          />
          <GallaryItem
            path="/detox"
            imgSource="images/detox_box.jpg"
            name="Detox"
          />
          <GallaryItem
            path="/sustained-energy"
            imgSource="images/energy_box.jpg"
            name="Natural Sustained Energy"
          />
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Categories;
