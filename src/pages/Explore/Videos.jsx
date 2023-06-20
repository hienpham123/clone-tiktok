import React from "react";
import styles from "./Explore.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);
export default function VideosExplore({ data }) {
  const navigate = useNavigate();

  const handleSeeFull = (param) => {
    navigate(`/@${param.nick_name}/video/${4923490183012830218}`, {
      state: { src: param.video },
    });
  }
  return (
    <div>
      {(data || []).map((item, index) => {
        return (
          <video
            onClick={() => handleSeeFull(item)}
            key={index}
            className={cx("video")}
            src={item.video}
          ></video>
        );
      })}
    </div>
  );
}
