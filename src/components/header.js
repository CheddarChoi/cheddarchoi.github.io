import { Nav, Navbar } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = (props) => {
  return (
    <Navbar
      bg="transparent"
      expand="lg"
      variant={props.darkMode ? "dark" : "light"}
      className="py-4 position-relative"
    >
      <div className="custom-container d-flex align-items-center justify-content-between">
        <Navbar.Brand href="/">
          <Image
            roundedCircle
            style={{ height: "40px", marginRight: "10px" }}
            src="192x192.jpg"
            alt="illustrated version profile"
          />
          <b>DaEun Choi</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="#publications">Publications</Nav.Link>
            <Nav.Link>
              {props.darkMode ? (
                <FontAwesomeIcon
                  icon={faSun}
                  style={{ cursor: "pointer" }}
                  onClick={() => props.setDarkMode(false)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faMoon}
                  style={{ cursor: "pointer" }}
                  onClick={() => props.setDarkMode(true)}
                />
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
