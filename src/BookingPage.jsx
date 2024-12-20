import { BookingForm } from "./BookingForm"

export const BookingPage = ({availableTimes, setAvailableTimes, submitForm}) => {
    return (
        <div className="page-container">
            <div className="bookingpage-header-container">
                <header className="bookingpage-header">
                    <h1 className="bookingpage-title">Table reservations</h1>
                    <img src="./restaurant.png" alt="restaurant" className="bookingpage-image"></img>
                </header>
            </div>
            <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitForm={submitForm}></BookingForm>
        </div>
    )
}