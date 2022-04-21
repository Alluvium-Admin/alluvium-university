const Banner = ({backgroundImage, title}: {backgroundImage: string , title: string}) => {
    return (
        <div className="banner-alt position-relative" style={{background:`url(${backgroundImage})`}}>
            <div className="container py-3 ">
                <h1 className="bg-white">{title}</h1>
            </div>
        </div>
    )
}

export default Banner;