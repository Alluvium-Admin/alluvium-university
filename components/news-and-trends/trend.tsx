import type { NextPage } from "next";
import { INewsData } from "../../pages/api/newsData";
import styles from "../../styles/trend.module.scss";
import Image from "next/image";
import NewsLink from "./link";

interface IProps {
  trendNews: INewsData;
}
const Trend: NextPage<IProps> = (props: IProps) => {
  const { trendNews } = props;
  const { date, image, title } = trendNews;
  return (
    <div className={styles.trend}>
      <div className={styles.imageStyle}>
        <Image src={image} height={228} width={228} alt="Trends" />
      </div>
      <div className={styles.trendContent}>
        <span className={styles.date}>{date}</span>
        <span className={styles.title}>{title}</span>
        <NewsLink
          className={styles.headerlink}
          title={"Read More"}
          src={"/images/arrow.svg"}
          href={"default-asp"}
        />
      </div>
    </div>
  );
};

export default Trend;
