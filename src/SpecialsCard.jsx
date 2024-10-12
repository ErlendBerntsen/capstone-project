export const SpecialsCard = ({imgsrc, name, price, description}) => {
    return (
        <div className="specials-card">
            <img
                src={imgsrc}
                className="specials-card-image"
                alt="specials item"
            />
            <div className="specials-card-body">
                <div className="specials-card-header">
                    <h6 className="specials-card-name">{name}</h6>
                    <h6 className="specials-card-price">{"$ " + price}</h6>
                </div>
                <div className="specials-card-description">
                    <p>{description}</p>
                </div>
                <h6 className="specials-card-button">Order a delivery</h6>
            </div>
        </div>
    );
}