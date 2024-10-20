import { useState } from "react";

export const BookingForm = ({availableTimes, setAvailableTimes}) => {
    const [formData, setFormData] = useState({
        date: new Date(),
        time: "17:00",
        guests: "1",
        occasion: "None",
        seating: "inside",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        request: ""
    });

    const handleFormChange = (event, input) => {
        const copy = {...formData};
        copy[input] = event.target.value;
        if(input === "time"){
            setAvailableTimes(copy.date)
        }
        setFormData(copy);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <form className="bookingpage-form" onSubmit={handleSubmit}>
            <div className="bookingpage-details">
                <h2 className="bookingpage-form-title">Details</h2>
                <div className="bookingpage-form-row">
                    <div className="bookingpage-form-col">
                        <label htmlFor="reservation-date" className="bookingpage-form-label">Choose date</label>
                        <input input type="date" id="reservation-date" onChange={(e) => handleFormChange(e, "date")} className="bookingpage-form-date-input"></input>
                    </div>
                    <div className="bookingpage-form-col">
                        <label htmlFor="reservation-time" className="bookingpage-form-label">Choose time</label>
                        <select id="reservation-time" onChange={(e) => handleFormChange(e, "time")} className="bookingpage-form-select">
                            {availableTimes.map(x => <option>{x}</option>)}
                    </select>
                    </div>
                </div>
                <div className="bookingpage-form-row">
                    <div className="bookingpage-form-col">
                        <label htmlFor="guests" className="bookingpage-form-label">Number of guests</label>
                        <input type="number" id="guests" placeholder="1" min="1" max="10" onChange={(e) => handleFormChange(e, "guests")} className="bookingpage-form-text-input"></input>
                    </div>
                    <div className="bookingpage-form-col">
                        <label htmlFor="occasion" className="bookingpage-form-label">Occasion</label>
                        <select id="occasion"className="bookingpage-form-select" onChange={(e) => handleFormChange(e, "occasion")}>
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
                        <label htmlFor="inside" className="bookingpage-form-label">Inside</label>
                        <input type="radio" id="inside" name="seating" value="inside" checked={formData.seating === 'inside'} onChange={(e) => handleFormChange(e, "seating")}></input>
                    </div>
                    <div className="bookingpage-form-row">
                        <label htmlFor="outside" className="bookingpage-form-label">Outside</label>
                        <input type="radio" id="outside" name="seating" value="outside" checked={formData.seating === 'outside'} onChange={(e) => handleFormChange(e, "seating")}></input>
                    </div>
                </div>
            </div>
            <div className="bookingpage-information">
                <h2 className="bookingpage-form-title">Information</h2>
                <div className="bookingpage-form-row">
                    <div className="bookingpage-form-col">
                        <label htmlFor="firstname" className="bookingpage-form-label">First name *</label>
                        <input type="text" id="firstname" className="bookingpage-form-text-input" onChange={(e) => handleFormChange(e, "firstName")}></input>
                    </div>
                    <div className="bookingpage-form-col">
                        <label htmlFor="lastname" className="bookingpage-form-label">Last name *</label>
                        <input type="text" id="lastname" className="bookingpage-form-text-input" onChange={(e) => handleFormChange(e, "lastName")}></input>
                    </div>
                </div>
                <div className="bookingpage-form-row">
                    <div className="bookingpage-form-col">
                        <label htmlFor="phonenumber" className="bookingpage-form-label">Phone number *</label>
                        <input type="tel" id="phonenumber" className="bookingpage-form-text-input" onChange={(e) => handleFormChange(e, "phoneNumber")}></input>
                    </div>
                    <div className="bookingpage-form-col">
                        <label htmlFor="email" className="bookingpage-form-label">Email *</label>
                        <input type="email" id="email" className="bookingpage-form-text-input" onChange={(e) => handleFormChange(e, "email")}></input>
                    </div>
                </div>
                <div className="bookingpage-form-row">
                    <div className="bookingpage-form-textarea">
                        <label htmlFor="request" className="bookingpage-form-label">Special request (optional)</label>
                        <textarea  id="request" rows={10} className="bookingpage-form-text-input" onChange={(e) => handleFormChange(e, "request")}></textarea>
                    </div>
                </div>
            </div>
            <input type="submit" className="bookingpage-form-button" value="Make you reservation"></input>
        </form>
    );
}