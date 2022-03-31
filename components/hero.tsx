import { Container } from "react-bootstrap";
import type { NextComponentType } from "next";
import styles from "../styles/hero.module.scss";
import { useEffect, useCallback, useState } from "react";

const cardItems = [
  "Growth",
  "Integrity",
  "Transparency",
  "Collaboration",
  "Balance",
];

function determineClasses(indexes: {
    previousIndex: number,
    currentIndex: number,
    nextIndex: number,
  }, cardIndex: number) {

  if (indexes) {
    if (indexes.currentIndex === cardIndex) {
      return "cardActive";
    } else if (indexes.nextIndex === cardIndex) {
      return "cardNext";
    } else if (indexes.previousIndex === cardIndex) {
      return "cardPrev";
    }
    return "active";
  }
  return "active";
}


const Hero: NextComponentType = () => {
    const [rootIndexes, setRootIndexes] = useState({
        previousIndex: 0,
        currentIndex: 0,
        nextIndex: 1,
      });
  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1,
  });

  const handleCardTransition = useCallback(() => {
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex >= cardItems.length - 1) {
      setIndexes({
        previousIndex: cardItems.length - 1,
        currentIndex: 0,
        nextIndex: 1,
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === cardItems.length
            ? 0
            : prevState.currentIndex + 2,
      }));
    }
  }, [indexes.currentIndex]);

  useEffect(() => {
    const transitionInterval = setInterval(() => {
      handleCardTransition();
    }, 3000); // The interval value could also be a prop
    setRootIndexes(indexes);
    // Clear the interval when the component unmounts!
    return () => clearInterval(transitionInterval);
  }, [handleCardTransition, indexes]);

  return (
    <>
      <Container fluid className={styles.cover}>
        <div>
          <h1>
            Are You Ready to <u className="">Grow</u>?
          </h1>
          <div className="d-flex align-items-center">
            <h3 className="me-2">Alluvium = </h3>
            <div className={styles.galleryViewer}>
              <div className={styles.slider}>
                {cardItems.map((info, index) => (
                <h2 key={index}
                className={`${styles.textAnimate} ${styles[determineClasses(rootIndexes, index)]}`}
                // onClick={() => manuallyHandleCardTransition(index)}
                >{info}</h2>
                ))}
              </div>
            </div>
          </div>
          <button className={styles.button}>Join In</button>
        </div>
      </Container>
    </>
  );
};

export default Hero;
