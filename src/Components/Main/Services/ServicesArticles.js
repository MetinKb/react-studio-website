import Article from "Components/Article"
import Cart from "Components/SVG/Cart"
import Laptop from "Components/SVG/Laptop"
import Shield from "Components/SVG/Shield"

const articleData = [
    {
        icon: <Cart />,
        title: "Yoğun Talep",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maxime impedit ad culpa pariatur! Mollitia modi hic ea doloribus molestiae. Distinctio consequuntur dolore odit expedita aliquid assumenda quam quos voluptatum."
    },
    {
        icon: <Laptop />,
        title: "Responsive Tasarım",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maxime impedit ad culpa pariatur! Mollitia modi hic ea doloribus molestiae. Distinctio consequuntur dolore odit expedita aliquid assumenda quam quos voluptatum."
    },
    {
        icon: <Shield />,
        title: "Web Güvenliği",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maxime impedit ad culpa pariatur! Mollitia modi hic ea doloribus molestiae. Distinctio consequuntur dolore odit expedita aliquid assumenda quam quos voluptatum."
    }
]

function ServicesArticles() {
    return (
        <div className="articles-container">
            {articleData.map((data, index) => <Article icon={data.icon} title={data.title} content={data.content} key={index} />)}
        </div>
    )
}

export default ServicesArticles