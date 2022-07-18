import React from "react";
import { Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";

const RelatedTermSelectedTag = (props) => {
  const name = props.name;

  const handleReturnToPool = () => {
    props.onReturnToPool(name);
  };

  return (
    <div>
      <Tag
        size="lg"
        key={props.name.trim().toLowerCase().replace(/\s+/g, "-")}
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
