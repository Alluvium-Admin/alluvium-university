export interface INewsData {
  id: number;
  image: string;
  date: string;
  title: string;
  description?: string;
  link: string;
}

const description =
  "LEARN AND EARN with us and take a step towards an exciting career in a programming language";

export const newsData: INewsData[] = [
  {
    id: 0,
    image: "/images/news-trends/First flyer.jpg",
    date: "21 May, 2022",
    title: "LEARN AND EARN with us",
    description,
    link: "https://www.linkedin.com/posts/alluvium-university_alluviumuniversity-activity-6924740897343496193-Wx6m?utm_source=linkedin_share&utm_medium=member_desktop_web",
  },
  {
    id: 1,
    image: "/images/news-trends/Second flyer.jpg",
    date: "21 May, 2022",
    title: "Alluvium University Launches",
    description,
    link: "default-asp",
  },
  {
    id: 2,
    image: "/images/news-trends/Second flyer.jpg",
    date: "21 May, 2022",
    title: "Alluvium University Launches",
    description,
    link: "default-asp",
  },
  {
    id: 3,
    image: "/images/news-trends/Second flyer.jpg",
    date: "21 May, 2022",
    title: "Alluvium University Launches",
    description,
    link: "default-asp",
  },
];
