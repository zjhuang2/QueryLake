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
} from "@chakra-ui/react";
import RelatedTermTag from "./Widgets/RelatedTermTag";

const QueryRec = (props) => {
  const [relatedTerms, setRelatedTerms] = useState([
    "Nervous System",
    "Sports Psychology",
    "Productivity",
    "Attention Span",
    "Awareness",
    "ADHD",
  ]);
  const themeColor = props.themeColor;
  const { isOpen, onOpen, onClose } = useDisclosure();

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
                  <RelatedTermTag name={item} />
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
