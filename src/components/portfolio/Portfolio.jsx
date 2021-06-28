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
            src="https://www.thedroidsonroids.com/wp-content/uploads/2020/04/3-1200x640.png.webp"
            alt=""
          />
          <h3>Future Project</h3>
        </div>
      </div>
    </div>
  );
}
