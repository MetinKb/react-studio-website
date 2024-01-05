import { useState } from 'react'
import NavLink from './NavLink'
import NavTitle from './NavTitle'
import { IoMenuOutline } from "react-icons/io5"
import { IoCloseOutline } from "react-icons/io5"

function Navbar() {

    // const [isMobileOpen, setIsMovileOpen] = useState(false)

    return (
        <header>
            <nav>
                <NavTitle />
                <ul>
                    <NavLink prop="services" />
                    <NavLink prop="portfolio" />
                    <NavLink prop="about" />
                    <NavLink prop="team" />
                    <NavLink prop="contact" />
                </ul >
                {/* <button className='mobile-button' >
                    {isMobileOpen ? <IoCloseOutline /> : <IoMenuOutline />}
                </button> */}
            </nav >
        </header>
    )
}

export default Navbar