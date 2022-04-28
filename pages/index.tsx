import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/hero";
import ShortCut from "../components/shortcut";
import Navigation from "../components/nav";
<<<<<<< HEAD
import Event from "../components/Event";
import Testimony from "../components/Testimony";
import Footer from "../components/Footer";
import Journey from '../components/journey';
=======
import Journey from "../components/journey";
import Event from "../components/Event";
import Testimony from "../components/Testimony";
import Footer from "../components/Footer";
import { Courses } from "../components/courses/courses";
import Map from "../components/Map.js";
import News from "../components/news-and-trends/news";
>>>>>>> d56a949c5af48e418af1af89418eadc08a38ab08

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Alluvium University</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className="">
          <Navigation />
        </section>
        <section>
          <Hero />
        </section>
        <section>
          <ShortCut />
        </section>
        <section>
          <Journey />
        </section>
        <section>
<<<<<<< HEAD
        <Event />
				<Testimony />
        </section>
=======
          <Courses />
        </section>
        <section className="pb-5 mb-5 w-100">
          <Map />
        </section>
        <section className="w-100 mb-5 pb-5">
        <News />
        </section>
        <section>
          <Event />
        </section>
        <section>
          <Testimony />
        </section>
        <section>
          <Footer />
        </section>
        {/* <Navigation />
        <Hero />
        <ShortCut /> */}
>>>>>>> d56a949c5af48e418af1af89418eadc08a38ab08
      </main>
    </div>
  );
};

export default Home;
