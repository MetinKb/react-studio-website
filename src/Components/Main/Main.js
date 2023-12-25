import HeaderImg from 'Components/Header/HeaderImg'
import Services from 'Components/Main/Services/Services'
import Portfolio from 'Components/Main/Portfolio/Portfolio'
import { useEffect, useState } from 'react'
import Modal from 'Components/Modal'

function Main() {

    const [selectedArticle, setSelectedArticle] = useState(null)
    const [animation, setAnimation] = useState('open')

    useEffect(() => {
        if (selectedArticle) document.body.style.overflow = 'hidden'
        return () => document.body.style.overflow = 'auto'
    })

    async function handleCloseModal(ms) {

        setAnimation("close")

        await new Promise(r => setTimeout(r, ms))

        setSelectedArticle(null)
    }

    function handlePortfolioClick(index) {
        setAnimation("open")
        setSelectedArticle(index === 0 ? "0" : index)
    }

    return (
        <main>
            {selectedArticle &&
                <>
                    <Modal
                        animation={animation}
                        handleCloseModal={() => handleCloseModal(500)}
                        selectedArticle={selectedArticle}
                    />
                    <div className='overlay' onClick={() => handleCloseModal(500)}></div>
                </>}

            <HeaderImg />
            <Services />
            <Portfolio
                handlePortfolioClick={handlePortfolioClick} />
        </main>
    )
}

export default Main