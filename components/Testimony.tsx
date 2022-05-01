const Testimony = () => {
    return (
        <div className="testimonial container py-md-5">
            {/* <div className="section-head">
                <h1 className="section-title">Testimonial</h1>
            </div> */}
            <div className="row">
                <div className="col-md-5 pl-5 position-relative">
                    <div className="testimonial-img">
                        <div className="text-white">
                            <div className="svg">
                                <img src="images/lsc.svg" alt="" className="svg img-fluid" />
                            </div>
                            {/* <img className="img-fluid" src="images/alluvium-testimonial.png" alt="alluvium-testimonial" /> */}
                        </div>

                    </div>
                </div>
                <div className="col-md-7 col-sm-12 ttext-container">
                    <div className="position-absolute lsvg">
                        <img src="images/lsc2.svg" alt="" className="lsvg" />
                    </div>
                    <div className="testimonial-text p-md-5 position-relative">

                        <p className="text-white">I joined Alluvium before graduating from university. In the beginning, I struggled to complete the tasks that were assigned to me. I even thought I was going to leave because I was failing to deliver. On the contrary, actually, I was given the opportunity to grow and be better. Taiwo and Wale, the founders, were confident that I will rise up to the challenge. Fortunately, I did so and now I work as a Migration Assistant and a Jira Administrator. Working at Alluvium can be challenging sometimes but totally worth it if you seek personal and professional growth.
                        </p>

                        <em className="testimonial-signature">- Adeola Lawal</em>
                        <div className="svg position-absolute">
                            <img src="images/rsc.svg" alt="" className="svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimony