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

  const handleIncludeRelatedTerm = () => {
    props.onIncludeRelatedTerm(name);
  };

  const handleExcludeRelatedTerm = () => {
    props.onExcludeRelatedTerm(name);
  };

  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} margin={1}>
          {props.name}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={handleIncludeRelatedTerm}>
            <Text color="green">Include</Text>
          </MenuItem>
          <MenuItem onClick={handleExcludeRelatedTerm}>
            <Text color="red">Exclude</Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default RelatedTermTag;
