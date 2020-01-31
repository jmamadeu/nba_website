import React from "react";

import NewsSlider from "../../components/widgets/NewsSlider";

export default function Home() {
  return (
    <div>
      <NewsSlider
        type="featured"
        start={3}
        amount={6}
        settings={{ dots: false }}
      />
    </div>
  );
}
