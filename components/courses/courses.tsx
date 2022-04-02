import { NextComponentType } from "next";
import { ElectiveCourses } from "./elective-courses";
import { MandatoryCourses } from "./mandatory-courses";
import styles from "../../styles/courses.module.scss";

export const Courses: NextComponentType = () => {
  return (
    <>
      <div className={styles.courses}>
        <label className={styles.label}>Explore Our Courses</label>
        <MandatoryCourses />
        <ElectiveCourses />
      </div>
    </>
  );
};
