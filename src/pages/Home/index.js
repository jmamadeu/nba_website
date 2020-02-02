import React from "react";

import NewsSlider from "../../components/widgets/NewsSlider";
import NewsList from "../../components/widgets/NewsList";

export default function Home() {
  return (
    <div>
      <NewsSlider
        type="featured"
        start={0}
        amount={3}
        settings={{ dots: false }}
      />

      <NewsList type="card" loadMore={true} start={3} end={3} amount={3} />
    </div>
  );
}
