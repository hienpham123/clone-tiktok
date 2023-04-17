import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Video.module.scss";
import classNames from "classnames/bind";
import { faCommentDots, faHeart } from "@fortawesome/free-solid-svg-icons";
import BtnShareMore from "./../Profile/Information/BtnShareMore";
import Video from "./../../components/Video/Video";

const cx = classNames.bind(styles);
function VideoContent({ data }) {
  const [colorHeart, SetColorHeart] = useState(false);

  const handleClickHeart = () => {
    SetColorHeart(!colorHeart);
  };

  return (
    <div className={cx("container-content")}>
      <Video
        className={cx("video")}
        loop
        src={data.video}
        avt={data.avatar}
        onClick
      ></Video>
      <div className={cx("icons")}>
        <div className={cx("detail")}>
          <div className={cx("background-icon")}>
            <BtnShareMore isHomePage className={cx("icon")} />
          </div>
          <span className={cx("text")}>{data.shares}</span>
        </div>

        <div className={cx("detail")}>
          <div className={cx("background-icon")}>
            <FontAwesomeIcon className={cx("icon")} icon={faCommentDots} />
          </div>
          <span className={cx("text")}>{data.comments}</span>
        </div>

        <div className={cx("detail")}>
          <div className={cx("background-icon")}>
            <FontAwesomeIcon
              onClick={handleClickHeart}
              className={cx("icon")}
              icon={faHeart}
              style={{ color: colorHeart && "rgba(255, 59, 92, 1)" }}
            />
          </div>
          <span className={cx("text")}>{data.likes}</span>
        </div>
      </div>
    </div>
  );
}

export default VideoContent;
