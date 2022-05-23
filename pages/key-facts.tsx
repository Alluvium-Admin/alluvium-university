import { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/key-facts.module.scss';
import { FaAngleDown, FaCheck } from 'react-icons/fa';
import Layout from '../components/layout/layout';
import Navigation from '../components/nav';
import Footer from '../components/Footer';
import Link from 'next/link';

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
    ]
}

const KeyFacts: NextPage = () => {

    const getImageSrc = (title: string) => {
        return `/images/key-facts/${title.toLowerCase()}.png`
    }

    return (
        <>
            <Layout head pageTitle='Key Facts'>
                <Navigation />
                <div className="container-fluid p-0">
                    <section className="container row py-md-5 my-md-3 px-md-5 justify-content-between align-items-center mx-auto">
                        <div className={`col-sm-6 col-lg-7 ${styles.welcomeText}`}>
                            <h1>Welcome to</h1>
                            <h1 className={styles.universityText}>Alluvium University</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                            <button className={`btn ${styles.getStarted}`}>Get Started</button>
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
                    <section id='message' className="container-fluid text-center p-md-5 text-white" style={{ background: '#132230' }}>
                        <div className={`${styles.messagebox} my-5 px-md-5`}>
                            <h2 className='mx-md-5 px-md-5 mb-4'>You are Officially Welcomed to Alluvium University</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                        </div>
                    </section>
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
                            <div className="col-md-6 ps-5">
                                <h2>What <span>we</span> ask:</h2>
                                {
                                    data['what we ask'].map((value, index) =>
                                        <div className="row p-0" key={index}>
                                            <div className={`${styles.check} col-2 col-sm-1 text-end`}>
                                                <FaCheck />
                                            </div>
                                            <div className="col-10 col-sm-11 p-0">{value}</div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="container text-center my-5 py-5">
                            <h2>What <span>you</span> get</h2>
                            <div className="row">
                                {
                                    data['what we offer'].map((value, index) =>
                                        <div className="col-md-3" key={index}>
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
                </div>
                <Footer />
            </Layout>
        </>
    )
}

export default KeyFacts;