import { useRef, useState, useEffect } from 'react'

function Article({ img, icon, title, content, handlePortfolioClick }) {

    const [isIntersecting, setIsIntersecting] = useState(false)
    const articleRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting)
            }, {
            root: null,
            rootMargin: "0px",
            threshold: .4
        }
        )

        observer.observe(articleRef.current)

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (isIntersecting) {
            articleRef.current.classList.add("article-animation");
        }
    }, [isIntersecting])

    return (
        <>
            <article ref={articleRef}>
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