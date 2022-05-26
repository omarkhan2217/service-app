import React, { useState, useEffect } from "react";
import PrimaryButton from "../../../component/UI/button/primaryButton";
import VideoContainer from "../../../component/video/videoContainer";
import classes from "./videoShowcase.module.scss";

const VideoShowcase = () => {
  const [isSeeMore, setIsSeeMore] = useState(false);

  useEffect(() => {
    console.log("EQW", isSeeMore);
  }, [isSeeMore]);
  return isSeeMore ? (
    <div className={classes.container}>
      <VideoContainer serviceName="House Cleaners" />
      <VideoContainer serviceName="Painters" reverse />
      <VideoContainer serviceName="Plumbers" />
      <VideoContainer serviceName="Electricians" reverse />
      <VideoContainer serviceName="Carpenters" />
      <VideoContainer serviceName="Appliance Repairmen" reverse />
      <div className={classes.buttonContainer}>
        <PrimaryButton text="See Less" onClick={() => setIsSeeMore(false)} icon={<i class="fa-solid fa-caret-up" />} />
      </div>
    </div>
  ) : (
    <div className={classes.container}>
      <VideoContainer serviceName="House Cleaners" />
      <VideoContainer serviceName="Painters" reverse />
      {/* <VideoContainer serviceName="Plumbers" />
      <VideoContainer serviceName="Electricians" reverse />
      <VideoContainer serviceName="Carpenters" />
      <VideoContainer serviceName="Appliance Repairmen" reverse /> */}
      <div className={classes.buttonContainer}>
        <PrimaryButton text="See More" onClick={() => setIsSeeMore(true)} icon={<i class="fa-solid fa-caret-down" />} />
      </div>
    </div>
  );
};

export default VideoShowcase;
