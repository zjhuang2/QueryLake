import React from "react";
import { Link as ReactLink } from "react-router-dom";
import {
  Heading,
  Text,
  Box,
  SimpleGrid,
  Button,
  Center,
  Container,
  Divider,
  Flex,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <Box
        maxW="90%"
        margin="3em auto"
        rounded="2xl"
        padding={12}
        bgColor="red.50"
        color="red.500"
      >
        <Text
          fontSize="8xl"
          fontWeight="extrabold"
          bgGradient="linear(to-l, #F56565, #805AD5)"
          bgClip="text"
        >
          Introducing KOuery.
        </Text>

        <div>&nbsp;</div>
        <Heading color="blackAlpha.700">
          A Query curation & optimzation tool designed for Coca-Cola's Technical
          Consumer research work.
        </Heading>
        <div>&nbsp;</div>
        <SimpleGrid columns={2} spacing={2} padding={10}>
          <ReactLink to="/categories">
            <Button
              height={20}
              width="80%"
              bgGradient="linear(to-l, #F56565, #805AD5)"
              color="white"
              fontSize="2xl"
              rounded="2xl"
              margin={4}
            >
              View Categories
            </Button>
          </ReactLink>

          <ReactLink to="/twitter-trends">
            <Button
              height={20}
              width="80%"
              bgGradient="linear(to-l, teal.500, green.500)"
              color="white"
              fontSize="2xl"
              rounded="2xl"
              margin={4}
            >
              View Real-Time Trends
            </Button>
          </ReactLink>
        </SimpleGrid>
      </Box>
      <Divider orientation="horizontal" maxW="100%" center />
      <Container margin={12} maxW="90%">
        <Heading as="h1" size="2xl">
          Features
        </Heading>
        <SimpleGrid columns={2} spacing={2}>
          <Box
            maxW="90%"
            margin="1em 0"
            rounded="2xl"
            boxShadow="2xl"
            padding={12}
            bgColor="blue.400"
            color="white"
          >
            <Heading>Collaborative Query Curation.</Heading>
            <div>&nbsp;</div>
            <Heading size="md">
              Freely add and delete TCR Topic-relevent terms. All records will
              keep in-sync with the Firestore Database, enabling real-time team
              collaboration in curation work.
            </Heading>
          </Box>
          <Box
            maxW="90%"
            margin="1em 0"
            rounded="2xl"
            boxShadow="2xl"
            padding={12}
            bgColor="pink.400"
            color="white"
          >
            <Heading size="xl">Synonyms/Similar Words Generator.</Heading>
            <div>&nbsp;</div>
            <Heading size="md">
              KOuery integrates the Merriam-Webster Dictionary,enabling access
              to comprehensive resource of Thesaurus content, including synonyms
              and similar terms.
            </Heading>
          </Box>
          <Box
            maxW="90%"
            margin="1em 0"
            rounded="2xl"
            boxShadow="2xl"
            padding={12}
            bgColor="green.400"
            color="white"
          >
            <Heading size="xl">Associated Words and Phrases.</Heading>
            <div>&nbsp;</div>
            <Heading size="md">
              KOuery integrates Word Association Network API,enabling
              opportunity to look up associations with a given word by analyzing
              classicial and contemporary works of English literature.
            </Heading>
          </Box>
          <Box
            maxW="90%"
            margin="1em 0"
            rounded="2xl"
            boxShadow="2xl"
            padding={12}
            bgColor="orange.400"
            color="white"
          >
            <Heading size="xl">Real-Time Twitter Trends.</Heading>
            <div>&nbsp;</div>
            <Heading size="md">
              Displaying the real-time, up-to-date Twitter Trends around the
              globe enables the power to proactively eliminate noises during
              social listening data sourcing process.
            </Heading>
          </Box>
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Home;
