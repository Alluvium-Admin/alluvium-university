import type { NextComponentType } from "next";
import styles from "../../styles/newsHeader.module.scss";
import NewsLink from "./link";

const NewsHeader: NextComponentType = () => {
  return (
    <div className={styles.newsheader}>
      <label className={styles.label}>News and Trends</label>
      {/* <NewsLink
        className={styles.headerlink}
        href={"default-asp"}
        title={"Read More News"}
        src={"/images/arrow.svg"}
      /> */}
      <hr></hr>
    </div>
  );
};

export default NewsHeader;
