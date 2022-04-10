import type { NextComponentType } from "next";
import styles from "../../styles/news.module.scss";
import NewsTrends from "./newsTrends";
import NewsHeader from "./newsHeader";
import { newsData } from "../../pages/api/newsData";

const News: NextComponentType = () => {
  return (
    <div className={styles.news}>
      <NewsHeader />
      <NewsTrends data={newsData} />
    </div>
  );
};

export default News;