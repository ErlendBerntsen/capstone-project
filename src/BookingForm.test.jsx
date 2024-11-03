import { render, screen } from "@testing-library/react";
import { BookingForm } from "./BookingForm";
import { initializeTimes, updateTimes } from "./Main"

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));


test('Renders the Details heading', () =>  {
    render(<BookingForm availableTimes={[]} setAvailableTimes={jest.fn()}></BookingForm>)
    const detailsHeading = screen.getByText("Details");
    expect(detailsHeading).toBeInTheDocument();
});

test('Checks the initializeTimes function', () =>  {
    const initialTimes = initializeTimes();
    expect(initialTimes.length > 0).toBeTruthy();
});

test('Checks the updateTimes function', () =>  {
    const initialTimes = ["17:00", "19:00"];
    const expectedAvailableTimes = ['17:00', '17:30', '18:00', '20:00', '21:00', '23:30'];
    const date = new Date(2000, 1, 1);
    const updatedTimes = updateTimes(initialTimes, date);
    console.log(updatedTimes);
    expect(updatedTimes).toStrictEqual(expectedAvailableTimes);
});