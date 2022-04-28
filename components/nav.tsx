import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Dropdown,
  NavLink,
  NavItem,
} from "react-bootstrap";
import type { NextComponentType } from "next";
import Image from "next/image";
import styles from "../styles/nav.module.scss";

const Navigation = () => {
  return (
    <>
      <Container fluid className={`d-none d-md-block ${styles.coverTop}`}>
        <ul className="list-group list-group-horizontal px-0">
          <li className="list-group-item border-0">Students</li>
          {/* <li className="list-group-item border-0">Alumni</li> */}
          {/* <li className="list-group-item border-0">Faculty & Staff</li> */}
          <li className="list-group-item border-0 pe-0">
            <div className="d-flex items-center">
              <Image src={`/images/search.svg`} className="" height={14} width={14} alt={'searchIcon'} />
              <input type="search" disabled placeholder="Search" />
            </div>
          </li>
        </ul>
      </Container>
      <Container fluid>
        <Navbar className=""  collapseOnSelect bg="transparent" expand="lg" variant="light">
          <div className={styles.coverBottom}>
            <Navbar.Brand href="#home" className="brand">
              <Image
                src="/images/AULogoWhyte.svg"
                height={70}
                width={170}
                alt="Alluvium University Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="navigation">
              <Nav className="ms-auto">
                <Nav.Link className={styles.navData} href="#features">
                  Home
                </Nav.Link>
                <Nav.Link className={styles.navData} href="#pricing">
                  Who we are
                </Nav.Link>
                {/* <NavDropdown className={styles.navData} title="Courses" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
                <Dropdown as={NavItem}>
                  <Dropdown.Toggle className={styles.navData} as={NavLink}>
                    Courses
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Core Business</Dropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <Dropdown.Item>Core Data</Dropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <Dropdown.Item>Data Center</Dropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <Dropdown.Item>Cloud</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Link className={styles.navData} href="#features">
                  Campus
                </Nav.Link>
                <Nav.Link className={styles.navData} href="event">
                  Events
                </Nav.Link>
                <Nav.Link className={styles.navData} href="contact">Contact Us
                </Nav.Link>
                <Nav.Link className={`d-md-none ${styles.navData}`} href="#pricing">
                  Students
                </Nav.Link>
                  
              </Nav>
              <Nav>
                <Nav.Link eventKey={2} href="#memes">
                  <Button className={styles.button}>Apply</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </Container>
    </>
  );
};

export default Navigation;
