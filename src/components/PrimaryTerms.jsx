import { React, useContext } from "react";
import { Wrap, WrapItem, Heading, Box } from "@chakra-ui/react";
import QueryTag from "./Widgets/QueryTag";

const PrimaryTerms = (props) => {
  const terms = props.terms.filter((item) => item.type === "primary");
  const themeColor = props.themeColor;

  const deleteTerm = (id) => {
    const newTermArray = props.terms.filter((term) => term.id !== id);
    props.updateTerms(newTermArray);
  };

  const updatePrimaryTerms = () => {
    props.updatePrimary();
  };

  return (
    <div>
      <Box boxShadow="lg" margin={4} rounded="xl">
        <Heading
          fontSize="xl"
          margin="1.2em 0.2em 0 1.2em"
          color={themeColor.queryTagText}
        >
          Primary Terms
        </Heading>

        <Wrap margin={4} spacing={4}>
          <WrapItem>
            {terms.map((term) => (
              <QueryTag
                id={term.id}
                name={term.text}
                onDelete={deleteTerm}
                themeColor={themeColor}
                onApplyChanges={updatePrimaryTerms}
              />
            ))}
          </WrapItem>
        </Wrap>
      </Box>
    </div>
  );
};

export default PrimaryTerms;
