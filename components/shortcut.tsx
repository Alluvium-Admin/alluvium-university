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
          <Link href="">
            <a className="text-center no-underline hover:no-underline">
              <div className={styles.contents}>
                <Image src="/images/loc.svg" height={20} width={20} alt="" />
                <p>Our Campus</p>
              </div>
            </a>
          </Link>
          <div className={styles.bar}></div>
          <Link href="">
            <a className="text-center no-underline hover:no-underline">
              <div className={styles.contents}>
                <Image
                  src="/images/courses.svg"
                  height={20}
                  width={40}
                  alt=""
                />
                <p>Explore Courses</p>
              </div>
            </a>
          </Link>
          <div className={styles.bar}></div>
          <Link href="">
            <a className="text-center no-underline hover:no-underline">
              <div className={styles.contents}>
                <Image
                  src="/images/admission.svg"
                  height={20}
                  width={40}
                  alt=""
                />
                <p>Admissions</p>
              </div>
            </a>
          </Link>
          <div className={styles.bar}></div>
          <Link href="">
            <a className="text-center no-underline hover:no-underline">
              <div className={styles.contents}>
                <Image src="/images/about.svg" height={22} width={40} alt="" />
                <p>About us</p>
              </div>
            </a>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default ShortCut;
