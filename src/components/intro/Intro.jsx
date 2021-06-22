import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/IMG_3368.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Seth Miller</h1>
                    <h3>Full-Stack<span></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="" alt="" />
                </a>
            </div>
        </div>
    )
}
