import { NextComponentType } from "next";
import styles from "../../styles/elective-courses.module.scss";
import Image from "next/image";
import { getCurriculumModalProps, ICurriculumModal } from "./curriculum";
import { CurriculumModal } from "../modal";
import { useState } from "react";

const imageProps = {
  height: 92,
  width: 92,
  alt: "alluvium",
};

export const ElectiveCourses = () => {
  const [modalProps, setModalProps] = useState<ICurriculumModal>({} as any);
  const [showModal, setShowModal] = useState<boolean>(false);

  const onCurriculumClicked = (title: string) => {
    const props = getCurriculumModalProps(title);
    setModalProps(props);
    setShowModal(true);
  };

  return (
    <>
      <div className={styles.electives}>
        <label className={styles.label}>Electives</label>
        <div className={styles.electiveCoursesContent}>
          <div className={styles.courses}>
            <Image loading="eager" src="/images/data-center.svg" alt="data center" width={92} height={92} />
            <span className={styles.courseTitle}>Data Center</span>
            <span
              onClick={() => onCurriculumClicked("Data Center")}
              className={styles.curriculum}
            >
              View Curriculum
            </span>
          </div>
          <div className={styles.courses}>
            <Image loading="eager" src="/images/cloud.svg" alt="cloud" width={92} height={92} />
            <span className={styles.courseTitle}>Cloud</span>
            <span
              onClick={() => onCurriculumClicked("Cloud")}
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
