export interface INewsData {
  id: number;
  image: string;
  date: string;
  title: string;
  description?: string;
  link: string;
}

const description =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient ";

export const newsData: INewsData[] = [
  {
    id: 0,
    image: "/images/newsImage.svg",
    date: "21 May, 2022",
    title: "Alluvium University Launches",
    description,
    link: "default-asp",
  },
  {
    id: 1,
    image: "/images/newsImageSmall.svg",
    date: "21 May, 2022",
    title: "Alluvium University Launches",
    description,
    link: "default-asp",
  },
  {
    id: 2,
    image: "/images/newsImageSmall.svg",
    date: "21 May, 2022",
    title: "Alluvium University Launches",
    description,
    link: "default-asp",
  },
  {
    id: 3,
    image: "/images/newsImageSmall.svg",
    date: "21 May, 2022",
    title: "Alluvium University Launches",
    description,
    link: "default-asp",
  },
];
