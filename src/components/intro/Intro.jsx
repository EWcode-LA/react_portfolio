import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  //used function instead of component from ityped-npm example
  useEffect(() => {
    // console.log(textRef)
    init(textRef.current, {
      showCursor: false,
      //add blinking cursor to CSS and change styling
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Engineer", "Freelance"],
    });
  }, []);
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
          <h3>
            Full-Stack <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down_arrow.png" alt="" />
        </a>
      </div>
    </div>
  );
}
