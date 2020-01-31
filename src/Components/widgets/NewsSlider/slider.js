import React from "react";
import { Link } from "react-router-dom";
import Slick from "react-slick";

import "./slider.css";

export default function SliderTemplates(props) {
  let template = null;

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...props.settings
  };

  switch (props.type) {
    case "featured":
      template = props.data.map((item, i) => {
        const img = require(`../../../assets/images/articles/${item.image}`);
        return (
          <div key={i}>
            <div className="featured_item">
              <div
                className="featured_image"
                style={{
                  background: `url(${img})`
                }}
              ></div>

              {/* <img src={img} alt="" /> */}
              <Link to={`/articles/${item.id}`}>
                <div className="featured_caption">{item.title}</div>
              </Link>
            </div>
          </div>
        );
      });
      break;
    default:
      template = null;
  }

  return <Slick {...settings}>{template}</Slick>;
}
