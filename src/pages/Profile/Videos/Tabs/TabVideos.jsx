import Video from "../../../../components/Video/Video";
import styles from "./Tab.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function TabVideos({ data }) {
  const dataVideos = data[0]?.videos;
  return (
    <div className={cx("wrapper")}>
      {(dataVideos || []).map((item, index) => {
        return (
          <Video
            key={index}
            className={cx("video")}
            isTab
            data={data[0]}
            src={item}
          ></Video>
        );
      })}
    </div>
  );
}

export default TabVideos;
