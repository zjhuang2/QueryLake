import { React, useEffect, useState } from "react";
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
  Box,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import RelatedTermTag from "./RelatedTermTag";
import RelatedTermSelectedTag from "./RelatedTermSelectedTag";
import { checkTargetForNewValues } from "framer-motion";
import { some } from "lodash";
import { addDoc } from "firebase/firestore";

const QueryTag = (props) => {
  const termName = props.name;
  const themeColor = props.themeColor;
  const collectionRef = props.collectionRef;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [associatedWords, setAssociatedWords] = useState([]);
  const [similarWords, setSimilarWords] = useState([]);
  const [relatedTerms, setRelatedTerms] = useState([]);

  const relatedTermsBeforeChanges = relatedTerms;

  const deleteTag = () => {
    props.onDelete(props.id);
  };
  // -------------- ASSOCIATED WORDS ------------------
  const addPrimary = (id) => {
    const newTermsArray = relatedTerms.map((word) =>
      word.id === id ? { ...word, type: "primary" } : word
    );
    setRelatedTerms(newTermsArray);
  };

  const returnToPool = (id) => {
    const newTermsArray = relatedTerms.map((word) =>
      word.id === id ? { ...word, type: "na" } : word
    );
    setRelatedTerms(newTermsArray);
  };

  const addExcluded = (id) => {
    const newTermsArray = relatedTerms.map((word) =>
      word.id === id ? { ...word, type: "excluded" } : word
    );
    setRelatedTerms(newTermsArray);
  };

  // --------------- SHARED METHODS ----------------
  const cancelChanges = () => {
    setRelatedTerms(relatedTermsBeforeChanges);
  };

  const applyChanges = () => {
    const candidateTerms = relatedTerms.filter(
      (word) => word.type === "primary" || word.type === "excluded"
    );
    candidateTerms.forEach((candidateTerm) => {
      addDoc(collectionRef, {
        text: candidateTerm.text,
        type: candidateTerm.type,
      })
        .then((response) => console.log(response.id))
        .catch((error) => console.log(error.message));
    });
  };

  const assocURL =
    "https://api.wordassociations.net/associations/v1.0/json/search?apikey=20f6c56a-cc76-4fd6-8679-61d0ddd9b877";
  const assocAPI = assocURL + "&text=" + termName.toLowerCase() + "&lang=en";

  const similarURL =
    "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/";
  const similarAPI =
    similarURL +
    termName.toLowerCase() +
    "?key=c0b50b2b-6383-4dee-bfce-8f738c367801";

  const fetchSimilarWords = async () => {
    let response = await fetch(similarAPI);
    if (response.status === 200) {
      let data = await response.json();
      let wordsArray = await data[0].meta.syns[0].slice(0, 30);
      wordsArray = wordsArray
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .map((word) => ({
          id: word.trim().toLowerCase().replace(/\s+/g, "-"),
          text: word,
          type: "na",
          relation: "similar",
        }));
      wordsArray.filter(
        (word) => !props.terms.some((term) => term.id === word.id)
      );
      setSimilarWords(wordsArray);
    }
  };

  const fetchAssociatedWords = async () => {
    let response = await fetch(assocAPI);
    if (response.status === 200) {
      let data = await response.json();
      let wordsArray = await data.response[0].items;
      wordsArray = wordsArray.map((word) => ({
        ...word,
        id: word.item.trim().toLowerCase().replace(/\s+/g, "-"),
        type: "na",
      }));
      // reprocess the data
      const wordsArrayCleaned = wordsArray
        .map((word) => ({
          id: word.id,
          text: word.item,
          type: "na",
          relation: "associated",
        }))
        .filter((word) => !props.terms.some((term) => term.id === word.id))
        .filter(
          (word) => !similarWords.some((term) => term.text === word.text)
        );
      setAssociatedWords(wordsArrayCleaned);
    }
  };

  useEffect(() => {
    setRelatedTerms([...similarWords, ...associatedWords]);
  }, [similarWords, associatedWords]);

  return (
    <div className="query">
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          bgColor={themeColor.queryTagBg}
          color={themeColor.queryTagText}
          margin="0.25em 0.25em"
          shadow="lg"
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
              fetchSimilarWords();
              fetchAssociatedWords();
            }}
          >
            <Text>Find Related Terms</Text>
          </MenuItem>
        </MenuList>
      </Menu>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Related Terms Recommendations</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box shadow="xl" padding={5} rounded="xl">
              <Heading fontSize="xl">Similar Terms / Synonyms</Heading>
              <div>&nbsp;</div>
              <Wrap>
                {relatedTerms
                  .filter(
                    (word) => word.type === "na" && word.relation === "similar"
                  )
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
            </Box>
            <div>&nbsp;</div>
            <Box shadow="xl" padding={5} rounded="xl">
              <Heading fontSize="xl">Associated Terms</Heading>
              <div>&nbsp;</div>
              <Wrap>
                {relatedTerms
                  .filter(
                    (word) =>
                      word.type === "na" && word.relation === "associated"
                  )
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
            </Box>

            <div>&nbsp;</div>

            <Heading size="md">Primary</Heading>
            <Divider />
            <Wrap>
              {relatedTerms
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
              {relatedTerms
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
              onClick={() => {
                applyChanges();
                onClose();
              }}
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
