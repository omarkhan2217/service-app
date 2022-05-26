import React from "react";
import Layout from "../../layout/layout";
import classes from "./services.module.scss";
import handyman from "../../assets/images/news/handyman.webp";
import ServicesCard from "../../component/services/servicesCard";

const Services = () => {
  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.navContainer}>
          <div className={classes.navItems}>
            Cost of popular services
            <i class={`${classes.icon} fa-solid fa-sort-down`} />
          </div>
          <div className={classes.navItems}>
            Renovations Cost
            <i class={`${classes.icon} fa-solid fa-sort-down`} />
          </div>
          <div className={classes.navItems}>
            Repair Cost
            <i class={`${classes.icon} fa-solid fa-sort-down`} />
          </div>
          <div className={classes.navItems}>
            A-Z of Home Service Costs
            <i class={`${classes.icon} fa-solid fa-sort-down`} />
          </div>
        </div>
        <div className={classes.newsContainer}>
          <div className={classes.header}>Cost of popular services</div>
          <div className={classes.newsCardContainer}>
            <ServicesCard text="How Much Are Handyman Rates?" img={handyman} />
            <ServicesCard text="How Much Are Handyman Rates?" img={handyman} />
            <ServicesCard text="How Much Are Handyman Rates?" img={handyman} />
            <ServicesCard text="How Much Are Handyman Rates?" img={handyman} />
            <ServicesCard text="How Much Are Handyman Rates?" img={handyman} />
            <ServicesCard text="How Much Are Handyman Rates?" img={handyman} />
            <ServicesCard text="How Much Are Handyman Rates?" img={handyman} />
          </div>
          <div className={classes.header}>Renovation Costs</div>
          <div className={classes.newsCardContainer}>
            <ServicesCard text="How Much Are Handyman Rates?" img={handyman} />
            <ServicesCard text="How Much Are Handyman Rates?" img={handyman} />
            <ServicesCard text="How Much Are Handyman Rates?" img={handyman} />
            <ServicesCard text="How Much Are Handyman Rates?" img={handyman} />
            <ServicesCard text="How Much Are Handyman Rates?" img={handyman} />
          </div>
          <div className={classes.header}>Repair Costs</div>
          <div className={classes.newsCardContainer}>
            <ServicesCard text="How Much Are Handyman Rates?" img={handyman} />
            <ServicesCard text="How Much Are Handyman Rates?" img={handyman} />
          </div>
          <div className={classes.header}>A-Z of Home Service Costs</div>
          <div className={classes.newsCardContainer}>
            <ServicesCard text="How Much Are Handyman Rates?" img={handyman} />
            <ServicesCard text="How Much Are Handyman Rates?" img={handyman} />
            <ServicesCard text="How Much Are Handyman Rates?" img={handyman} />
            <ServicesCard text="How Much Are Handyman Rates?" img={handyman} />
            <ServicesCard text="How Much Are Handyman Rates?" img={handyman} />
            <ServicesCard text="How Much Are Handyman Rates?" img={handyman} />
            <ServicesCard text="How Much Are Handyman Rates?" img={handyman} />
            <ServicesCard text="How Much Are Handyman Rates?" img={handyman} />
            <ServicesCard text="How Much Are Handyman Rates?" img={handyman} />
            <ServicesCard text="How Much Are Handyman Rates?" img={handyman} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
