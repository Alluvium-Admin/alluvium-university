import PropTypes  from "prop-types";
import Link from "next/link";

const Breadcrumb = ({title}:{title : string}) => {
    return (
        
        <div className="breadcrumb">
            <div className="container py-3 py-md-4">
                <p className="m-0" style={{color: '#132230'}}><Link href="/"><a style={{color: '#009BC0', textDecoration: 'none'}}>Home </a></Link> / {title}</p>
            </div>
        </div>
    )
}

Breadcrumb.propTypes = {
    title : PropTypes.string,
}

export default Breadcrumb;