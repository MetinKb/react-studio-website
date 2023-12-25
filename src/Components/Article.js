function Article({ img, icon, title, content, handlePortfolioClick }) {
    return (
        <>
            <article>
                {icon &&
                    <span>
                        {icon}
                    </span>
                }
                {img &&
                    <div className="img-container" onClick={() => handlePortfolioClick()}>
                        <img src={img} alt={title} />
                    </div>
                }
                {img ?
                    <div className="article-content">
                        <h2>{title}</h2>
                        <p>{content}</p>
                    </div>
                    :
                    <>
                        <h2>{title}</h2>
                        <p>{content}</p>
                    </>
                }
            </article>
        </>
    )
}

export default Article