import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Video.module.scss";
import classNames from "classnames/bind";
import { faCommentDots, faHeart } from "@fortawesome/free-solid-svg-icons";
import { ShareIcon } from "../../../components/Icons";
import { useElementOnScreen } from "../../../hook";

const cx = classNames.bind(styles);
function VideoContent({ data }) {
  const videoRef = useRef();
  const [playing, setPlaying] = useState(false);
  const [colorHeart, SetColorHeart] = useState(false);

  const handleClickHeart = () => {
    SetColorHeart(!colorHeart);
  };

  const handleVideo = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };
  const isVisible = useElementOnScreen(options, videoRef);

  useEffect(() => {
    if (isVisible) {
      if (!playing) {
        videoRef.current.play();
        setPlaying(true);
      }
    } else {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      }
    }
  }, [isVisible]);

  return (
    <div className={cx("container-content")}>
      <video
        ref={videoRef}
        className={cx("video")}
        loop
        // autoPlay
        // controls
        // muted
        src={data.video}
        onClick={handleVideo}
      ></video>
      <div className={cx("icons")}>
        <div className={cx("detail")}>
          <div className={cx("background-icon")}>
            <ShareIcon className={cx("icon")} />
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
