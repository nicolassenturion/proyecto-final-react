const Banners = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={"https://firebasestorage.googleapis.com/v0/b/react-2022-98743.appspot.com/o/Banners%2FBanner1.jpg?alt=media&token=05752584-c5d0-4a6c-8321-75b42b811ef0"} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={"https://firebasestorage.googleapis.com/v0/b/react-2022-98743.appspot.com/o/Banners%2FBanner2.jpg?alt=media&token=0bb0410d-2cf8-42bb-95f0-509cff16b913"} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={"https://firebasestorage.googleapis.com/v0/b/react-2022-98743.appspot.com/o/Banners%2FBanner3.jpg?alt=media&token=f394ed40-225d-46e9-9884-9d131f568776"} className="d-block w-100" alt="..." />
                </div>
                {/*<div className="carousel-item active">
                    <img src="../img/Banners/Banner1.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="../img/Banners/Banner2.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="../img/Banners/Banner3.jpg" className="d-block w-100" alt="..." />
                </div>*/}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Banners;
