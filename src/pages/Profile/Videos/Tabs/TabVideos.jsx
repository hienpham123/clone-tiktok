import styles from "./Tab.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function TabVideos({ data }) {
  return (
    <div className={cx("wrapper")}>
      {data.map((item, index) => {
        return (
          <video
            key={index}
            className={cx("video")}
            // autoPlay
            // controls
            src={item.video}
          ></video>
        );
      })}
    </div>
  );
}

export default TabVideos;
