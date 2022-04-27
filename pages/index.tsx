import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/hero";
import ShortCut from "../components/shortcut";
import Navigation from "../components/nav";
import Journey from "../components/journey";
import Event from "../components/Event";
import Testimony from "../components/Testimony";
import Footer from "../components/Footer";
import { Courses } from "../components/courses/courses";
import Map from "../components/Map.js";
import News from "../components/news-and-trends/news";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Alluvium University</title>
        <meta name="description" content="Alluvium University (AU) was set up to offer an opportunity for young promising Africans to pursue a career in the tech industry as engineers or consultants. AU gives a pathway to young people with the drive to be part of the growing diversity and inclusion journey in the tech industry." />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
              <link rel="manifest" href="/site.webmanifest"></link>
            </Head>

            <main className={styles.main}>
              <section className="">
                <Navigation />
              </section>
              <section>
                <Hero />
              </section>
              {/* <section>
          <ShortCut />
        </section> */}
              <section>
                <Journey />
              </section>
              <section id="courses">
                <Courses />
              </section>
              <section id='map' className="pb-5 mb-5 w-100">
                <Map />
              </section>
              <section id="news" className="w-100 mb-5 pb-5">
                <News />
              </section>
              {/* <section id='event'>
          <Event />
        </section> */}
              <section id="testimony">
                <Testimony />
              </section>
              <section>
                <Footer />
              </section>
              {/* <Navigation />
        <Hero />
        <ShortCut /> */}
            </main>
          </div>
          );
};

          export default Home;
