import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Button, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const QueryTag = (props) => {
  const termName = props.name;
  const themeColor = props.themeColor;

  const deleteTag = () => {
    props.onDelete(termName);
  };

  return (
    <div className="query">
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          bgColor={themeColor.queryTagBg}
          color={themeColor.queryTagText}
          margin={4}
        >
          {termName}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={deleteTag}>
            <Text color="red">Delete Term</Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default QueryTag;
