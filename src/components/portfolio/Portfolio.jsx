import PortfolioList from "../portfolioList/PortofolioList";
import "./portfolio.scss";
import { useEffect, useState } from "react";

//change li tags to what's appropriate for your portfolio
export default function Portfolio() {
  const [selected, setSelected] = useState("featured");

  const list = [
    {
      id: "featured",
      title: "Featured",
    },

    {
      id: "web",
      title: "Web App",
    },

    {
      id: "Mobile",
      title: "Mobile App",
    },

    {
      id: "design",
      title: "Design",
    },

    {
      id: "branding",
      title: "Branding",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="assets/Full_Stack.png"
            alt=""
          />
          <h3>Meditation App</h3>
        </div>
        <div className="item">
          <img
            src="assets/note_taker.png"
            alt=""
          />
          <h3>Note Taker App</h3>
        </div>
        <div className="item">
          <img
            src="assets/coming_soon.png"
            alt=""
          />
          <h3>Mobile App</h3>
        </div>
      </div>
    </div>
  );
}
