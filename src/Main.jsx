import "./index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from "./Homepage";
import { BookingPage } from "./BookingPage";
import { useReducer } from "react";

export const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

export const updateTimes = (state, action) => {
    return state;
}

export const Main = () => {

    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes());

    return (
        <main className="main">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/booking" element={<BookingPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}></BookingPage>}></Route>
                </Routes>
            </BrowserRouter>
        </main>
    )
}