import React from "react";
import Layout from "../../layout/layout";
import OurServices from "./ourServices/ourServices";
import Reviews from "./reviews/reviews";
import LONG_CURVE_LINE from "../../assets/images/svg/long_paint_stroke_2.svg";
import SearchComponent from "./searchComponent/searchComponent";
import VideoShowcase from "./videoShowcase/videoShowcase";
import EndQuote from "./endQuote/endQuote";

const Home = () => {
  return (
    <Layout>
      <SearchComponent />
      <OurServices />
      <Reviews />
      <div style={{ display: "flex", justifyContent: "center", padding: "50px 0" }}>
        <img alt="SE" src={LONG_CURVE_LINE}></img>
      </div>
      <VideoShowcase />
      <EndQuote />
    </Layout>
  );
};

export default Home;
