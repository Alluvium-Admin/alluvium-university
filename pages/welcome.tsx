import { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/key-facts.module.scss';
import { FaAngleDown, FaCheck } from 'react-icons/fa';
import Layout from '../components/layout/layout';
import Navigation from '../components/nav';
import Footer from '../components/Footer';
// import Link from 'next/link';

const data = {
    'what we ask': [
        'Commit to a three year contract',
        'Commit to learning and flexibility',
        '3 months on-site training in Ekiti',
        '9 months apprenticeship  (remote/on/site mix)',
        '24 months internship  (remote/on/site mix)'
    ],
    'what we offer': [
        { title: 'Employment', content: 'You are employed from day 1', width: 40, height: 73.54 },
        { title: 'Training', content: 'Equipments and Training', width: 56, height: 50.11 },
        { title: 'Bonus', content: 'No cap on how much you can earn with bonuses', width: 56, height: 55.8 },
        { title: 'Earning', content: 'You start earning from N50,000 per month', width: 56, height: 56.01 }
    ],
    staps: [
        {
            title: '',
            content: 'Complete the  GDPR course using the link below',
            links: [
                {
                    description: 'GDPR: Data Protection Officer Skills - Free courses - University of Derby',
                    url: 'https://www.derby.ac.uk/short-courses-cpd/online/free-courses/gdpr-data-protection-officer-skills/'
                },
            ]
        },
        {
            title: '',
            content: 'Fill out the onboarding form using the link below',
            links: [
                {
                    description: 'https://taiwoojo.atlassian.net/servicedesk/customer/portal/6',
                    url: 'https://taiwoojo.atlassian.net/servicedesk/customer/portal/6'
                },
            ]
        },
        {
            title: 'Jira Management',
            content: 'Complete the Jira fundamentals using the link below',
            links: [
                {
                    description: 'https://university.atlassian.com/student/path/815443-jira-fundamentals',
                    url: 'https://university.atlassian.com/student/path/815443-jira-fundamentals'
                },
                {
                    description: 'https://university.atlassian.com/student/path/812300-get-started-with-jira-service-management',
                    url: 'https://university.atlassian.com/student/path/812300-get-started-with-jira-service-management'
                },
            ]
        },
        {
            title: 'Confluence Management',
            content: 'Complete the confluence management using the below',
            links: [
                {
                    description: 'https://university.atlassian.com/student/path/861302-confluence-fundamentals',
                    url: 'https://university.atlassian.com/student/path/861302-confluence-fundamentals'
                },
            ]
        }
    ]
}

const Welcome: NextPage = () => {

    const getImageSrc = (title: string) => {
        return `/images/key-facts/${title.toLowerCase()}.png`
    }

    return (
        <>
            <Layout head pageTitle='Welcome' description=''>
                <Navigation />
                <div className="container-fluid p-0">
                    <section className="container row py-md-5 my-md-3 px-md-5 justify-content-between align-items-center mx-auto">
                        <div className={`col-sm-6 col-lg-7 ${styles.welcomeText}`}>
                            <h1>Welcome to</h1>
                            <h1 className={styles.universityText}>Alluvium University</h1>
                            {/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p> */}
                            <a href="#steps" className='text-decoration-none'>
                                <button className={`btn ${styles.getStarted}`}>Get Started</button>
                            </a>
                        </div>
                        <div className="col-sm-6 col-lg-4 justify-content-right">
                            <Image
                                src="/images/key-facts/welcome.png"
                                width={469}
                                height={579}
                                alt='welcome'
                                loading='eager'
                                priority />
                        </div>
                        <div className={`${styles.downcaret} col-12 text-center mt-5`}>
                            <a href='#message' title='next section'><FaAngleDown /></a>
                        </div>
                    </section>
                    {/* <section id='message' className="container-fluid text-center py-5 p-md-5 text-white" style={{ background: '#132230' }}>
                        <div className={`${styles.messagebox} my-5 px-md-5`}>
                            <h2 className='mx-md-5 px-md-5 mb-4'>You are Officially Welcomed to Alluvium University</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                        </div>
                    </section> */}
                    <section className={styles.whatweask}>
                        <div className={`row align-items-center my-5 py-5`}>
                            <div className="col-md-6">
                                <Image
                                    src="/images/key-facts/whatweask.png"
                                    width={634}
                                    height={409}
                                    alt='what we ask'
                                    loading='eager'
                                    priority />
                            </div>
                            <div className="col-md-6 ps-md-3 ps-lg-5">
                                <h2>What <span>we</span> ask:</h2>
                                {
                                    data['what we ask'].map((value, index) =>
                                        <div className="row p-0" key={index}>
                                            <div className={`${styles.check} col-2 col-lg-1 text-end`}>
                                                <FaCheck />
                                            </div>
                                            <div className="col-10 col-lg-11 p-0">{value}</div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="container text-center my-lg-5 py-lg-5">
                            <h2>What <span>you</span> get</h2>
                            <div className="row mt-5 mt-lg-0">
                                {
                                    data['what we offer'].map((value, index) =>
                                        <div className="col-md-6 col-lg-3 mb-2 mb-md-0" key={index}>
                                            <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Image
                                                    src={getImageSrc(value.title)}
                                                    width={value.width}
                                                    height={value.height}
                                                    alt='what we ask'
                                                    loading='eager'
                                                    priority />
                                            </div>
                                            <h3>{value.title}</h3>
                                            <p>{value.content}</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </section>
                    <section id='steps' className={styles.steps}>
                        <h2 className='text-center'><span>Onboarding</span> Steps</h2>
                        <div className="row">
                            {
                                data.staps.map((step, index) =>
                                    <div className="col-md-6 mb-3" key={index}>
                                        <h3>Step {`${index + 1}${step.title ? `: ${step.title}` : ''}`}</h3>
                                        <p>{step.content}</p>
                                        {
                                            step.links.map((stepLink, index2) =>
                                                <p key={index2}>
                                                    <a href={stepLink.url}>{stepLink.description}</a>
                                                </p>)
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </section>
                    <section className={styles.downloads}>
                        <div className="row justify-content-between mb-md-5">
                            <div className="col-md-5">
                                <a href="/files/key.pdf" download='AU Key Facts' title='Key-facts download'>
                                    <Image
                                        src='/images/key-facts/key-facts.svg'
                                        width={529}
                                        height={151}
                                        loading='eager'
                                        priority
                                        alt='Key-facts download' />
                                </a>
                            </div>
                            <div className="col-md-5">
                                <a href="/files/AU Prospectus.pdf" download='AU Prospectus' title='Prospectus download'>
                                    <Image
                                        src='/images/key-facts/prospectus.svg'
                                        width={529}
                                        height={151}
                                        loading='eager'
                                        priority
                                        alt='Prospectus download' />
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </Layout>
        </>
    )
}

export default Welcome;