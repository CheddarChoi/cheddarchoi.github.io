import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import "./App.scss";
import { dark, light } from "./theme";

import Header from "./components/header";
import Home from "./pages/home";
import { useState } from "react";
import Footer from "./components/footer";

import ReactGA from "react-ga";

const TRACKING_ID = "G-JD6DSVX4Q3";
ReactGA.initialize(TRACKING_ID);

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.colors.bgColor};
  color: ${(props) => props.theme.colors.color};
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkMode ? dark : light}>
        <StyledDiv className={darkMode ? "dark" : "light"}>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Redirect path="*" to="/" />
          </Switch>
          <Footer />
        </StyledDiv>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
