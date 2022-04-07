import { Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import type { NextComponentType } from "next";
import styles from "../styles/journey.module.scss";
import { useEffect, useState, useCallback } from "react";

const data = [
  {
    title: "Onboarding",
    summary:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    image: "welcome.svg",
  },
  {
    title: "Traineeship (3 months)",
    summary:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    image: "train.svg",
  },
  {
    title: "Apprenticeship (9 months)",
    summary:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    image: "apprenticeship.svg",
  },
  {
    title: "Internship (2 years)",
    summary:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    image: "intern.svg",
  },
  {
    title: "Consultancy (Permanent)",
    summary:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    image: "consult.svg",
  },
];

const Journey: NextComponentType = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleTransition = useCallback(() => {
    if (currentIndex === data.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prec) => prec + 1);
    }
  }, [currentIndex]);

  const findPrev = (index: number) => {
    let prev = currentIndex ? data.length - 1 : currentIndex - 1;
    return prev == index;
  };

  useEffect(() => {
    const TransInterval = setInterval(() => {
      handleTransition();
    }, 3000);
    //   alert(currentIndex);
    return () => clearInterval(TransInterval);
  }, [handleTransition]);

  return (
    <>
      <Container fluid className={styles.cover}>
        <h1 className="text-black mb-3">Start Here</h1>
        <div className={styles.main}>
          <div className={`p-4 ${styles.mainContents}`}>
            <Image
              src={`/images/${data[currentIndex].image}`}
              width={518}
              className=""
              //   width={304.7}
              //   height={332.9}
              height={566}
              alt=""
            />
          </div>
          <div className={`d-flex ${styles.mainContents}`}>
            {/* <div>
              {data.map((info, index) => {
                return (
                  <div key={index} className={styles.longBar}>
                    <div
                      className={`${styles.shortBar} ${
                        currentIndex == index ? styles.shortBarActive : ""
                      } ${index === (currentIndex-1) ? styles.shortBarPrev : ""}`}
                    ></div>
                  </div>
                );
              })}
            </div> */}
            <div className={styles.contents}>
              {data.map((info, index) => (
                <div
                  key={index}
                  className={`text-start mb-4 ${styles.content}`}
                >
                  <div key={index} className={styles.longBar}>
                    <div
                      className={`${styles.shortBar} ${
                        currentIndex == index ? styles.shortBarActive : ""
                      } ${index == (currentIndex-1) ? styles.shortBarPrev : ""}`}
                    ></div>
                  </div>

                  <div>
                    <div
                      
                      className={`mb-0 px-4 pb-0`}
                    >
                      <p className={styles.stage} onClick={() => setCurrentIndex(index)}>Stage {index}</p>
                      <h2 className={styles.title}>{info.title}</h2>
                    </div>
                    <div className={`p-4 pb-0 ${styles.summaryHead}`}>
                      <div
                        className={`${styles.summary} ${
                          currentIndex === index
                            ? styles.summaryActive
                            : styles.summaryInactive
                        }`}
                      >
                        <p>{info.summary}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Journey;