import {
  FormControl,
  FormLabel,
  Stack,
  Input,
  FormHelperText,
  ButtonGroup,
  Button,
  useDisclosure,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
} from "@chakra-ui/react";
import { React, useState, useRef } from "react";
import FocusLock from "@chakra-ui/focus-lock";
import { db } from "../lib/firebase-config";
import { addDoc, collection, getDocs, setDoc, doc } from "firebase/firestore";

const AddTopics = (props) => {
  const handleChange = (event, setState) => {
    const userInput = event.target.value;
    setState(userInput);
  };

  const cancelChanges = () => {
    setTopicName("");
    setTopicId("");
  };

  const applyCreate = async () => {
    const existingItems = props.existingTopics.map(
      (topic) => topic.data.topicName
    );
    console.log(existingItems);
    if (existingItems.includes(topicName)) {
      alert("Topic already exists.");
    } else {
      await setDoc(doc(db, "kouery", topicId), {
        topicName: topicName,
      });
      const docRef = doc(db, "kouery", topicId);
      const colRef = collection(docRef, "terms");
      await addDoc(colRef, {
        text: topicName,
        type: "primary",
      });
    }
    setTopicName("");
    setTopicId("");
  };

  const [topicName, setTopicName] = useState("");
  const [topicId, setTopicId] = useState("");

  const { onClose, isOpen, onOpen } = useDisclosure();
  const initialRef = useRef(null);

  return (
    <div>
      <Button
        width="100%"
        padding={8}
        marginTop="1.5em"
        fontSize="2xl"
        bgColor="green.500"
        rounded="3xl"
        color="white"
        shadow="lg"
        onClick={() => {
          onOpen();
        }}
      >
        Add New Topic
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="3xl"
        closeOnBlur={false}
        initialFocusRef={initialRef}
      >
        <ModalOverlay />
        <ModalContent>
          <FocusLock returnFocus persistentFocus={false}>
            <ModalHeader>Create New Topic</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={4} padding={4}>
                <FormControl>
                  <FormLabel>Topic Name</FormLabel>
                  <Input
                    value={topicName}
                    onChange={(event) => handleChange(event, setTopicName)}
                    ref={initialRef}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Topic ID</FormLabel>
                  <Input
                    value={topicId}
                    onChange={(event) => handleChange(event, setTopicId)}
                  />
                  <FormHelperText>
                    Suggested ID Format: All Lowercase; Replace whitespace with
                    "-" (e.g., mental-performance, relax)
                  </FormHelperText>
                </FormControl>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="ghost"
                br={3}
                onClick={() => {
                  onClose();
                  cancelChanges();
                }}
              >
                Cancel
              </Button>
              <Button
                colorScheme="green"
                br={3}
                margin={3}
                onClick={() => {
                  applyCreate();
                  onClose();
                }}
              >
                Create
              </Button>
            </ModalFooter>
          </FocusLock>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddTopics;
