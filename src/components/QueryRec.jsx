import { React, useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
  Wrap,
  WrapItem,
  Heading,
  Divider,
  TagLabel,
  Tag,
  TagCloseButton,
} from "@chakra-ui/react";
import RelatedTermTag from "./Widgets/RelatedTermTag";
import RelatedTermSelectedTag from "./Widgets/RelatedTermSelectedTag";

const QueryRec = (props) => {
  const [relatedTerms, setRelatedTerms] = useState([
    { id: "nervous-system", text: "Nervous System" },
    { id: "sports-psychology", text: "Sports Psychology" },
    { id: "productivity", text: "Productivity" },
    { id: "attention-span", text: "Attention Span" },
    { id: "awareness", text: "Awareness" },
    { id: "adhd", text: "ADHD" },
  ]);

  const [relatedTermsToInclude, setRelatedTermsToInclude] = useState([]);
  const [relatedTermsToExclude, setRelatedTermsToExclude] = useState([]);

  const themeColor = props.themeColor;
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Transfer RT Pool to Included Section
  const includeRelatedTerm = (name) => {
    const newRelatedTermsArray = relatedTerms.filter(
      (item) => item.text !== name
    );
    setRelatedTerms(newRelatedTermsArray);
    const termToInclude = relatedTerms.find((item) => item.text === name);
    setRelatedTermsToInclude([...relatedTermsToInclude, termToInclude]);
  };

  const excludeRelatedTerm = (name) => {
    const newRelatedTermsArray = relatedTerms.filter(
      (item) => item.text !== name
    );
    setRelatedTerms(newRelatedTermsArray);
    const termToExclude = relatedTerms.find((item) => item.text === name);
    setRelatedTermsToExclude([...relatedTermsToExclude, termToExclude]);
  };

  const IncludedToPool = (name) => {
    const newIncludedTermsArray = relatedTermsToInclude.filter(
      (item) => item.text !== name
    );
    setRelatedTermsToInclude(newIncludedTermsArray);
    const termToReturn = relatedTermsToInclude.find(
      (item) => item.text === name
    );
    setRelatedTerms([...relatedTerms, termToReturn]);
  };

  const excludedToPool = (name) => {
    const newExcludedTermsArray = relatedTermsToExclude.filter(
      (item) => item.text !== name
    );
    setRelatedTermsToExclude(newExcludedTermsArray);
    const termToReturn = relatedTermsToExclude.find(
      (item) => item.text === name
    );
    setRelatedTerms([...relatedTerms, termToReturn]);
  };

  return (
    <div>
      <Button
        colorScheme={themeColor.generateButton}
        margin={4}
        size="lg"
        onClick={onOpen}
      >
        Generate Related Terms
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Related Terms Recommendations</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Wrap>
              {relatedTerms.map((item) => (
                <WrapItem>
                  <RelatedTermTag
                    name={item.text}
                    currentRelatedTerms={relatedTerms}
                    onIncludeRelatedTerm={includeRelatedTerm}
                    onExcludeRelatedTerm={excludeRelatedTerm}
                  />
                </WrapItem>
              ))}
            </Wrap>

            <div>&nbsp;</div>

            <Heading size="md">Included</Heading>
            <Divider />
            <Wrap>
              {relatedTermsToInclude.map((item) => (
                <WrapItem>
                  <RelatedTermSelectedTag
                    name={item.text}
                    currentRelatedTerms={relatedTerms}
                    onReturnToPool={IncludedToPool}
                    tagColor="green"
                  />
                </WrapItem>
              ))}
            </Wrap>

            <div>&nbsp;</div>
            <Heading size="md">Excluded</Heading>
            <Divider />
            <Wrap>
              {relatedTermsToExclude.map((item) => (
                <WrapItem>
                  <RelatedTermSelectedTag
                    name={item.text}
                    currentRelatedTerms={relatedTerms}
                    onReturnToPool={excludedToPool}
                    tagColor="red"
                  />
                </WrapItem>
              ))}
            </Wrap>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" br={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="green" br={3} margin={3}>
              Apply
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default QueryRec;
