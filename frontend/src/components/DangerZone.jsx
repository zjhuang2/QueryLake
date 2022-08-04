import React from "react";
import {
  Container,
  Heading,
  Box,
  Button,
  Text,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverTrigger,
  PopoverContent,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { TopicTemplate } from "../pages/TopicTemplate";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../lib/firebase-config";

const DangerZone = (props) => {
  const deleteTopic = async () => {
    await deleteDoc(doc(db, "kouery", props.topicId));
  };

  const { onClose } = useDisclosure();

  return (
    <div>
      <Box
        maxW="80%"
        margin="3em auto"
        rounded="2xl"
        padding={10}
        border="solid 2.5px"
        borderColor="red"
      >
        <Heading color="red.500" size="xl">
          Danger Zone
        </Heading>
        <Text fontWeight="bold" color="blackAlpha.700" fontSize="xl">
          Warning: Removal of topics cannot be undone.
        </Text>

        <Box marginTop={5}>
          <Popover>
            <PopoverTrigger>
              <Button colorScheme="red">Delete Topic</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>
                <Text fontWeight="bold" fontSize="xl">
                  Confirmation
                </Text>
              </PopoverHeader>
              <PopoverBody>
                <Text>Are you sure you want to delete this topic?</Text>
                <Flex marginTop={5}>
                  <Button
                    marginRight={5}
                    colorScheme="green"
                    br={3}
                    onClick={() => {
                      onClose();
                    }}
                  >
                    Go Back
                  </Button>
                  <ReactLink to="/categories">
                    <Button
                      colorScheme="red"
                      br={3}
                      onClick={() => {
                        deleteTopic();
                      }}
                    >
                      Delete
                    </Button>
                  </ReactLink>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
      </Box>
    </div>
  );
};

export default DangerZone;
