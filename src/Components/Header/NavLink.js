function NavLink({ prop }) {
    return (
        <li>
            <a className="nav-link" href={prop}>{prop}</a>
        </li>

    )
}

export default NavLink