import SectionTitle from "Components/SectionTitle"
import PortfolioArticles from "Components/Main/Portfolio/PortfolioArticles"

function Portfolio({ handlePortfolioClick }) {
    return (
        <section className="section-container portfolio">
            <SectionTitle
                title="Portfolio"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, eligendi!"
            />
            <PortfolioArticles handlePortfolioClick={handlePortfolioClick} />
        </section>
    )
}

export default Portfolio