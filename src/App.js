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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [aboutBottom, setAboutBottom] = useState(0);

  if (window.location.hostname === "cheddarchoi.github.io") {
    let newURL = window.location.href.replace("cheddarchoi.github.io", "daeunchoi.com");
    window.location.href = newURL;
  }

  const handleScrollAnimation = () => {
    const currScroll = window.pageYOffset || document.documentElement.scrollTop;
    setScrollPosition(currScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollAnimation);

    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
    };
  }, []);

  useEffect(() => {
    const updateAboutBottom = () => {
      const aboutDiv = document.getElementById("about");
      if (aboutDiv) {
        const rect = aboutDiv.getBoundingClientRect();
        setAboutBottom(rect.bottom + window.scrollY - 120);
      }
    };

    updateAboutBottom();
    window.addEventListener("scroll", handleScrollAnimation);
    window.addEventListener("resize", updateAboutBottom);

    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
      window.removeEventListener("resize", updateAboutBottom);
    };
  }, []);

  const isPastAbout = scrollPosition > aboutBottom;
  const waveStyles = isPastAbout
    ? {
        position: "absolute",
        top: `${aboutBottom}px`,
      }
    : {
        position: "fixed",
        top: "0",
      };

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkMode ? dark : light}>
        <StyledDiv className={darkMode ? "dark" : "light"}>
          <div
            className="background-container"
            style={{
              ...waveStyles,
              backgroundPositionX: `${scrollPosition * 0.2}%`,
            }}
          ></div>
          <div
            className="background-container-flipped"
            style={{
              ...waveStyles,
              backgroundPositionX: `${100 - scrollPosition * 0.2}%`,
            }}
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
