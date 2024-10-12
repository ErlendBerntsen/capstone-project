export const ReviewCard = ({rating, imgsrc, name, review}) => {

    const getStars = () => {
        var stars = [];
        for(var i = 0; i < 5; i++){
            if(i < rating){
                stars.push(
                    <img src="./star-filled.svg" width="25" alt="star" className="review-star"></img>
                )
            }else {
                stars.push(
                    <img src="./star-empty.svg" width="25" alt="star" className="review-star"></img>
                );
            }
        }
        return stars;
    }

    return (
        <div className="review-card">
            <h5 className="review-title">Rating</h5>
            <div>{getStars()}</div>
            <div className="review-profile">
                <img src={imgsrc} className="review-profile-image" alt="profile"></img>
                <h6 className="review-profile-name">{name}</h6>
            </div>
            <p className="review-text">{review}</p>
        </div>
    )
}