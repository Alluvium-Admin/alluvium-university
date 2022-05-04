import styles from '../styles/banner.module.scss';

const Banner = ({ backgroundImage, title }: { backgroundImage: 'eventsImage'|'studentsImage'|'whoweareImage', title: string }) => {
    // const backgroundStyle = {background: `url('/images/polygon.svg'), url(${backgroundImage})`}
    return (
        // <div className="banner-alt position-relative" style={{background:`url(${backgroundImage})`}}>
        //     <div className="container py-3 ">
        //         <h1 className="bg-white">{title}</h1>
        //     </div>
        // </div>
        <div className={`position-relative container-fluid p-0 ${styles[backgroundImage]}`}>
            <div className={styles.welcomeIntro}>
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default Banner;