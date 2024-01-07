function NavLink({ prop, click }) {

    return (
        <li onClick={click}>
            <a className="nav-link" href={`#${prop}`}>{prop}</a>
        </li>
    )
}

export default NavLink