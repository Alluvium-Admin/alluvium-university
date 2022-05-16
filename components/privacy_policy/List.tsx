import {FaCheckCircle} from 'react-icons/fa';

const List = ({color,content}:{color : string, content: any}) => {
    return (
        <li><FaCheckCircle  style={{color:color, marginRight:'10px'}}/> {content}</li>
    )
}

List.defaultProps = {
    color: "#1B3854"
}
export default List;