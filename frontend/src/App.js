import React from "react";
import Header from "./components/Header";
import Focus from "./components/Focus";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/500.css";

import { ChakraProvider, Divider, extendTheme } from "@chakra-ui/react";
import theme from "./theme";
import { Immunity } from "./components/Immunity";
import ExcludedTermRec from "./components/ExcludedTermRec";
import TwitterTrends from "./components/TwitterTrends";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Header />
        <div>&nbsp;</div>
        <Focus />
        {/* <div>&nbsp;</div>
        <Immunity />
        <div>&nbsp;</div>
        <Divider orientation="horizontal" />
        <div>&nbsp;</div>
        <ExcludedTermRec /> */}
        <div>&nbsp;</div>
        <TwitterTrends />
      </div>
    </ChakraProvider>
  );
};

export default App;
