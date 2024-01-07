function ButtonIcons({ isMobileOpen }) {
    return (
        <>
            <span className={`button-el el-1 ${isMobileOpen ? "open" : ""}`}></span>
            <span className={`button-el el-2 ${isMobileOpen ? "close" : ""}`}></span>
            <span className={`button-el el-3 ${isMobileOpen ? "open" : ""}`}></span>
        </>
    )
}

export default ButtonIcons