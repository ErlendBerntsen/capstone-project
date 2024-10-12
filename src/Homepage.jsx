import { Hero } from "./Hero";
import { Specials } from "./Specials";
import { Testimonials } from "./Testimonials";

export const HomePage = () => {
    return (
        <div className="homepage-container">
            <Hero></Hero>
            <Specials></Specials>
            <Testimonials></Testimonials>
        </div>
    );
}