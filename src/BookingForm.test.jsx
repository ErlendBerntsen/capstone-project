import { render, screen } from "@testing-library/react";
import { BookingForm, isTimeValid } from "./BookingForm";
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
    expect(updatedTimes).toStrictEqual(expectedAvailableTimes);
});

test('Check the HTML5 validation is correct', () =>  {
    render(<BookingForm availableTimes={[]} setAvailableTimes={jest.fn()}></BookingForm>)

    const date = screen.getByLabelText("Choose date *");
    expect(date).toHaveAttribute("required");
    expect(date.getAttribute("type")).toBe("date");
    expect(date.getAttribute("min")).toBe(new Date().toISOString().substring(0, 10));

    const time = screen.getByLabelText("Choose time *");
    expect(time).toHaveAttribute("required");

    const guests = screen.getByLabelText("Number of guests *");
    expect(guests).toHaveAttribute("required");
    expect(guests.getAttribute("type")).toBe("number");
    expect(guests.getAttribute("min")).toBe("1");
    expect(guests.getAttribute("max")).toBe("10");

    const firstName = screen.getByLabelText("First name *");
    expect(firstName).toHaveAttribute("required");

    const lastName = screen.getByLabelText("Last name *");
    expect(lastName).toHaveAttribute("required");

    const phoneNumber = screen.getByLabelText("Phone number *");
    expect(phoneNumber).toHaveAttribute("required");
    expect(phoneNumber.getAttribute("type")).toBe("tel");

    const email = screen.getByLabelText("Email *");
    expect(email).toHaveAttribute("required");
    expect(email.getAttribute("type")).toBe("email");
});

test('Checks the invalid states of the time form input', () =>  {
    const invalidTime1 = "";
    const invalidTime2 = "Select date first";
    expect(isTimeValid(invalidTime1)).toBe(false);
    expect(isTimeValid(invalidTime2)).toBe(false);
});

test('Checks some valid states of the time form input', () =>  {
    const validTime1 = "17:00";
    const validTime2 = "20:30";
    expect(isTimeValid(validTime1)).toBe(true);
    expect(isTimeValid(validTime2)).toBe(true);
});