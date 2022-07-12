import React from "react";
import Header from "./components/Header";
import Focus from "./components/Focus";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/300.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from "./theme";
import { Immunity } from "./components/Immunity";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Header />
        <div>&nbsp;</div>
        <Focus />
        <div>&nbsp;</div>
        <Immunity />
      </div>
    </ChakraProvider>
  );
};

export default App;
