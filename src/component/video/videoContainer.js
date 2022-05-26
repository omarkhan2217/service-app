import React from "react";
import ReactPlayer from "react-player";
import classes from "./videoContainer.module.scss";
import SVG from "../../assets/images/svg/smallStroke.svg";
import PrimaryButton from "../UI/button/primaryButton";

const VideoContainer = ({ reverse, serviceName }) => {
  return (
    <div className={reverse ? classes.containerReverse : classes.container}>
      <div className={classes.videoPlayerContainer}>
        <ReactPlayer
          width="800px"
          height="450px"
          controls
          loop="true"
          muted="true"
          url="https://www.youtube.com/watch?v=Q4LhIjyOJSo"
          playing="true"
        />
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.header}>{serviceName}</div>
        <img className={classes.svg} alt="Svg" src={SVG} />
        <div className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Mauris pellentesque pulvinar pellentesque
          habitant morbi tristique senectus. Non nisi est sit amet facilisis. Ultrices sagittis orci a scelerisque purus
          semper eget duis at. Sem fringilla ut morbi tincidunt augue. Aliquet lectus proin nibh nisl condimentum. Elit
          sed vulputate mi sit.
        </div>
        <div className={classes.buttonContainer}>
          <PrimaryButton isSmallButton={true} text="More Details" icon={<i class="fa-solid fa-arrow-right" />} />
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
