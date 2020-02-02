import React, { useState, useEffect } from "react";
import api from "../../../services/api";

import SliderTemplates from "./slider";

export default function NewsSlider(props) {
  const [news, setNews] = useState([]);
  const { start, amount } = props;

  useEffect(() => {
    async function getData() {
      const { data } = await api.get(
        `/articles?_start=${start}&_end=${amount}`
      );

      setNews(data);
    }
    getData();
  }, [start, amount]);

  return (
    <>
      <SliderTemplates
        data={news}
        type={props.type}
        settings={props.settings}
      />
    </>
  );
}
