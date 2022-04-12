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
                       
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste modi numquam recusandae nostrum. Minima aperiam nam at sequi rem, minus ea nesciunt quasi culpa, architecto enim doloremque velit repellendus? Deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste modi numquam recusandae nostrum. Minima aperiam nam at sequi rem, minus ea nesciunt quasi culpa, architecto enim doloremque velit repellendus? Deleniti.</p>

                        <em className="testimonial-signature">- Rachel, class of 2019</em>
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