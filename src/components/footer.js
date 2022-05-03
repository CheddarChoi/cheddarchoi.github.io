import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
  return (
    <>
      <div className="custom-container py-5 text-center">
        <hr />
        <div className="mb-1">© 2022 Created by DaEun Choi</div>
        <a
          className="icon-link"
          target="_blank"
          href="https://github.com/CheddarChoi/cheddarchoi.github.io"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </div>
    </>
  );
};

export default Footer;
