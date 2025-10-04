import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import ReactGA from "react-ga4";

import { ReactComponent as CVIcon } from "../components/icons/cv.svg";
import { ReactComponent as MailIcon } from "../components/icons/mail.svg";
import { ReactComponent as GoogleScholarIcon } from "../components/icons/google-scholar.svg";
import { ReactComponent as TwitterIcon } from "../components/icons/x-twitter.svg";
import { ReactComponent as LinkedinIcon } from "../components/icons/linkedin.svg";

import "./about.css";

function About() {
  const [hovered, setHovered] = useState("");

  const playAudio = (event, audioUrl) => {
    ReactGA.event({
      category: "name_pronunciation",
      action: "play_name_audio",
      label: "name_pronunciation",
    });
    const audio = new Audio(audioUrl);
    audio.play();
    event.target.classList.add("active");
    audio.onended = () => {
      event.target.classList.remove("active");
    };
  };

  const trackButtonClick = (buttonName) => {
    ReactGA.event({
      category: "button",
      action: "click_" + buttonName,
      label: buttonName,
    });
  };

  return (
    <Row
      id="about"
      className="custom-section justify-content-center gx-5"
      style={{ marginBottom: "3rem" }}
    >
      <Col xs={6} sm={6} md={4}>
        <div className="d-flex flex-column align-items-center gap-3">
          <div style={{ width: "100%", position: "relative", aspectRatio: "1 / 1" }}>
            <AnimatePresence initial={false}>
              {!hovered ? (
                <motion.img
                  key="still"
                  src="daeun2.jpeg"
                  className="w-100 rounded"
                  style={{ position: "absolute", inset: 0, objectFit: "cover" }}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                />
              ) : (
                <motion.img
                  key="wave"
                  src="hi.jpeg"
                  className="w-100 rounded"
                  style={{ position: "absolute", inset: 0, objectFit: "cover" }}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                />
              )}
            </AnimatePresence>
          </div>
          <div className="icon-section">
            <a
              className="iconLink"
              target="_blank"
              href="/CV.pdf"
              rel="noreferrer"
              onClick={() => trackButtonClick("cv")}
            >
              <CVIcon />
            </a>
            <a
              className="iconLink"
              target="_blank"
              href="mailto:daeun.choi@kaist.ac.kr"
              rel="noreferrer"
              onClick={() => trackButtonClick("email")}
            >
              <MailIcon />
            </a>
            <a
              className="iconLink"
              target="_blank"
              href="https://scholar.google.com/citations?user=pI3S-WQAAAAJ"
              rel="noreferrer"
              onClick={() => trackButtonClick("google_scholar")}
            >
              <GoogleScholarIcon />
            </a>
            <a
              className="iconLink"
              target="_blank"
              href="https://twitter.com/daeun_choi_"
              rel="noreferrer"
              onClick={() => trackButtonClick("twitter")}
            >
              <TwitterIcon />
            </a>
            <a
              className="iconLink"
              target="_blank"
              href="https://www.linkedin.com/in/daeun-choi-1103/"
              rel="noreferrer"
              onClick={() => trackButtonClick("linkedin")}
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </Col>
      <Col sm={12} md={12} lg={8}>
        <div className="name-section">
          <h1
            onMouseEnter={() => setHovered("hi")}
            onMouseLeave={() => setHovered("")}
            style={{ cursor: "pointer" }}
          >
            Hi, I'm DaEun Choi!👋
          </h1>
          <div className="name-description">
            DaEun (다은; 多恩), is pronounced like 'Dawn' but longer, with a soft 'uh' in between.{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={(e) =>
                playAudio(e, "https://en-audio.howtopronounce.com/1616834028605eedeccf695.mp3")
              }
            >
              🔈
            </span>
          </div>
          {/* <h4>You can call me Diane.</h4> */}
        </div>
        <p className="pt-3">
          I am a 2nd-year Ph.D. student in the School of Computing at{" "}
          <a className="custom-link" href="https://kaist.ac.kr">
            KAIST
          </a>
          , working with{" "}
          <a className="custom-link" href="https://juhokim.com">
            Prof. Juho Kim
          </a>{" "}
          at{" "}
          <a className="custom-link" href="https://kixlab.org">
            KIXLAB
          </a>
          .
        </p>
        <p>
          My research interest is in <b>Human-Computer Interaction (HCI)</b>. I design interactions
          for generative AI systems that support human creativity by enabling the expression, reuse,
          and evolution of ideas across diverse creative processes.
        </p>
        {/* <p>
          <div className="about-highlight">
            <b>This summer, I'll be in Boston as a research intern at Adobe!</b>
            <br />
            Feel free to reach out if you're around ☀️
          </div>
        </p> */}
      </Col>
    </Row>
  );
}

export default About;
