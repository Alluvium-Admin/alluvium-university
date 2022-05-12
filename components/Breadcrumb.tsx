import PropTypes  from "prop-types";

const Breadcrumb = ({title}:{title : string}) => {
    return (
        
        <div className="breadcrumb">
            <div className="container py-3 py-md-4">
                <p className="m-0" style={{color: '#132230'}}><a href="/" style={{color: '#009BC0', textDecoration: 'none'}}>Home </a> / {title}</p>
            </div>
        </div>
    )
}

Breadcrumb.propTypes = {
    title : PropTypes.string,
}

export default Breadcrumb;