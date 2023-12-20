import { useEffect, useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import "./App.scss";
import { dark, light } from "./theme";

import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";

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
  const [percent, setPercent] = useState(0);

  if (window.location.hostname === "cheddarchoi.github.io") {
    let newURL = window.location.href.replace("cheddarchoi.github.io", "daeunchoi.com");
    window.location.href = newURL;
  }

  const handleScrollAnimation = (e) => {
    var scrollMaxY = 300;
    var currScroll = window.pageYOffset || document.documentElement.scrollTop;
    var percent = Math.abs(Math.min((currScroll * 100) / scrollMaxY, 100));
    console.log(percent);
    setPercent(percent);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      handleScrollAnimation(e);
    });

    return () => {
      window.removeEventListener("scroll", (e) => {
        handleScrollAnimation(e);
      });
    };
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkMode ? dark : light}>
        <StyledDiv className={darkMode ? "dark" : "light"}>
          <div
            className="background-container"
            style={{ backgroundPositionX: `${percent - 10}%` }}
          ></div>
          <div
            className="background-container-flipped"
            style={{ backgroundPositionX: `${110 - percent}%` }}
          ></div>
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
