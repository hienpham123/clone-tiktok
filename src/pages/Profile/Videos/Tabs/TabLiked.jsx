import Video from "../../../../components/Video/Video";
import styles from "./Tab.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function TabLiked({ data }) {
  return (
    <div className={cx("wrapper")}>
      {data.map((item, index) => {
        return (
          <Video
            key={index}
            className={cx("video")}
            // autoPlay
            controls
            isTab
            src={item}
          ></Video>
        );
      })}
    </div>
  );
}

export default TabLiked;
