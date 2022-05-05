const Socialmedia = () => {
    return (
        <div className="">
            <h5>Follow Us:</h5>
            <ul className="contact-social" style={{display: 'flex'}}>
                <li className=""><a href="https://twitter.com/alluviumuni" rel="noreferrer" target="_blank"><img src="images/twitter.svg" alt="twitter"/></a></li>
                <li className=""><a href="https://www.instagram.com/alluvium_university/" rel="noreferrer" target="_blank"><img src="images/instagram.svg" alt="twitter"/></a></li>
                {/* <li className=""><a href="https://www.facebook.com/alluviumhq/?ti=as" rel="noreferrer" target="_blank"><img src="images/facebook.svg" alt="facebook"/></a></li> */}
                <li className=""><a href="https://www.linkedin.com/company/alluvium-university/" rel="noreferrer" target="_blank"><img src="images/linkedln.svg" alt="linkedin"/></a></li>
            </ul>
        </div>
    )
}

export default Socialmedia;