import type { NextPage } from "next";
import { INewsData } from "../../pages/api/newsData";
import styles from "../../styles/newsTrends.module.scss";
import ActiveTrend from "./activeTrend";
import Trendlist from "./trendList";

interface IProps {
  data: INewsData[];
}

const NewsTrends = (props: IProps) => {
  const { data } = props;

  return (
    <div className={styles.newstrends}>
      <ActiveTrend activeNews={data[0]} />
      <Trendlist trends={data.slice(1)} />
    </div>
  );
};

export default NewsTrends;
