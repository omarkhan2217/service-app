import React from "react";
import NewsCard from "../../component/news/newsCard";
import Layout from "../../layout/layout";
import classes from "./news.module.scss";
import handyman from "../../assets/images/home/mainImg2.jpg";

const News = () => {
  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.newsContainer}>
          <div className={classes.header}>Read Us</div>
          <div className={classes.newsCardContainer}>
            <NewsCard text="How Much Are Handyman Rates?" img={handyman} />
            <NewsCard text="How Much Are Handyman Rates?" img={handyman} />
            <NewsCard text="How Much Are Handyman Rates?" img={handyman} />
            <NewsCard text="How Much Are Handyman Rates?" img={handyman} />
            <NewsCard text="How Much Are Handyman Rates?" img={handyman} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default News;
