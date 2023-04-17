import styles from "./Video.module.scss";
import classNames from "classnames/bind";
import VideoInfo from "./VideoInfo";
import VideoContent from "./VideoContent";

const cx = classNames.bind(styles);
function Video({ data }) {
  return (
    <div className={cx("wrapper")}>
      <VideoInfo data={data} />
      <VideoContent data={data} />
    </div>
  );
}

export default Video;
