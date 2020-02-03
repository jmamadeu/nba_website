import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";

import api from "../../../services/api";
import "./styles.css";
import Button from "../Buttons";
import CardInfo from "../CardInfo";

export default function NewsList(props) {
  const [items, setItems] = useState([]);
  const [start] = useState(props.start);
  const [end, setEnd] = useState(props.end + props.amount);
  const [amount] = useState(props.amount);

  //get all articles
  useEffect(() => {
    async function getArticles() {
      const { data } = await api.get(`/articles?_start=${start}&_end=${end}`);

      setItems(data);
    }

    getArticles();
  }, [start, end]);

  // useEffect(() => {
  //   async function getTeams() {
  //     const { data } = await api.get(`/teams`);

  //     setTeams(data);
  //   }

  //   getTeams();
  // });

  //get teams

  function renderNews(type) {
    let template = null;

    switch (type) {
      case "card":
        template = items.map((item, i) => (
          <CSSTransition
            key={i}
            classNames={{
              enter: "newsList_wrapper",
              enterActive: "newsList_wrapper_enter"
            }}
            timeout={500}
          >
            <div key={i}>
              <div className="newslist_item">
                <Link to={`/articles/${item.id}`}>
                  <CardInfo teamId={item.team} date={item.date} />
                  <h2>{item.title}</h2>
                </Link>
              </div>
            </div>
          </CSSTransition>
        ));
        break;
      default:
        template = null;
    }

    return template;
  }

  return (
    <>
      <TransitionGroup>{renderNews(props.type)}</TransitionGroup>

      <Button
        type="loadmore"
        loadmore={() => {
          setEnd(end + amount);
        }}
        cta="Load More News"
      />
    </>
  );
}
