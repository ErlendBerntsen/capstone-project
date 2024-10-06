import "./index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from "./Homepage";
import { BookingPage } from "./BookingPage";

export const Main = () => {
    return (
        <main className="main">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/booking" element={<BookingPage />}></Route>
                </Routes>
            </BrowserRouter>
        </main>
    )
}