import { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import Video from "./Video/Video";
import { LIST_VIDEO_HOME } from "../../mockdatahome";

const cx = classNames.bind(styles);

export default function Home() {
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    // random video
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    setVideo(shuffleArray(LIST_VIDEO_HOME));

    // document.getElementById("focus").focus();
  }, []);

  return (
    <div id="focus" tabIndex="1" className={cx("wrapper")}>
      {videos.map((item) => {
        return <Video key={item.id} data={item} />;
      })}
    </div>
  );
}
