import type { NextPage, NextComponentType } from "next";
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
                <ol type="1">
                    <li>Growth</li>
                    <li>Integrity</li>
                    <li>Transparency</li>
                    <li>Collaboration</li>
                    <li>Balance</li>
                </ol>
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
                <p>It was the summer of 2016, Taiwo, formerly of the Big Four, had been brought into a large UK Bank digital transformation programme to consolidate their project management tool estate into one consolidated Atlassian toolset, was joined by Wale, also formerly of the Big Four, to establish an Agile Way of Working. The synergy was instant and long-lasting.</p>
                <p>The tools supported the controls, deployment and scaling of the new way of working while the methodology utilised and maximised the Atlassian toolset.</p>
                <p>We had to consolidate data and configuration from several third-party applications, a couple of Jira instances to a single new Jira instance. Same for document storage and dev-ops tools. All the while building, integrating to, and reporting from a new data lake.</p>
                <p>After the success of that programme, we went to repeat a similar delivery for one of the UK's biggest telecom providers. We have since delivered some of the largest Atlassian tools Consolidation and accompanying Administration, Engineering, Integration, and long-term Support of the Atlassian products for all ways of working. We routinely put back into the customers' pockets, 15 – 45% of their annual licence costs, by consolidating and scaling their use of Jira, Confluence, Bitbucket and other Atlassian products, from multiple Atlassian and third-party applications.</p>
            </div>
        </div>
    )
}

const Home: NextPage = () => {
    const [currentView, setCurrentView] = useState<string>('overview');
    return (
        <div className={styles.container}>
            <Head>
                <title>Who We Are | Alluvium University</title>
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
                            <h1>Who We Are</h1>
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
                                <a className={`list-group-item list-group-item-action ${currentView == 'contactus' ? styles.active : ''}`} onClick={() => setCurrentView('contactus')} id="list-settings-list" data-toggle="list" href="#" role="tab" aria-controls="settings">Contact Us</a>
                            </div>
                            <div className={`d-sm-none list-group list-group-horizontal ${styles.menu}`} id="list-tab" role="tablist">
                                <a className={`list-group-item ${styles.menuTitle}`}>Menu</a>
                                <a className={`list-group-item list-group-item-action ${currentView == 'overview' ? styles.active : ''}`} onClick={() => setCurrentView('overview')} id="list-messages-list" data-toggle="list" href="#overview" role="tab" aria-controls="messages">Overview</a>
                                <a className={`list-group-item list-group-item-action ${currentView == 'mission&vision' ? styles.active : ''}`} onClick={() => setCurrentView('mission&vision')} id="list-profile-list" data-toggle="list" href="#missionvision" role="tab" aria-controls="profile">Mission & Vision</a>
                                <a className={`list-group-item list-group-item-action ${currentView == 'contactus' ? styles.active : ''}`} onClick={() => setCurrentView('contactus')} id="list-settings-list" data-toggle="list" href="#" role="tab" aria-controls="settings">Contact Us</a>
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
        </div>
    );
};

export default Home;
