import type { NextPage, NextComponentType } from "next";
import { useState, Dispatch, SetStateAction } from 'react';
import Layout from "../components/layout/layout";
// import { useState } from "react";
import Head from "next/head";
import Breadcrumb from "../components/Breadcrumb";
import Banner from "../components/Banner";
import styles from "../styles/students-resources.module.scss";
import Navigation from "../components/nav";
import Footer from "../components/Footer";
import AcademicCalender from '../components/academicCalender';
import {CurriculumModal} from '../components/modal';
import Link from "next/link";
import Image from 'next/image';

const MainContent = ({setShowModal, showModal}: {setShowModal: Dispatch<SetStateAction<boolean>>, showModal: boolean}) => {
    
    
    return (
        <div>
            <div className={styles.titleSection}>
                <h2 className="">Students Resources</h2>
                <p>Below are frequently-used links for incoming and current students. If you&apos;d like to request a link be added, please send an email to <a className="text-primary text-decoration-underline" href="mailto:contact@alluvium.net">contact@alluvium.net</a>.</p>
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
                            <h4><a href="http://growwithus.alluvium.net/showing-interest" target="_blank" rel="noreferrer">Students Application</a></h4>
                            <p>Learn how to apply as a student</p>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.image}>
                            <Image loading="eager" width={104} height={104} src="/images/students/calender.png" />
                        </div>
                        <div className="ps-md-4">
                            <h4 onClick={()=>setShowModal(true)} style={{cursor: 'pointer'}}>Academic Calendar</h4>
                            <p>Currents students can login into their students&apos; account</p>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.image}>
                            <Image loading="eager" width={104} height={104} src="/images/students/courses.png" />
                        </div>
                        <div className="ps-md-4">
                            <h4><Link href="/#courses"><a>Courses</a></Link></h4>
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
                    <li>Coming Soon</li>
                    {/* <li><a href="#">Campus Safety</a></li>
                    <li><a href="#">Campus Covid 19 Rules</a></li>
                    <li><a href="#">Campus Safety</a></li>
                    <li><a href="#">Campus Covid 19 Rules</a></li> */}
                </ul>
            </div>
            <hr className="my-3" />
            <div className={styles.sideFooter}>
                <h5>Follow Us:</h5>
                <ul className="" style={{ display: 'flex' }}>
                    <li className=""><a href="https://twitter.com/alluviumuni" rel="noreferrer" target="_blank"><Image loading="eager" width={31.8} height={31.8} src="/images/socials/twitter.svg" alt="twitter" /></a></li>
                    {/* <li className=""><a href="https://www.facebook.com/alluviumhq/?ti=as" rel="noreferrer" target="_blank"><Image loading="eager" width={31.8} height={31.8} src="/images/socials/facebook.svg" alt="facebook" /></a></li> */}
                    <li className=""><a href="https://www.linkedin.com/company/alluvium-university/" rel="noreferrer" target="_blank"><Image loading="eager" width={31.8} height={31.8} src="/images/socials/linkedin.svg" alt="linkedin" /></a></li>
                    <li className=""><a href="https://www.instagram.com/alluvium_university/" rel="noreferrer" target="_blank"><Image loading="eager" width={31.8} height={31.8} src="/images/socials/instagram.svg" alt="Instagram" /></a></li>
                </ul>
            </div>
        </div>
    )
}

const Students: NextPage = () => {
    // const [currentView, setCurrentView] = useState('overview');
    const [showModal, setShowModal] = useState<boolean>(false);
    
    return (
        <Layout head pageTitle="Students Resources" className={styles.container}>
                {/* <Head>
                    <title>Students Resources | Alluvium University</title>
                    <meta name="description" content="Alluvium University (AU) was set up to offer an opportunity for young promising Africans to pursue a career in the tech industry as engineers or consultants. AU gives a pathway to young people with the drive to be part of the growing diversity and inclusion journey in the tech industry." />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest"></link>
                </Head> */}
    
                <main className={styles.main}>
                        <CurriculumModal body={<AcademicCalender />} showModal={showModal} setShowModal={setShowModal} />
                    <section className="z-10">
                        <Navigation />
                    </section>
                    <section>
                        <Banner backgroundImage="studentsImage" title="Students Resources" />
                        {/* <div className={`position-relative container-fluid p-0 ${styles.welcomeImage}`}>
                            <div className={styles.welcomeIntro}>
                                <h1>Students Resources</h1>
                            </div>
                        </div> */}
                    </section>
                    <Breadcrumb title="Students Resources" />
                    {/*Breadcrumb*/}
                    {/* <section>
                        <div className={`container-fluid ps-3 ps-md-5 ${styles.breadcrumbs}`}>
                            <div>
                                <Link href="/">
                                    <a className="text-primary text-decoration-none">Home</a>
                                </Link>
                                <span className="mx-1">/</span>
                                <Link href="#">
                                    <a>Students Resources</a>
                                </Link>
                            </div>
                        </div>
                    </section> */}
                    <section className="py-2 mb-5">
                        <div className="container-fluid container-sm px-2 mx-auto row pb-5 py-md-5">
                            <div className="col-sm-9 p-0 pe-md-4 mb-5 mb-md-0">
                                <MainContent setShowModal={setShowModal} showModal={showModal} />
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
        </Layout>
    );
};

export default Students;
