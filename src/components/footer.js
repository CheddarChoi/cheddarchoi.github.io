import "./footer.scss";
import { ReactComponent as GithubIcon } from "../components/icons/github.svg";

const Footer = (props) => {
  return (
    <div className="footer-container">
      <div className="custom-container footer-content">
        <div className="row align-items-center pb-3" style={{ fontSize: "0.75rem" }}>
          <div className="col-4 text-start">
            <div>© 2025 Created by DaEun Choi</div>
          </div>
          <div className="col-4 text-center">
            <a
              target="_blank"
              href="https://github.com/CheddarChoi/cheddarchoi.github.io"
              rel="noreferrer"
            >
              <GithubIcon style={{ width: "20px", height: "20px" }} />
            </a>
          </div>
          <div className="col-4 text-end">
            <div>Last Updated: Oct 4, 2025</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
