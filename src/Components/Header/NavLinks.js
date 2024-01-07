import NavLink from "./NavLink"

function NavLinks({ click }) {
    return (
        <>
            <NavLink
                click={click}
                prop="services" />
            <NavLink
                click={click}
                prop="portfolio" />
            <NavLink
                click={click}
                prop="team" />
            <NavLink
                click={click}
                prop="about" />
            <NavLink
                click={click}
                prop="contact" />
        </>
    )
}

export default NavLinks