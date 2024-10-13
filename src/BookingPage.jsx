export const BookingPage = () => {
    return (
        <div className="page-container">
            <div className="bookingpage-header-container">
                <div className="bookingpage-header">
                    <h1 className="bookingpage-title">Table reservations</h1>
                    <img src="./restaurant.png" alt="restaurant" className="bookingpage-image"></img>
                </div>
            </div>
            <div className="bookingpage-form">
                <div className="bookingpage-details">
                    <h2 className="bookingpage-form-title">Details</h2>
                    <div className="bookingpage-form-row">
                        <select className="bookingpage-form-select">
                            <option>Date</option>
                            <option>13.10</option>
                            <option>14.10</option>
                        </select>
                        <select className="bookingpage-form-select">
                            <option>Time</option>
                            <option>18:00</option>
                            <option>19:00</option>
                        </select>
                    </div>
                    <div className="bookingpage-form-row">
                        <select className="bookingpage-form-select">
                            <option>Number of diners</option>
                            <option>2</option>
                            <option>4</option>
                            <option>8</option>
                        </select>
                        <select className="bookingpage-form-select">
                            <option>Occasion</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Engagement</option>
                        </select>
                    </div>
                    <div className="bookingpage-form-seating">
                        <h5 className="bookingpage-form-subtitle">Seating options</h5>
                        <div className="bookingpage-form-row">
                            <label for="inside" className="bookingpage-form-label">Inside</label>
                            <input type="radio" id="inside" name="seating" value="inside" checked></input>
                        </div>
                        <div className="bookingpage-form-row">
                            <label for="outside" className="bookingpage-form-label">Outside</label>
                            <input type="radio" id="outside" name="seating" value="outside"></input>
                        </div>
                    </div>
                </div>
                <div className="bookingpage-information">
                    <h2 className="bookingpage-form-title">Information</h2>
                    <div className="bookingpage-form-row">
                        <div className="bookingpage-form-text">
                            <label for="firstname" className="bookingpage-form-label">First name *</label>
                            <input type="text" id="firstname" className="bookingpage-form-text-input"></input>
                        </div>
                        <div className="bookingpage-form-text">
                            <label for="lastname" className="bookingpage-form-label">Last name *</label>
                            <br></br>
                            <input type="text" id="lastname" className="bookingpage-form-text-input"></input>
                        </div>
                    </div>
                    <div className="bookingpage-form-row">
                        <div className="bookingpage-form-text">
                            <label for="phonenumber" className="bookingpage-form-label">Phone number *</label>
                            <input type="tel" id="phonenumber" className="bookingpage-form-text-input"></input>
                        </div>
                        <div className="bookingpage-form-text">
                            <label for="email" className="bookingpage-form-label">Email *</label>
                            <input type="email" id="email" className="bookingpage-form-text-input"></input>
                        </div>
                    </div>
                    <div className="bookingpage-form-row">
                        <div className="bookingpage-form-textarea">
                            <label for="request" className="bookingpage-form-label">Special request (optional)</label>
                            <textarea  id="request" rows={10} className="bookingpage-form-text-input"></textarea>
                        </div>
                    </div>
                </div>
                <button className="bookingpage-form-button">Continue</button>
            </div>

        </div>
    )
}