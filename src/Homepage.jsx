import { Hero } from "./Hero";
import { Specials } from "./Specials";
import { Testimonials } from "./Testimonials";
import { Description } from "./Description";

export const HomePage = () => {
    return (
        <div className="homepage-container">
            <Hero></Hero>
            <Specials></Specials>
            <Testimonials></Testimonials>
            <Description></Description>
        </div>
    );
}