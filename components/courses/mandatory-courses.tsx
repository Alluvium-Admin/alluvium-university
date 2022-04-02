import { NextComponentType } from "next";
import styles from "../../styles/mandatory-courses.module.scss";
import Image from "next/image";
import { getCurriculumModalProps, ICurriculumModal } from "./curriculum";
import { CurriculumModal } from "../modal";
import { useState } from "react";

const imageProps = {
  height: 92,
  width: 92,
  alt: "alluvium",
};
export const MandatoryCourses: NextComponentType = () => {
  const [modalProps, setModalProps] = useState<ICurriculumModal>({} as any);
  const [showModal, setShowModal] = useState<boolean>(false);

  const onCurriculumClicked = (title: string) => {
    const props = getCurriculumModalProps(title);
    setModalProps(props);
    setShowModal(true);
  };
  return (
    <>
      <div className={styles.mandatoryCourses}>
        <label className={styles.label}>Mandatory Courses</label>
        <div className={styles.mandatoryCoursesContent}>
          <div className={styles.courses}>
            <Image src="/images/core-business.svg" {...imageProps} />
            <span className={styles.courseTitle}>Core Business</span>
            <span
              onClick={() => onCurriculumClicked("Core Business")}
              className={styles.curriculum}
            >
              View Curriculum
            </span>
          </div>
          <div className={styles.courses}>
            <Image src="/images/core-data.svg" {...imageProps} />
            <span className={styles.courseTitle}>Core Data</span>
            <span
              onClick={() => onCurriculumClicked("Core Data")}
              className={styles.curriculum}
            >
              View Curriculum
            </span>
          </div>
        </div>
      </div>
      <CurriculumModal
        {...modalProps}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};
