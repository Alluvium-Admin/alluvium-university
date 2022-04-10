import type { NextPage } from "next";
import { INewsData } from "../../pages/api/newsData";
import styles from "../../styles/trendlist.module.scss";
import Trend from "./trend";

interface IProps {
  trends: INewsData[];
}

const Trendlist: NextPage<IProps> = (props: IProps) => {
  const { trends } = props;

  return (
    <div className={styles.trendlist}>
      {trends.map((value, index) => {
        return (
          <div key={index}>
            <Trend trendNews={value} /> {index < trends.length - 1 && <hr />}
          </div>
        );
      })}
    </div>
  );
};

export default Trendlist;