import { React, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Wrap,
  WrapItem,
  Heading,
  Divider,
  Text,
  STORAGE_KEY,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import RelatedTermTag from "./RelatedTermTag";
import RelatedTermSelectedTag from "./RelatedTermSelectedTag";
import { checkTargetForNewValues } from "framer-motion";

const QueryTag = (props) => {
  const termName = props.name;
  const themeColor = props.themeColor;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [associatedWords, setAssociatedWords] = useState([]);

  const relatedTermsBeforeChanges = associatedWords;

  const deleteTag = () => {
    props.onDelete(props.id);
  };

  // add to primary
  const addPrimary = (id) => {
    const newTermsArray = associatedWords.map((word) =>
      word.id === id ? { ...word, type: "primary" } : word
    );
    setAssociatedWords(newTermsArray);
  };

  // return pool
  const returnToPool = (id) => {
    const newTermsArray = associatedWords.map((word) =>
      word.id === id ? { ...word, type: "na" } : word
    );
    setAssociatedWords(newTermsArray);
  };

  // add to excluded
  const addExcluded = (id) => {
    const newTermsArray = associatedWords.map((item) =>
      item.id === id ? { ...item, type: "excluded" } : item
    );
    setAssociatedWords(newTermsArray);
  };

  const cancelChanges = () => {
    setAssociatedWords(relatedTermsBeforeChanges);
  };

  const applyChanges = () => {
    const candidateTerms = associatedWords.filter(
      (word) => word.type === "primary" || word.type === "excluded"
    );
    props.onApplyChanges([...props.currentTerms, candidateTerms]);
  };

  const url =
    "https://api.wordassociations.net/associations/v1.0/json/search?apikey=20f6c56a-cc76-4fd6-8679-61d0ddd9b877";
  const API = url + "&text=" + termName.toLowerCase() + "&lang=en";

  const fetchAssociatedWords = async () => {
    let response = await fetch(API);
    if (response.status === 200) {
      let data = await response.json();
      let wordsArray = await data.response[0].items;
      wordsArray = wordsArray.map((word) => ({
        ...word,
        id: word.item.trim().toLowerCase().replace(/\s+/g, "-"),
        type: "na",
      }));
      // rename the key "item" to "text"
      const wordsArrayCleaned = wordsArray.map((word) => ({
        id: word.id,
        text: word.item,
        type: word.type,
      }));
      setAssociatedWords(wordsArrayCleaned);
    }
  };

  return (
    <div className="query">
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          bgColor={themeColor.queryTagBg}
          color={themeColor.queryTagText}
          margin="1em 0.5em"
        >
          {termName}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={deleteTag}>
            <Text color="red">Delete Term</Text>
          </MenuItem>
          <MenuItem
            onClick={() => {
              onOpen();
              fetchAssociatedWords();
            }}
          >
            <Text>Find Related Terms</Text>
          </MenuItem>
        </MenuList>
      </Menu>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Related Terms Recommendations</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Wrap>
              {associatedWords
                .filter((word) => word.type === "na")
                .map((word) => (
                  <WrapItem>
                    <RelatedTermTag
                      name={word.text}
                      id={word.id}
                      type={word.type}
                      addPrimaryTerm={addPrimary}
                      addExcludedTerm={addExcluded}
                    />
                  </WrapItem>
                ))}
            </Wrap>

            <div>&nbsp;</div>

            <Heading size="md">Primary</Heading>
            <Divider />
            <Wrap>
              {associatedWords
                .filter((word) => word.type === "primary")
                .map((word) => (
                  <WrapItem>
                    <RelatedTermSelectedTag
                      id={word.id}
                      name={word.text}
                      currentRelatedTerms={associatedWords}
                      onReturnToPool={returnToPool}
                      tagColor="green"
                    />
                  </WrapItem>
                ))}
            </Wrap>

            <div>&nbsp;</div>
            <Heading size="md">Excluded</Heading>
            <Divider />
            <Wrap>
              {associatedWords
                .filter((word) => word.type === "excluded")
                .map((word) => (
                  <WrapItem>
                    <RelatedTermSelectedTag
                      id={word.id}
                      name={word.text}
                      currentRelatedTerms={associatedWords}
                      onReturnToPool={returnToPool}
                      tagColor="red"
                    />
                  </WrapItem>
                ))}
            </Wrap>
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
              onClick={applyChanges}
            >
              Apply
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default QueryTag;
