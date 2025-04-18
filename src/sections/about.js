import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Image, Row } from "react-bootstrap";
import ReactGA from "react-ga4";

import { faGithubSquare, faTwitterSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

import "./about.css";

function About() {
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
      style={{ marginBottom: "4rem" }}
    >
      <Col xs={6} sm={6} md={4}>
        <div className="d-flex flex-column align-items-center gap-3">
          <Image className="w-100" rounded src="daeun.jpg" alt="illustrated version profile" />
          <div className="icon-section">
            <a
              className="iconLink"
              target="_blank"
              href="/CV.pdf"
              rel="noreferrer"
              onClick={() => trackButtonClick("cv")}
            >
              <i class="ai ai-cv-square fa-2x"></i>
            </a>
            <a
              className="iconLink"
              target="_blank"
              href="mailto:daeun.choi@kaist.ac.kr"
              rel="noreferrer"
              onClick={() => trackButtonClick("email")}
            >
              <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" />
            </a>
            <a
              className="iconLink"
              target="_blank"
              href="https://scholar.google.com/citations?user=pI3S-WQAAAAJ"
              rel="noreferrer"
              onClick={() => trackButtonClick("google_scholar")}
            >
              <i className="ai ai-google-scholar-square fa-2x"></i>
            </a>
            <a
              className="iconLink"
              target="_blank"
              href="https://github.com/CheddarChoi/"
              rel="noreferrer"
              onClick={() => trackButtonClick("github")}
            >
              <FontAwesomeIcon icon={faGithubSquare} size="2x" />
            </a>
            <a
              className="iconLink"
              target="_blank"
              href="https://twitter.com/daeun_choi_"
              rel="noreferrer"
              onClick={() => trackButtonClick("twitter")}
            >
              <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
            </a>
            <a
              className="iconLink"
              target="_blank"
              href="https://www.linkedin.com/in/daeun-choi-1103/"
              rel="noreferrer"
              onClick={() => trackButtonClick("linkedin")}
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </Col>
      <Col sm={12} md={12} lg={8}>
        <div className="name-section">
          <h1>Hi, I'm DaEun Choi!👋</h1>
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
          I am a 2nd-year Ph.D. student at{" "}
          <a className="custom-link" href="https://kaist.ac.kr">
            KAIST
          </a>
          , working with{" "}
          <a className="custom-link" href="https://juhokim.com">
            Prof. Juho Kim
          </a>{" "}
          at{" "}
          <a className="custom-link" href="https://kixlab.org">
            KIXLAB (KAIST Interaction Lab)
          </a>
          . My research interest is in Human-Computer Interaction (HCI), especially in designing
          AI-infused creativity supporting tools.
        </p>
        <p>
          <div className="about-highlight">
            <b>This summer, I'll be in Boston as a research intern at Adobe!</b>
            <br />
            Feel free to reach out if you're around ☀️
          </div>
        </p>
      </Col>
    </Row>
  );
}

export default About;
