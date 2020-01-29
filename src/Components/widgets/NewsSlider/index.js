import React, { useState, useEffect } from "react";
import api from "../../../services/api";

import SliderTemplates from "./slider";

export default function NewsSlider() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data } = await api.get(`/articles?_start=0&_end=3`);

      setNews(data);
    }
    getData();
  }, []);

  return (
    <>
      <SliderTemplates data={news} type="featured" />
    </>
  );
}
