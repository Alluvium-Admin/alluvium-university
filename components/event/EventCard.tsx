import EventInfo from "./EventInfo";

const EventCard = () => {
    return (
        <div className="card mb-5">
            <div className="card-content row py-3 px-4">

                <div className="col-md-4 p-0">
                    <div className="position-relative">
                        <img  className="" style={{width:"100%",maxHeight:"350px"}} src="images/event-one.png" alt="event-image" />
                        
                        <div className="event-date text-center text-white bg-dark px-3 py-2">
                            <h3 className="text-white  m-0">31</h3>
                            <p className="m-0">MAR</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-8 px-4 event-details">
                    <h6 className="pb-4"><a href="./event_details">Alluvium University Students Admission Day</a> </h6>
                    <EventInfo />
                    <hr />
                    <p className="">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis massa. Cum sociis  eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis massa. Cum sociis </p>
                </div>
            </div>
        </div>
    )
}

export default EventCard;