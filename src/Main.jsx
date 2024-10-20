import "./index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from "./Homepage";
import { BookingPage } from "./BookingPage";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "./api";
import { ConfirmedBooking } from "./ConfirmedBooking";


export const initializeTimes = () => {
    return fetchAPI(new Date());
};

export const updateTimes = (state, date) => {
    return fetchAPI(new Date(date));
}

export const Main = () => {

    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes());

    const submitForm = (formData) => {
        return submitAPI(formData);
    }

    return (
        <main className="main">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/booking" element={<BookingPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitForm={submitForm}></BookingPage>}></Route>
                    <Route path="/confirmation" element={<ConfirmedBooking/>}></Route>
                </Routes>
            </BrowserRouter>
        </main>
    )
}