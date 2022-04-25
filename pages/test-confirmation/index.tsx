import type { NextPage, NextComponentType } from "next";
import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import styles from "../../styles/test-confirmation.module.scss";
import Navigation from "../../components/nav";
import Footer from "../../components/Footer";
// import Link from "next/link";
import Image from 'next/image';
import axios from 'axios';

type IAvailabilityOption = {
    date: string;
    time: string
}

const availabilityOptions: IAvailabilityOption[] = [
    {
        date: '26/April/2022',
        time: '7:00 PM'
    },
    {
        date: '27/April/2022',
        time: '10:30 AM'
    },
    {
        date: '27/April/2022',
        time: '8:00 PM'
    },
    {
        date: '29/April/2022',
        time: '9:30 AM'
    },
    {
        date: '29/April/2022',
        time: '2:00 PM'
    },
]


const MainContent: NextComponentType = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [currentRadio, setCurrentRadio] = useState(null)
    const [responseData, setResponseData] = useState(null);
    const [hideButton, setHideButton] = useState(false);
    const formElem = useRef(null);
    const radioElem = useRef(null);

    const clearData = () => {
        formElem.current.reset();
        setData(null);
        setLoading(false);
        setResponseData(null);
    }

    // useEffect(()=>{
    //   console.log(data);
    // }, [data])

    useEffect(() => {
        if (radioElem.current) {
            radioElem.current.checked = true;
        }
        //   console.log(data);
    }, [currentRadio])

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (value) {
            setData(prev => prev ? ({ ...prev, [name]: value }) : { [name]: value });
        }
    }

    const handleCheck = (option: IAvailabilityOption, index: number) => {
        // console.log(option);
        setCurrentRadio(index)
        // document.getElementById(index).checked = true;
        setData(prev => prev ? ({ ...prev, ...option }) : { ...option });

    }

    const handleSubmit = async e => {
        setHideButton(true);
        console.log(data);
        setLoading(true);
        e.preventDefault();
        if (data) {
            const responseData2 = await axios.post('/api/availability', data)
                .then((res) => { console.log(res); return res.data })
                .catch(err => { console.log(err.response.data); return err.response.data });
            console.log(responseData2);
            setResponseData(responseData2);
            setLoading(false);
            setHideButton(false);
            clearData();
            // if(responseData2.success){
            //   e.reset();
            // }

        }
    }
    return (
        <div>
            <div className={styles.titleSection}>
                <h2 className="">Select an option</h2>
            </div>
            <div className={styles.contentSection}>
                <form action="#" onSubmit={handleSubmit} ref={formElem}>
                    <div>
                        {
                            availabilityOptions.map((option, index) => <div className={styles.datetimeoption} key={index} onClick={() => handleCheck(option, index)}><input type="radio" id={`${index}`} name="availability" ref={index === currentRadio ? radioElem : null} /> <AvailabilityOption option={option} /></div>)
                        }
                    </div>
                    <div>
                        <h3>Confirm your details</h3>
                        <div className={styles.inputField}>
                            <Image priority src="/images/test-confirmation/fullname.png" width={23.69} height={23.69} alt="fullname" />
                            <input type="text" name="fullname" placeholder="Fullname" id="" onChange={handleChange} required />
                        </div>
                        <div className={styles.inputField}>
                            <Image priority src="/images/test-confirmation/email.png" width={23.69} height={23.69} alt="email" />
                            <input type="email" name="email" placeholder="Email" id="" onChange={handleChange} required />
                        </div>
                        {!hideButton && <input type="submit" className={styles.submit} value="Submit" />}
                    </div>
                </form>
            </div>
        </div>
    )
}
const SideBar: NextComponentType = () => {
    return (
        <div className={styles.sideBar}>
            <div className={styles.sideTitle}>
                <h2 className="">Confirm <br /> Your <br /> Availability</h2>
            </div>
            <div className={styles.sideFooter}>
                <Image src="/images/test-confirmation/AULogo(white).svg" width={90.46} height={84} alt="Aluvium University" />
            </div>
        </div>
    )
}

const AvailabilityOption = ({ option: { date, time } }: { option: { date: string; time: string } }) => {

    return (
        <>
            <div className={styles.availability}>
                <div className={styles.date}>
                    <Image src="/images/test-confirmation/calender.png" width={13.14} height={13.14} alt="date" />
                    <p className="">{date}</p>
                </div>
                <div className={styles.time}>
                    <Image src="/images/test-confirmation/time.png" width={13.14} height={13.14} alt="time" />
                    <p className="">{time}</p>
                </div>
            </div>
        </>
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
                <section className="container-fluid p-0 m-0">
                    <div className={`${styles.main} row p-0 m-0`}>
                        <div className="col-sm-5 p-0 m-0">
                            <SideBar />
                        </div>
                        <div className={`col-sm-7 d-flex justify-content-center align-items-center text-center ${styles.mainContents}`}>
                            <MainContent />
                        </div>
                    </div>
                </section>
                <section className="">
                    <Footer />
                </section>
            </main>
        </div>
    );
};

export default Students;
