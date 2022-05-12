const Form = ({handleInput, handleSubmit}) => {
    return (
            
        <form className="form" onSubmit={handleSubmit}>
            <p className="font-weight-bold">Your Information</p>
            <div className="form-group">
                <label>Your First Name <span className="text-danger"> *</span></label>
                <input className="form-control" name="firstname" onChange={handleInput} placeholder="" type="text" />
            </div>
            <div className="form-group">
                <label>Your Last Name <span className="text-danger"> *</span></label>
                <input className="form-control" name="lastname" onChange={handleInput} placeholder="" type="text" />
            </div>
            <div className="form-group">
                <label>Your Email <span className="text-danger"> *</span></label>
                <input className="form-control" name="email" onChange={handleInput} placeholder='' type="email" />
            </div>
            <div className="form-group">
                <label>Confirm Email <span className="text-danger"> *</span></label>
                <input className="form-control" name="confirmEmail" onChange={handleInput} placeholder='' type="email" />
            </div>
            <p className="font-weight-bold">Message</p>
            <div className="form-group">
                <label>Message <span className="text-danger"> *</span></label>
                <textarea className="form-control" onChange={handleInput} name="message" placeholder="Type your message here.." rows={7} id="message"></textarea>
            </div>

            <div className="form-notice p-4 mb-3">
                <p><span className="text-danger font-weight-bold">PLEASE NOTE:</span> Information submitted via this web form is not secure. Do not send your personal information through this form.</p>
            </div>

            <div className="text-center mt-5 form-group">
                <input className="btn btn-pri" value="Submit Your Message" type="submit" />
            </div>
           
        </form>
    )
}

export default Form;