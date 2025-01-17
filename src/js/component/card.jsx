import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

const Card = () => {
    return (
        <div className="Card card" style={{ maxWidth: '18rem' }}>
            <img src={rigoImage} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    );
}

export default Card;