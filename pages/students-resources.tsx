import type { NextPage, NextComponentType } from "next";
// import { useState } from "react";
import Head from "next/head";
import styles from "../styles/students-resources.module.scss";
import Navigation from "../components/nav";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from 'next/image';

const MainContent: NextComponentType = () => {
    return (
        <div>
            <div className={styles.titleSection}>
                <h2 className="">Students Resources</h2>
                <p>Below are frequently-used links for incoming and current students. If you&apos;d like to request a link be added, please send an email to <a className="text-primary text-decoration-underline" href="mailto:alluviumuniversity@co.uk">alluviumuniversity@co.uk</a>.</p>
            </div>
            <div className={styles.contentSection}>
                <h3>Popular Links</h3>
                <div className={styles.contents}>
                    <div className={styles.content}>
                        <div className={styles.image}>
                            <Image loading="eager" width={104} height={104} src="/images/students/moodle.png" />
                        </div>
                        <div className="ps-md-4">
                            <h4><a href="#">Login to LMS</a></h4>
                            <p>Currents students can login into their students&apos; account</p>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.image}>
                            <Image loading="eager" width={104} height={104} src="/images/students/app.png" />
                        </div>
                        <div className="ps-md-4">
                            <h4><a href="#">Students Application</a></h4>
                            <p>Learn how to apply as a student</p>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.image}>
                            <Image loading="eager" width={104} height={104} src="/images/students/calender.png" />
                        </div>
                        <div className="ps-md-4">
                            <h4><a href="#">Academic Calendar</a></h4>
                            <p>Currents students can login into their students&apos; account</p>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.image}>
                            <Image loading="eager" width={104} height={104} src="/images/students/courses.png" />
                        </div>
                        <div className="ps-md-4">
                            <h4><a href="#">Courses</a></h4>
                            <p>Check out all of the available courses</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const SideBar: NextComponentType = () => {
    return (
        <div className={styles.sideBar}>
            <div className={styles.sideTitle}>
                <h2 className="text-center">Important Information</h2>
            </div>
            <hr className="my-3" />
            <div className={styles.sideContent}>
                <ul>
                    <li><a href="#">Campus Safety</a></li>
                    <li><a href="#">Campus Covid 19 Rules</a></li>
                    <li><a href="#">Campus Safety</a></li>
                    <li><a href="#">Campus Covid 19 Rules</a></li>
                </ul>
            </div>
            <hr className="my-3" />
            <div className={styles.sideFooter}>
                <h5>Follow Us:</h5>
                <ul className="" style={{ display: 'flex' }}>
                    <li className=""><a href="https://twitter.com/alluviumhq?s=08" rel="noreferrer" target="_blank"><Image loading="eager" width={31.8} height={31.8} src="/images/socials/twitter.svg" alt="twitter" /></a></li>
                    <li className=""><a href="https://www.facebook.com/alluviumhq/?ti=as" rel="noreferrer" target="_blank"><Image loading="eager" width={31.8} height={31.8} src="/images/socials/facebook.svg" alt="facebook" /></a></li>
                    <li className=""><a href="https://www.linkedin.com/company/alluvium-hq/" rel="noreferrer" target="_blank"><Image loading="eager" width={31.8} height={31.8} src="/images/socials/linkedin.svg" alt="linkedin" /></a></li>
                    <li className=""><a href="https://www.linkedin.com/company/alluvium-hq/" rel="noreferrer" target="_blank"><Image loading="eager" width={31.8} height={31.8} src="/images/socials/instagram.svg" alt="linkedin" /></a></li>
                </ul>
            </div>
        </div>
    )
}

const Students: NextPage = () => {
    // const [currentView, setCurrentView] = useState('overview');

    return (
        <div className={styles.container}>
            <Head>
                <title>Students Resources | Alluvium University</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <section className="z-10">
                    <Navigation />
                </section>
                <section>
                    <div className={`position-relative container-fluid p-0 ${styles.welcomeImage}`}>
                        <div className={styles.welcomeIntro}>
                            <h1>Students Resources</h1>
                        </div>
                    </div>
                </section>
                <section>
                    <div className={`container-fluid ps-3 ps-md-5 ${styles.breadcrumbs}`}>
                        <div>
                            <Link href="/">
                                <a className="text-primary">Home</a>
                            </Link>
                            <span className="mx-1">/</span>
                            <Link href="">
                                <a>Students Resources</a>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="py-2 mb-5">
                    <div className="container-fluid container-sm px-2 mx-auto row pb-5 py-md-5">
                        <div className="col-sm-9 p-0 pe-md-4 mb-5 mb-md-0">
                            <MainContent />
                        </div>
                        <div className="col-sm-3">
                            <SideBar />
                        </div>
                    </div>
                </section>
                <section>
                    <Footer />
                </section>
            </main>
        </div>
    );
};

export default Students;
