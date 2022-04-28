import { Fragment } from 'react';
import classes from './Map.module.css';
import Image from 'next/image';

// import { AiOutlineRight } from 'react-icons/ai';


const Map = () => {
    return (
        <Fragment>
            <div className={`${classes.page} text-center`}>
                <h2>You could be working for one of our clients from these countries:</h2>
            </div>
            <div className={classes.relative}>
                <Image src="/images/country/map.svg" layout='fill' sizes='100vw' className='img-fluid' alt='map' />
            </div>
            <div className={classes.clist}>
                <div className={classes.europe}>
                    <h3>Europe</h3>
                    <ul className={classes.dlist}>
                        <li className='d-flex align-items-center'>
                            <Image src="/images/country/england.svg" height={19} width={19} alt="England" /> <span className='ms-2'>England</span>
                        </li>
                        <li className='d-flex align-items-center'>
                            <Image src="/images/country/scotland.svg" height={19} width={19} alt="Scotland" /> <span className='ms-2'>Scotland</span>
                        </li>
                        <li className='d-flex align-items-center'>
                            <Image src="/images/country/netherlands.svg" height={19} width={19} alt="Netherlands" /> <span className='ms-2'>Netherlands</span>
                        </li>
                        <li className='d-flex align-items-center'>
                            <Image src="/images/country/belgium.svg" height={19} width={19} alt="Belgium" /> <span className='ms-2'>Belgium</span>
                        </li>
                        <li className='d-flex align-items-center'>
                            <Image src="/images/country/france.svg" height={19} width={19} alt="France" /> <span className='ms-2'>France</span>
                        </li>
                    </ul>
                </div>
                <div className={classes.europe}>
                    <h3>North America</h3>
                    <ul className={classes.dlist}>
                        <li className='d-flex align-items-center'>
                            <Image src="/images/country/united states.svg" height={19} width={19} alt="USA" /> <span className='ms-2'>USA</span>
                        </li>
                    </ul>
                </div>
                <div className={classes.europe}>
                    <h3>Africa</h3>
                    <ul className={classes.dlist}>
                        <li className='d-flex align-items-center'>
                            <Image src="/images/country/ghana.svg" height={19} width={19} alt="Ghana" /> <span className='ms-2'>Ghana</span>
                        </li>
                        <li className='d-flex align-items-center'>
                            <Image src="/images/country/nigeria.svg" height={19} width={19} alt="Nigeria" /> <span className='ms-2'>Nigeria</span>
                        </li>
                    </ul>

                </div>
            </div>
            {/* <div className={classes.dpan}>
                <span className={classes.news}>News and Trends</span>
                <span className={classes.read}>Read More News</span>
            </div> */}
        </Fragment>);
}

export default Map;