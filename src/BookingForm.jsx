export const BookingForm = () => {
    return (
        <form className="bookingpage-form">
            <div className="bookingpage-details">
                <h2 className="bookingpage-form-title">Details</h2>
                <div className="bookingpage-form-row">
                    <div className="bookingpage-form-col">
                        <label for="reservation-date" className="bookingpage-form-label">Choose date</label>
                        <input input type="date" id="reservation-date" className="bookingpage-form-date-input"></input>
                    </div>
                    <div className="bookingpage-form-col">
                        <label for="reservation-time" className="bookingpage-form-label">Choose time</label>
                        <select id="reservation-time" className="bookingpage-form-select">
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                            <option>22:00</option>
                    </select>
                    </div>
                </div>
                <div className="bookingpage-form-row">
                    <div className="bookingpage-form-col">
                        <label for="guests" className="bookingpage-form-label">Number of guests</label>
                        <input type="number" id="guests" placeholder="1" min="1" max="10" className="bookingpage-form-text-input"></input>
                    </div>
                    <div className="bookingpage-form-col">
                        <label for="occasion" className="bookingpage-form-label">Occasion</label>
                        <select id="occasion"className="bookingpage-form-select">
                            <option>None</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Engagement</option>
                        </select>
                    </div>

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
                    <div className="bookingpage-form-col">
                        <label for="firstname" className="bookingpage-form-label">First name *</label>
                        <input type="text" id="firstname" className="bookingpage-form-text-input"></input>
                    </div>
                    <div className="bookingpage-form-col">
                        <label for="lastname" className="bookingpage-form-label">Last name *</label>
                        <input type="text" id="lastname" className="bookingpage-form-text-input"></input>
                    </div>
                </div>
                <div className="bookingpage-form-row">
                    <div className="bookingpage-form-col">
                        <label for="phonenumber" className="bookingpage-form-label">Phone number *</label>
                        <input type="tel" id="phonenumber" className="bookingpage-form-text-input"></input>
                    </div>
                    <div className="bookingpage-form-col">
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
            <input type="submit" className="bookingpage-form-button" value="Make you reservation"></input>
        </form>
    );
}