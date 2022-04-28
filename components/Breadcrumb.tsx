import PropTypes  from "prop-types";

const Breadcrumb = ({title}:{title : string}) => {
    return (
        
        <div className="breadcrumb mb-5">
            <div className="container py-3">
                <p className=""><a href="#" className="text-primary">Home </a> / {title}</p>
            </div>
        </div>
    )
}

Breadcrumb.propTypes = {
    title : PropTypes.string,
}

export default Breadcrumb;