import PropTypes  from "prop-types";
import Socialmedia from "../Socialmedia";
const Content = ({name} : {name:number}) => {
    switch (name){
        case 1:
            return (
                <div className="div">
                    <h5 className="mb-4">You can also us reach us at :</h5>
                    <div className="contant-info mb-4">
                        <ul className="">
                            <li className=""><span>Address: </span>No 18 Fagbuaro lane,adebayo,ado ekiti.</li>
                            <li className="mail"><span>Email: </span><a href="mailto:contact@alluvium.net"> contact@alluvium.net</a></li>
                            <li className=""><span>Phone: </span><a href="/"> +2349037550786</a></li>
                        </ul>
                    </div>
                    
                    <Socialmedia />
                </div>
            )
        break;
        case 2:
            return (
        
                <div className="div">
                    <h5 className="mb-4">Official Hours</h5>
                    <div className="contant-info mb-4">
                        <ul className="">
                            <li className="">Monday 8:30 a.m. - 5 p.m.</li>
                            <li className="">Tuesday 8:30 a.m. - 5 p.m.</li>
                            <li className="">Wednesday 8:30 a.m. - 5 p.m.</li>
                            <li className="">Thursday 8:30 a.m. - 5 p.m.</li>
                            <li className="">Friday 8:30 a.m. - 5 p.m.</li>
                            <li className="">Saturday Closed.</li>
                            <li className="">Sunday Closed</li>
                        </ul>
                    </div>
                </div>
            )
        break;
        case 3:
            return (
                <div className="div">
                    <h5 className="mb-4">Mailing Address</h5>
                    <div className="contant-info mb-4">
                        <ul className="">
                            <li className=""><span>Address: </span>No 18 Fagbuaro lane,adebayo,ado ekiti.</li>
                        </ul>
                    </div>
                </div>
            )
        break;
        default:
        return (
            <div className="empty"></div>
        )
    }
    
}

Content.propTypes = {
    name : PropTypes.number,
}

export default Content;