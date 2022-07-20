import React from "react";
import { Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";

const RelatedTermSelectedTag = (props) => {
  const handleReturnToPool = () => {
    props.onReturnToPool(props.id);
  };

  return (
    <div>
      <Tag
        size="lg"
        id={props.id}
        borderRadius={6}
        variant="solid"
        colorScheme={props.tagColor}
        margin={2}
      >
        <TagLabel>{props.name}</TagLabel>
        <TagCloseButton onClick={handleReturnToPool} />
      </Tag>
    </div>
  );
};

export default RelatedTermSelectedTag;
