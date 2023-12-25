import Article from "Components/Article"

export const articleData = [
    {
        img: "portfolio/1.jpg",
        title: "Title",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed itaque adipisci laudantium nemo perspiciatis ab laborum, autem nisi expedita perferendis cumque reprehenderit rem."
    },
    {
        img: "portfolio/2.jpg",
        title: "Title",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed itaque adipisci laudantium nemo perspiciatis ab laborum, autem nisi expedita perferendis cumque reprehenderit rem."
    },
    {
        img: "portfolio/3.jpg",
        title: "Title",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed itaque adipisci laudantium nemo perspiciatis ab laborum, autem nisi expedita perferendis cumque reprehenderit rem exercitationem dolor saepe illum eius iure. Assumenda vitae illo quasi nobis consequatur ratione, doloribus aspernatur quod culpa exercitationem. Quidem architecto molestiae est. Delectus minus labore fuga quasi."
    },
    {
        img: "portfolio/4.jpg",
        title: "This is the longest title in the portfolio. Lorem ipsum dolor sit amet.",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed itaque adipisci laudantium nemo perspiciatis ab laborum."
    },
    {
        img: "portfolio/5.jpg",
        title: "Title",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed itaque adipisci laudantium nemo perspiciatis ab laborum, autem nisi expedita perferendis cumque reprehenderit rem exercitationem dolor saepe illum eius iure. Assumenda vitae illo quasi nobis consequatur ratione, doloribus aspernatur quod culpa exercitationem. Quidem architecto molestiae est. Delectus minus labore fuga quasi."
    },
    {
        img: "portfolio/6.jpg",
        title: "Title",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed itaque adipisci laudantium nemo perspiciatis ab laborum, autem nisi expedita."
    }
]

function PortfolioArticles({ handlePortfolioClick }) {
    return (
        <div className="articles-container">
            {articleData.map((data, index) =>
                <Article
                    handlePortfolioClick={() => handlePortfolioClick(index)}
                    img={data.img}
                    title={data.title}
                    content={data.content}
                    key={index} />
            )}
        </div>
    )
}

export default PortfolioArticles