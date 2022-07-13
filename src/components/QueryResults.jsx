import { React, useContext } from "react";
import { Wrap, WrapItem, Heading } from "@chakra-ui/react";
import QueryTag from "./Widgets/QueryTag";

const QueryResults = (props) => {
  const terms = props.terms;
  const themeColor = props.themeColor;

  const deleteTerm = (termName) => {
    const newTermArray = terms.filter((term) => term !== termName);
    props.updateTerms(newTermArray);
  };

  return (
    <div>
      <Heading fontSize="xl" margin={4} color={themeColor.queryTagText}>
        {props.termType}
      </Heading>

      <Wrap
        margin={4}
        borderRadius={10}
        border="solid 1px"
        borderColor={themeColor.border}
        spacing={4}
      >
        <WrapItem>
          {terms.map((term) => (
            <QueryTag
              name={term}
              onDelete={deleteTerm}
              themeColor={themeColor}
            />
          ))}
        </WrapItem>
      </Wrap>
    </div>
  );
};

export default QueryResults;
