import Info from "Components/Footer/Info"

function Footer() {
    return (
        <footer>
            <Info>
                <h3 id="about">About Us</h3>
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum ab laudantium iure officiis vitae similique a, dignissimos assumenda veritatis possimus commodi cupiditate expedita numquam dolorem dicta libero culpa distinctio qui nesciunt voluptas nobis esse? Praesentium accusantium debitis quisquam reprehenderit amet.</p>
                </div>
            </Info>
            <Info>
                <h3 id="contact">Contact</h3>
                <div className="p-container">
                    <p>+90 545 *** ** **</p>
                    <p>examplemail@gmail.com</p>
                    <p>Manisa/Turkey address...</p>
                </div>
            </Info>
        </footer>
    )
}

export default Footer