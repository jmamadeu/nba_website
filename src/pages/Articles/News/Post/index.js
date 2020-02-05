import React, { useState, useEffect } from "react";

import api from "../../../../services/api";
import "../../styles.css";
import Header from "./header"
import Body from "./body"

export default function NewsArticles(props) {
  const [article, setArticle] = useState({});
  const [team, setTeam] = useState({});

  const currentIdArticle = props.match.params.id;

  useEffect(() => {
    async function getArticle() {
      const { data } = await api.get(`/articles?id=${currentIdArticle}`);

      setArticle(...data);

      async function getTeam() {
        const response = await api.get(`/teams?id=${data[0].team}`);

        setTeam(...response.data);
      }

      getTeam();
    }

    getArticle();
  }, [currentIdArticle]);

  useEffect(() => {}, [article]);

  return (
    <>
      <div className="articleWrapper">
        <Header
            teamData = {team}
            date={article.date}
            author={article.author}
        />
        <Body />
      </div>
    </>
  );
}
