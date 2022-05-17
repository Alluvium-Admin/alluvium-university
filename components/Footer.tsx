import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 col-lg-3 col-sm-6 position-relative">
                        <div className="footer-logo bg-white p-3"><img className="img-fluid" alt="logo" src="images/logo.png" /></div>
                    </div>
                    <div className="col-md-6 col-lg-3 pb-3 col-sm-6 ps-md-5">
                        <ul className="footer-contact">
                            {/* <li className=""><span>Addresses</span> */}
                            <ul className="ms-0">
                                <li><span>Headquarters: </span>No.1 JayTee Ojo Crescent, Off Okemesi Road, Ikoro Ekiti, Ekiti State</li>
                                <li><span>Lagos Office: </span>24, Ogunnaike Street, Shangisha, Magodo, Lagos State</li>
                            </ul>
                            {/* </li> */}
                            <li className=""><span>Email:</span><a href="mailto:contact@alluvium.net"> contact@alluvium.net</a></li>
                            <li className=""><span>Phone:</span><a href="tel:+234+2349037550786"> +2349037550786</a></li>
                        </ul>

                        <h5>Follow Us:</h5>
                        <ul className="footer-social" style={{display: 'flex'}}>
                            <li className=""><a href="https://twitter.com/alluviumuni" rel="noreferrer" target="_blank"><img src="https://alluvium.net/assets/socials/twitter.svg" alt="twitter"/></a></li>
                            {/* <li className=""><a href="https://www.facebook.com/alluviumhq/?ti=as" rel="noreferrer" target="_blank"><img src="https://alluvium.net/assets/socials/facebook.svg" alt="facebook"/></a></li> */}
                            <li className=""><a href="https://www.linkedin.com/company/alluvium-university/" rel="noreferrer" target="_blank"><img src="https://alluvium.net/assets/socials/linkedin.svg" alt="linkedin"/></a></li>
                            <li className=""><a href="https://www.instagram.com/alluvium_university/" rel="noreferrer" target="_blank"><img src="https://alluvium.net/assets/socials/instagram.svg" alt="Instagram"/></a></li>
                        </ul>
                    </div>
                    <div className="footer-quicklinks pb-3 col-sm-6 col-lg-3 col-md-6 ps-md-5">
                        <div className="ms-sm-5">
                        <h5 className="">Quick Links</h5>
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="">
                                    <li className=""><Link href="/#news"><a className='text-decoration-none text-white'>News</a></Link></li>
                                    <li className=""><Link href="/#courses"><a className='text-decoration-none text-white'>Courses</a></Link></li>
                                    {/* <li className=""><a href="#" className='text-decoration-none text-white'>Support</a></li> */}
                                    <li className=""><Link href="/who-we-are"><a className='text-decoration-none text-white'>Who We Are</a></Link></li>
                                    {/* <li className=""><a href="/students" rel="noreferrer" target="_blank">Academic Calendar</a></li> */}
                                    {/* <li className=""><a href="#" rel="noreferrer" target="_blank">Campus</a></li> */}
                                    <li className=""><Link href="/events"><a className='text-decoration-none text-white'>Events</a></Link></li>
                                    {/* <li className=""><Link href="/assessment"><a className='text-decoration-none text-white'>Assessment</a></Link></li> */}
                                </ul>
                            </div>
                            {/* <div className="col-md-6 ps-md-5">
                                <ul className="">
                                    <li className=""><a href="#" rel="noreferrer" target="_blank">Map</a></li>
                                    <li className=""><a href="#" rel="noreferrer" target="_blank">Leadership</a></li>
                                    
                                </ul>
                            </div> */}
                        </div>
                        </div>
                    </div>
                    <div className="footer-quicklinks col-lg-3 col-sm-6 col-md-3 ps-md-5">
                        <h5>Login in as:</h5>
                        <ul className="" >
                            <li className=""><a href="#" rel="noreferrer" target="_blank">Student</a></li>
                            <li className=""><a href="#" rel="noreferrer" target="_blank">Staff</a></li>
                            {/* <li className=""><a href="#" rel="noreferrer" target="_blank">Admin</a></li> */}
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className="footer-copyright pb-1 pt-3">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Alluvium University | <a href="/files/Privacy Policy.pdf" download="Alluvium University Privacy Policy" className='text-decoration-none text-white' >Privacy Policy</a> </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;