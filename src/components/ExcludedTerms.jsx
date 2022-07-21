import { React, useContext } from "react";
import { Wrap, WrapItem, Heading, Box } from "@chakra-ui/react";
import QueryTag from "./Widgets/QueryTag";

const ExcludedTerms = (props) => {
  const themeColor = props.themeColor;

  const deleteTerm = (id) => {
    const newTermArray = props.terms.filter((term) => term.id !== id);
    props.updateTerms(newTermArray);
  };

  return (
    <div>
      <Box boxShadow="lg" margin={4} rounded="xl">
        <Heading
          fontSize="xl"
          margin="1em 0.2em 0 1.2em"
          color={themeColor.queryTagText}
        >
          Excluded Terms
        </Heading>

        <Wrap margin={4} spacing={4}>
          <WrapItem>
            {props.terms
              .filter((item) => item.type === "excluded")
              .map((term) => (
                <QueryTag
                  id={term.id}
                  name={term.text}
                  onDelete={deleteTerm}
                  themeColor={themeColor}
                  terms={props.terms}
                  onApplyChanges={props.updateTerms}
                />
              ))}
          </WrapItem>
        </Wrap>
      </Box>
    </div>
  );
};

export default ExcludedTerms;
