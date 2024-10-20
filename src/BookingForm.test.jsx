import { render, screen } from "@testing-library/react";
import { BookingForm } from "./BookingForm";
import { initializeTimes, updateTimes } from "./Main"

test('Renders the Details heading', () =>  {
    render(<BookingForm availableTimes={[]} setAvailableTimes={jest.fn()}></BookingForm>)
    const detailsHeading = screen.getByText("Details");
    expect(detailsHeading).toBeInTheDocument();
});

test('Checks the initializeTimes function', () =>  {
    const initialTimes = initializeTimes();
    expect(initialTimes).toStrictEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])
});

test('Checks the updateTimes function', () =>  {
    const availableTimes = ["17:00", "19:00"];
    const updatedTimes = updateTimes(availableTimes, jest.fn());
    expect(updatedTimes).toStrictEqual(availableTimes);
});