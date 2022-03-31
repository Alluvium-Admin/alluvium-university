import { Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import type { NextComponentType } from "next";
import styles from "../styles/shortCut.module.scss";

const ShortCut: NextComponentType = () => {
  return (
    <>
      <Container fluid className={styles.cover}>
        <div className={styles.main}>
          <div className="d-flex">
            <Link href="">
              <a className="text-center no-underline">
                <Image src="/images/loc.svg" height={40} width={40} alt="" />
                <p>Our Campus</p>
              </a>
            </Link>
          </div>
          <div className={styles.bar}>
          </div>
          <div className="d-flex">
            <Link href="">
              <a className="text-center no-underline">
                <Image src="/images/courses.svg" height={40} width={80} alt="" />
                <p>Explore Courses</p>
              </a>
            </Link>
          </div>
          <div className={styles.bar}>
          </div>
          <div className="d-flex">
            <Link href="">
              <a className="text-center no-underline">
                <Image src="/images/admission.svg" height={40} width={80} alt="" />
                <p>Admissions</p>
              </a>
            </Link>
          </div>
          <div className={styles.bar}>
          </div>
          <div className="d-flex">
            <Link href="">
              <a className="text-center no-underline">
                <Image src="/images/about.svg" height={40} width={80} alt="" />
                <p>About us</p>
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShortCut;
