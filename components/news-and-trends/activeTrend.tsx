import type { NextPage } from "next";
import { INewsData } from "../../pages/api/newsData";
import styles from "../../styles/activetrends.module.scss";
import Image from "next/image";
import NewsLink from "./link";

interface IProps {
  activeNews: INewsData;
}
const ActiveTrend = (props: IProps) => {
  const { activeNews } = props;
  const { id, date, description, link, image, title } = activeNews;
  return (
    <div className={styles.activetrends}>
      <Image
        className={styles.activeImage}
        src={image}
        height={552}
        width={617}
        layout="responsive"
        alt=""
      />
      <span className={styles.newsDate}>{date}</span>
      <span className={styles.newstitle}>{title}</span>
      <span className={styles.newsDescription}>{description}</span>
      <NewsLink
        className={styles.headerLink}
        title={"Read More"}
        src={"/images/arrow.svg"}
        href={link}
      />
    </div>
  );
};

export default ActiveTrend;
