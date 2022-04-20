import type { NextPage } from "next";
import Image from "next/image";

interface IProps {
  className: string;
  title: string;
  src: string;
  href: string;
}

const NewsLink = (props: IProps) => {
  const { className, title, src, href } = props;
  return (
    <span className={className}>
      <a href={href}>
        {title}
        <span style={{ paddingLeft: "10px" }}>
          <Image src={src} height={12} width={8} alt="" />
        </span>
      </a>
    </span>
  );
};

export default NewsLink;
