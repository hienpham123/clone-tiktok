import React from "react";
import styles from "./Explore.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
export default function VideosExplore({ data }) {
  return (
    <div>
      {(data || []).map((item, index) => {
        return (
          <video
            key={index}
            className={cx("video")}
            src={item.video}
          ></video>
        );
      })}
    </div>
  );
}
