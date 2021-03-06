import React from "react";
import Header from "./components/Header";
import Focus from "./pages/Focus";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TwitterTrends from "./pages/TwitterTrends";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/500.css";
import { Route, Routes } from "react-router-dom";

import {
  BreadcrumbLink,
  ChakraProvider,
  Divider,
  extendTheme,
} from "@chakra-ui/react";
import theme from "./theme";
import { Immunity } from "./pages/Immunity";
import Categories from "./pages/Categories";
import { Relaxation } from "./pages/Relaxation";
import { DigestiveHealth } from "./pages/DigestiveHealth";
import { Detox } from "./pages/Detox";
import SustainedEnergy from "./pages/SustainedEnergy";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Header />
        <div>&nbsp;</div>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/focus" element={<Focus />} />
            <Route path="/immunity" element={<Immunity />} />
            <Route path="/relaxation" element={<Relaxation />} />
            <Route path="/twitter-trends" element={<TwitterTrends />} />
            <Route path="/digestive-health" element={<DigestiveHealth />} />
            <Route path="/detox" element={<Detox />} />
            <Route path="/sustained-energy" element={<SustainedEnergy />} />
          </Routes>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default App;
