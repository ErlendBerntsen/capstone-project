import { ReviewCard } from "./ReviewCards";

export const Testimonials = () => {
    return (
        <div className="testimonials-container">
            <div className="testimonials-title">
                <h1>Testimonials</h1>
            </div>
            <div className="testimonials-reviews">
                <ReviewCard rating={5} imgsrc="./scott.png" name="Scott" review="Food was amazing! Great staff as well."></ReviewCard>
                <ReviewCard rating={4} imgsrc="./rachel.png" name="Rachel" review="Very good food, but a little busy at times."></ReviewCard>
                <ReviewCard rating={5} imgsrc="./alex.png" name="Alex" review="Best food in town."></ReviewCard>
                <ReviewCard rating={5} imgsrc="./andrea.png" name="Andrea" review="Real authentic mediterranean food!"></ReviewCard>
            </div>
        </div>
    );
}