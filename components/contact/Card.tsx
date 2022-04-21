const Card = ({color,content}:{color : string, content: any}) => {
    return (
        <div className="card mb-5" style={{backgroundColor:color}}>
            <div className="card-content p-3">{content}</div>
        </div>
    )
}

Card.defaultProps = {
    color: "#F7F7F7"
}

export default Card;