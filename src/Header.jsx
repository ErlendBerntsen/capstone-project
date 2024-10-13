import { Nav } from './Nav';
import "./index.css"
import {useEffect, useState} from 'react'

export const Header = () => {
    const maxSmallScreenSize = 620;
    const [isSmallScreen, setIsSmallScreen] = useState(window.matchMedia(`(max-width: ${maxSmallScreenSize}px)`).matches);

    useEffect(() => {

        function changeScreenSize(event) {
            setIsSmallScreen(event.matches)
        }

        window.matchMedia(`(max-width: ${maxSmallScreenSize}px)`)
        .addEventListener('change', changeScreenSize);

        return (() => {
            window.matchMedia(`(max-width: ${maxSmallScreenSize}px)`)
            .removeEventListener('change', changeScreenSize);
        })
    }, [])

    return (
        <header className="header">
            {isSmallScreen ?
                <>
                <img src="./hamburger-menu-icon.svg" alt="menu" className='hamburger-menu'></img>
                <img src="./Logo.svg" alt="logo" className="logo"></img>
                </>
            :
                <>
                <img src="./Logo.svg" alt="logo" className="logo"></img>
                <Nav></Nav>
                </>
            }
        </header>

    )
}