import type { NextPage, NextComponentType } from "next";
import Layout from "../components/layout/layout";
import { useState } from "react";
import Head from "next/head";
import styles from "../styles/who-we-are.module.scss";
import Navigation from "../components/nav";
import Footer from "../components/Footer";
import Link from "next/link";

const MissionVission: NextComponentType = () => {
    return (
        <div>
            <div className={styles.titleSection}>
                <h2 className="text-center">Mission & Vision</h2>
            </div>
            <div className={styles.contentSection}>
                <h3>Mission Statement:</h3>
                <p>Get to No.1 Atlassian Engineer supplier with Equal Opportunities for All young people regardless of their background, race or gender</p>
            </div>
            <div className={styles.contentSection}>
                <h3>Vision Statement:</h3>
                <p>To set the highest standards for Atlassian Tools Engineering and Migrations by raising the Best Engineers and therefore becoming the No.1 supplier of Atlassian Engineers in the world</p>
            </div>
            <div className={styles.contentSection}>
                <h3>Our Core Values:</h3>
                <p>Our core values are the foundation of our growing culture and future.  Being a part of team means you like who we are and what we stand for.</p>
                <ul>
                    <li>Growth</li>
                    <li>Integrity</li>
                    <li>Transparency</li>
                    <li>Collaboration</li>
                    <li>Balance</li>
                </ul>
            </div>
        </div>
    )
}
const Overview: NextComponentType = () => {
    return (
        <div>
            <div className={styles.titleSection}>
                <h2 className="text-center">Overview</h2>
            </div>
            <div className={styles.contentSection}>
                <p>Alluvium is a software development and support lab providing applications and distributed engineers for Atlassian tools and DevOps engineers worldwide.</p>
                <p>We are an institution with diverse backgrounds and skills expanding its reach in the tech industry. In an industry such as this one,  where there is a low level of representation of African Engineers with an even smaller representation in our niche, we believe that solutions and products in the world lack an African voice.</p>
                <p>To contribute to solving this challenge, we are committed to training graduates in becoming skilled and valued consultants of the Atlassian community. To actualize our commitment, Alluvium University (AU) was set up to offer an opportunity for young promising Africans to pursue a career in the tech industry as engineers or consultants.</p>
                <p>AU gives a pathway to young people with the drive to be part of the growing diversity and inclusion journey in the tech industry. During your time at AU, you will undergo a three-year training which begins with the traineeship, then you will progress into apprenticeship and at last, the internship stage. At the end of the internship, you will graduate as a fully confident consultant/engineer able to independently support clients globally.</p>
                <p>It is our goal to instil in you the values we uphold in Alluvium by creating a transparent environment where you can grow and build the balance you seek to have in different areas of your life as you interact and work with different people in teams and as individuals. Putting all our effort and resources to achieve this, it is our belief that you will finish strong and maintain the principle of integrity that you acquire during your training.</p>
            </div>
        </div>
    )
}


const Home: NextPage = () => {
    const [currentView, setCurrentView] = useState('overview');

    return (
        <Layout head pageTitle="Who We Are" className={styles.container}>
            {/* <Head>
                <title>Who We Are | Alluvium University</title>
                <meta name="description" content="Alluvium University (AU) was set up to offer an opportunity for young promising Africans to pursue a career in the tech industry as engineers or consultants. AU gives a pathway to young people with the drive to be part of the growing diversity and inclusion journey in the tech industry." />
                <link rel="icon" href="/favicon.ico" />
            </Head> */}

            <main className={styles.main}>
                <section className="z-10">
                    <Navigation />
                </section>
                <section>
                    <div className={`position-relative container-fluid p-0 ${styles.welcomeImage}`}>
                        <div className={styles.welcomeIntro}>
                            <h1>Who We Are</h1>
                        </div>
                    </div>
                </section>
                <section>
                    <div className={`container-fluid ps-3 ps-md-5 ${styles.breadcrumbs}`}>
                        <div>
                            <Link href="/">
                                <a className="text-primary text-decoration-none">Home</a>
                            </Link>
                            <span className="mx-1">/</span>
                            <Link href="#">
                                <a>Who We Are</a>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="py-2">
                    <div className="container-fluid container-sm px-2 mx-auto row pb-5 py-md-5">
                        <div className="col-sm-3 p-0 pe-md-4 mb-5 mb-md-0">
                            <div className={`d-none d-sm-block list-group ${styles.menu}`} id="list-tab" role="tablist">
                                <a className={`list-group-item ${styles.menuTitle}`}>Menu</a>
                                <a className={`list-group-item list-group-item-action ${currentView == 'overview' ? styles.active : ''}`} onClick={() => setCurrentView('overview')} id="list-messages-list" data-toggle="list" href="#overview" role="tab" aria-controls="messages">Overview</a>
                                <a className={`list-group-item list-group-item-action ${currentView == 'mission&vision' ? styles.active : ''}`} onClick={() => setCurrentView('mission&vision')} id="list-profile-list" data-toggle="list" href="#missionvision" role="tab" aria-controls="profile">Mission & Vision</a>
                                {/* <a className={`list-group-item list-group-item-action ${currentView == 'contactus' ? styles.active : ''}`} onClick={() => setCurrentView('contactus')} id="list-settings-list" data-toggle="list" href="#" role="tab" aria-controls="settings">Contact Us</a> */}
                            </div>
                            <div className={`d-sm-none list-group list-group-horizontal ${styles.menu}`} id="list-tab" role="tablist">
                                <a className={`list-group-item ${styles.menuTitle}`}>Menu</a>
                                <a className={`list-group-item list-group-item-action ${currentView == 'overview' ? styles.active : ''}`} onClick={() => setCurrentView('overview')} id="list-messages-list" data-toggle="list" href="#overview" role="tab" aria-controls="messages">Overview</a>
                                <a className={`list-group-item list-group-item-action ${currentView == 'mission&vision' ? styles.active : ''}`} onClick={() => setCurrentView('mission&vision')} id="list-profile-list" data-toggle="list" href="#missionvision" role="tab" aria-controls="profile">Mission & Vision</a>
                                {/* <a className={`list-group-item list-group-item-action ${currentView == 'contactus' ? styles.active : ''}`} onClick={() => setCurrentView('contactus')} id="list-settings-list" data-toggle="list" href="#" role="tab" aria-controls="settings">Contact Us</a> */}
                            </div>
                        </div>
                        <div className="col-sm-9 ps-md-5">
                            <div className="tab-content" id="nav-tabContent">
                                <div className={`tab-pane fade ${currentView == 'mission&vision' ? 'show active' : ''}`} id="missionvision" role="tabpanel" aria-labelledby="list-home-list">
                                    <MissionVission />
                                </div>
                                <div className={`tab-pane fade ${currentView == 'overview' ? 'show active' : ''}`} id="overview" role="tabpanel" aria-labelledby="list-profile-list">
                                    <Overview />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <Footer />
                </section>
            </main>
        </Layout>
    );
};

export default Home;