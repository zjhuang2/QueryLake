import React, { useEffect, useState } from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const RelatedTermTag = (props) => {
  const name = props.name;
  const id = props.id;

  const handleAddPrimaryTerm = () => {
    props.addPrimaryTerm(id);
  };

  const handleAddExcludedTerm = () => {
    props.addExcludedTerm(id);
  };

  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} margin={1}>
          {name}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={handleAddPrimaryTerm}>
            <Text color="green">Add to Primary</Text>
          </MenuItem>
          <MenuItem onClick={handleAddExcludedTerm}>
            <Text color="red">Add to Excluded</Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default RelatedTermTag;
