import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./footer.css";

const Footer = (props) => {
  return (
    <div className="footer-container">
      <div className="custom-container footer-content">
        <div className="row align-items-center pb-3" style={{ fontSize: "0.75rem" }}>
          <div className="col-4 text-start">
            <div>© 2023 Created by DaEun Choi</div>
          </div>
          <div className="col-4 text-center">
            <a
              className="iconLink"
              target="_blank"
              href="https://github.com/CheddarChoi/cheddarchoi.github.io"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
          </div>
          <div className="col-4 text-end">
            <div>Last Updated: Mar 9, 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
