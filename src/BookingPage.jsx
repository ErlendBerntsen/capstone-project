import { BookingForm } from "./BookingForm"

export const BookingPage = () => {
    return (
        <div className="page-container">
            <div className="bookingpage-header-container">
                <div className="bookingpage-header">
                    <h1 className="bookingpage-title">Table reservations</h1>
                    <img src="./restaurant.png" alt="restaurant" className="bookingpage-image"></img>
                </div>
            </div>
            <BookingForm></BookingForm>
        </div>
    )
}