import { Hero } from "./Hero";
import { Specials } from "./Specials";

export const HomePage = () => {
    return (
        <div className="homepage-container">
            <Hero></Hero>
            <Specials></Specials>
        </div>
    );
}