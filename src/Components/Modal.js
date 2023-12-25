import { articleData } from "Components/Main/Portfolio/PortfolioArticles"

function Modal({ handleCloseModal, selectedArticle, animation }) {
    const data = articleData[selectedArticle === "0" ? 0 : selectedArticle]

    return (
        <div className={`modal ${animation}`}
            style={{ display: selectedArticle ? "block" : "none" }}
        >
            <button onClick={handleCloseModal}></button>
            <div className="modal-content">
                <img src={data.img} alt={data.title} />
                <h2>{data.title}</h2>
                <p>{data.content}</p>
            </div>
        </div>
    )
}

export default Modal