import React, { useState, useEffect } from "react";

import api from "../../../services/api";
import "./styles.css";
import Button from "../Buttons";
import VideosListTemplate from "./videosList";

export default function VideosList(props) {
  const [teams, setTeams] = useState([]);
  const [videos, setVideos] = useState([]);
  const { start, amount, type, loadmore, title } = props;
  const [end, setEnd] = useState(start + amount);

  useEffect(() => {
    async function getTeams() {
      const { data } = await api.get(`/teams`);

      setTeams(data);
    }

    getTeams();

    async function getVideos() {
      const { data } = await api.get(`/videos?_start=${start}&_end=${end}`);

      setVideos(data);
    }

    getVideos();
  }, [start, amount, end]);

  function renderTitle() {
    return title ? (
      <h3>
        <strong>NBA</strong> Videos
      </h3>
    ) : (
      "F"
    );
  }

  function loadMore() {
    setEnd(end + amount);
  }

  function renderButton() {
    return loadmore ? (
      <Button type="loadmore" cta="More Videos" loadmore={() => loadMore()} />
    ) : (
      <Button type="linkTo" cta="More Videos" linkTo="/" />
    );
  }

  function renderVideos() {
    let template = null;

    switch (type) {
      case "card":
        template = <VideosListTemplate data={videos} />;
        break;
      default:
        template = null;
    }

    return template;
  }

  return (
    <>
      <div className="videoList_wrapper">
        {renderTitle()}

        {renderVideos()}
        {renderButton()}
      </div>
    </>
  );
}
