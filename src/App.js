import { useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import "./App.scss";
import { dark, light } from "./theme";

import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
import Wave from "./components/Wave";

import ReactGA from "react-ga4";

const TRACKING_ID = "G-2EGWKG1G8W";
ReactGA.initialize(TRACKING_ID);
ReactGA.send("pageview");

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.colors.bgColor};
  color: ${(props) => props.theme.colors.color};
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  if (window.location.hostname === "cheddarchoi.github.io") {
    let newURL = window.location.href.replace("cheddarchoi.github.io", "daeunchoi.com");
    window.location.href = newURL;
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkMode ? dark : light}>
        <StyledDiv className={darkMode ? "dark" : "light"}>
          <Wave />
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Redirect path="*" to="/" />
          </Switch>
          <Footer />
          <div className="position-relative">
            <div className="footer-background" />
            <div className="footer-background-flipped" />
          </div>
        </StyledDiv>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
