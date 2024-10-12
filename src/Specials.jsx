import { SpecialsCard } from "./SpecialsCard";

export const Specials = () => {
    return (
        <div className="specials-container">
            <div className="specials-header">
                <h2 className="specials-title">This weeks specials!</h2>
                <button className="specials-menu-button">Online menu</button>
            </div>
            <div className="specials-items">
                <SpecialsCard imgsrc={"./greek salad.jpg"} name={"Greek salad"} price={"12.99"} description={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."}></SpecialsCard>
                <SpecialsCard imgsrc={"./bruchetta.svg"} name={"Bruchetta"} price={"5.99"} description={"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."}></SpecialsCard>
                <SpecialsCard imgsrc={"./lemon dessert.png"} name={"Lemon Dessert"} price={"5.00"} description={"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}></SpecialsCard>
            </div>
        </div>
    );
}