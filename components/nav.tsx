import {
  Container,
} from "react-bootstrap";
// import type { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/nav.module.scss";

const Navigation = () => {
  return (
    <>
      <div className={`container-fluid p-0 ${styles.navCover}`}>
      <Container fluid className={`d-none d-md-block ${styles.coverTop}`}>
        <ul className="list-group list-group-horizontal px-0">
          <li className="list-group-item border-0">
            <Link href="/students-resources">
              <a className="text-white text-decoration-none">Students</a>
            </Link>
          </li>
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
      <Container fluid className="p-0 m-0">
        <nav className={`navbar navbar-expand-lg navbar-light bg-light ${styles.coverBottom}`}>
          <div className="container-fluid bg-white m-0 p-0">
            <Link href="/">
              <a className="navbar-brand text-decoration-none">
                <Image
                  src="/images/AULogoWhyte.svg"
                  height={70}
                  width={170}
                  alt="Alluvium University Logo"
                />
              </a>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${styles.navigation}`} id="navbarTogglerDemo02">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pb-5 pb-lg-0">
                <li className="nav-item">
                  <Link href="/">
                    <a className={styles.navData}>Home</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/who-we-are">
                    <a className={styles.navData}>Who we are</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/#courses">
                    <a className={styles.navData}>Courses</a>
                  </Link>
                </li>
                {/* <li className={`nav-item dropdown`}>
                  <a className={`nav-link dropdown-toggle ${styles.navData}`} href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Courses
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                    <li className="dropdown-item">Core Business</li>
                    <li className="dropdown-item">Core Data</li>
                    <li className="dropdown-item">Data Center</li>
                    <li><hr className="dropdown-divider" /></li>
                    <li className="dropdown-item">Cloud</li>
                  </ul>
                </li> */}
                <li className="nav-item">
                  <Link href="/events">
                    <a className={styles.navData}>Events</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/students-resources">
                    <a className={`d-md-none ${styles.navData}`}>Students</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact-us">
                    <a className={styles.navData}>Contact Us</a>
                  </Link>
                </li>
                <li className="nav-item mt-3 ms-2 ms-lg-0 mt-lg-0">
                  {/* <Link href="/contact-us"> */}
                    <a href="http://growwithus.alluvium.net/showing-interest" rel="noreferrer" target="_blank" className={styles.button}>Apply</a>
                  {/* </Link> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <Navbar className={styles.coverBottom} collapseOnSelect bg="transparent" expand="lg" variant="light">
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
          <Navbar.Collapse id="responsive-navbar-nav" className={`navigation bg-danger ${styles.navigation}`}>
            <Nav className={`ms-auto ${styles.nav}`}>
              <Link href="/">
                <a className={styles.navData}>Home</a>
              </Link>
              <Link href="/who-we-are">
                <a className={styles.navData}>Who we are</a>
              </Link>
              <Dropdown as={NavItem}>
                <Dropdown.Toggle className={styles.navData} as={NavLink}>
                  Courses
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Core Business</Dropdown.Item>
                  <Dropdown.Item>Core Data</Dropdown.Item>
                  <Dropdown.Item>Data Center</Dropdown.Item>
                  <NavDropdown.Divider />
                  <Dropdown.Item>Cloud</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Link href="/events">
                <a className={styles.navData}>Events</a>
              </Link>
              <Link href="/students">
                <a className={`d-md-none ${styles.navData}`}>Students</a>
              </Link>
              <Link href="/contact-us">
                <a className={styles.navData}>Contact Us</a>
              </Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                <Button className={styles.button}>Apply</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </div>
        </Navbar> */}
      </Container>
      </div>
    </>
  );
};

export default Navigation;
