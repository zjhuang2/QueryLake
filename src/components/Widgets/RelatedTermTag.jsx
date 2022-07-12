import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";

const RelatedTermTag = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggle = () => {
    setIsSelected((current) => !current);
  };

  const handleOnDelete = () => {
    props.onDelete(props.name);
  };

  return (
    <div>
      <Button
        variant="outline"
        size="sm"
        colorScheme={isSelected ? "green" : undefined}
        onClick={handleToggle}
        rightIcon={
          isSelected ? <CloseIcon h={3} w={3} /> : <AddIcon h={3} w={3} />
        }
      >
        {props.name}
      </Button>
    </div>
  );
};

export default RelatedTermTag;
