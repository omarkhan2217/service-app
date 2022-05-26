import React, { useState } from "react";
import classes from "./reviewsCaraousel.module.scss";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
// import "swiper/scss/scrollbar";

// Images imports
import IMG1 from "../../../assets/images/home/mainImg.jpg";
import IMG2 from "../../../assets/images/home/mainImg.jpg";
import IMG3 from "../../../assets/images/home/mainImg.jpg";

const ReviewsCaraousel = () => {
  const listOfExperts = [
    {
      description: `I've got several washroom jobs and I'm very happy with the results. I've had a lot of experience with them and I recommend them to everyone!!`,
      name: "- Tariq Al Balushi",
      designation: "Plumbing, 24 May 2022, 4.5/5",
      image: IMG1,
    },
    {
      description: `Best Service. Polite staff`,
      name: "- Fatima",
      designation: "House Cleaning, 21 May 2022, 5/5",
      image: IMG2,
    },
    {
      description: `My carpet is clean now. Really Happy with all their services..`,
      name: "- Prateek Sharma",
      designation: "House Cleaning, 20 May 2022, 5/5",
      image: IMG3,
    },
  ];

  const [swiperInstance, setSwiperInstance] = useState();
  const [swiperPageNumber, setSwiperPageNumber] = useState(0);

  const leftArrowClassName = `fas fa-arrow-circle-left ${classes.carouselArrow}`;
  const rightArrowClassName = `fas fa-arrow-circle-right ${classes.carouselArrow}`;
  const lengthOfCarousel = listOfExperts?.length - 1;

  const changePage = (page) => {
    if (page < 0 || page > lengthOfCarousel) return;
    swiperInstance.slideTo(page);
    setSwiperPageNumber(page);
  };

  return (
    <React.Fragment>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        className={classes.swiperWrapper}
        shouldSwiperUpdate={true}
        observer={true}
        observerParents={true}
        onSlideChange={(swiper) => setSwiperPageNumber(swiper.activeIndex)}
      >
        {listOfExperts.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={classes.swiperContentWrapper}>
              <div className={classes.contentWrapper}>
                <div className={classes.info}>{item.description}</div>
                <div className={classes.name}>{item.name}</div>
                <div className={classes.designation}>{item.designation}</div>
              </div>
              <img src={item.image} className={classes.img} alt="caraousel"></img>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={classes.arrowMainWrapper}>
        <div className={classes.arrowWrapper}>
          <i
            onClick={() => changePage(swiperPageNumber - 1)}
            className={`${
              swiperPageNumber === 0 ? leftArrowClassName + " " + classes.arrowDisabled : leftArrowClassName
            } `}
          ></i>
          <i
            onClick={() => changePage(swiperPageNumber + 1)}
            className={`${
              swiperPageNumber === lengthOfCarousel
                ? rightArrowClassName + " " + classes.arrowDisabled
                : rightArrowClassName
            } `}
          ></i>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReviewsCaraousel;
