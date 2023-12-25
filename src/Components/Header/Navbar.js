import NavLink from './NavLink'
import NavTitle from './NavTitle'

function Navbar() {

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
            </nav >
        </header>
    )
}

export default Navbar