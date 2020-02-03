import React from "react";
import { Link } from "react-router-dom";

import CardInfo from "../CardInfo";

export default function VideosListTemplate(props) {
  return (
    <>
      {props.data.map((video, i) => {
        let img = require(`../../../assets/images/videos/${video.image}`);
        return (
          <Link key={i} to={`/videos/${video.id}`}>
            <div className="videoListItem_wrapper">
              <div
                className="left"
                style={{
                  background: `url(${img})`
                }}
              >
                <div></div>
              </div>
              <div className="right">
                <CardInfo teamId={video.team} date={video.date} />
                <h2> {video.title} </h2>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
