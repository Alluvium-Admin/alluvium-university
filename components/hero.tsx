import { Container } from "react-bootstrap";
import type { NextComponentType } from "next";
import styles from '../styles/hero.module.scss';

const Hero: NextComponentType = () => {
    return (
        <>
        <Container fluid className={styles.cover}>
            <div>
                <h1>Are You Ready to <u className="">Grow</u>?</h1>
                <div className="d-flex align-items-center">
                <h3 className="me-2">Alluvium = </h3> 
                <div className={styles.galleryViewer}>
                    <div className={styles.slider}>
                        <h2>Growth</h2>
                        <h2>Integrity</h2>
                        <h2>Transparency</h2>
                        <h2>Collaboration</h2>
                        <h2>Balance</h2>
                    </div>
                </div>
                </div>
                <button className={styles.button}>Join In</button>
            </div>
        </Container>
        </>
    )
}

export default Hero;