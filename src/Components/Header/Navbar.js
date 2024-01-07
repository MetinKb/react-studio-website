import { useState } from 'react'
import NavLinks from './NavLinks'
import NavTitle from './NavTitle'
import ButtonIcons from './ButtonIcons'

function Navbar() {

    const [isMobileOpen, setIsMobileOpen] = useState(false)

    function handleMobileButtonClick() {
        document.body.style.overflow = isMobileOpen ? "auto" : "hidden"
        setIsMobileOpen(!isMobileOpen)
    }

    return (
        <>
            <header>
                <nav>
                    <NavTitle />
                    <ul>
                        <NavLinks />
                    </ul >

                    <button
                        className='mobile-button'
                        onClick={() => handleMobileButtonClick()}
                    >
                        <ButtonIcons isMobileOpen={isMobileOpen} />
                    </button>
                </nav >
            </header >

            {isMobileOpen &&
                <ul className="mobile-nav">
                    <NavLinks
                        click={handleMobileButtonClick}
                    />
                </ul>
            }
        </>
    )
}

export default Navbar