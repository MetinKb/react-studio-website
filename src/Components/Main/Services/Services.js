import ServicesTitle from "Components/SectionTitle"
import ServicesArticles from "Components/Main/Services/ServicesArticles"

function Services() {
    return (
        <section className="section-container services">
            <ServicesTitle
                title="Services"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, maiores!"
            />
            <ServicesArticles />
        </section>
    )
}

export default Services