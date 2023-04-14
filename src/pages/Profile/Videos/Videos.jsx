import styles from "./Videos.module.scss";
import classNames from "classnames/bind";
import Tabs from "../../../components/Tabs/Tabs";
import { TabLiked, TabVideos } from "./Tabs";
import { useEffect, useState } from "react";
import { LIST_VIDEO_HOME } from "../../../mockdatahome";

const cx = classNames.bind(styles);
function Videos() {
  const [listVideo, setListVideo] = useState([]);

  const tabs = [
    {
      title: "Videos",
      content: <TabVideos data={listVideo} />,
    },
    {
      title: "Liked",
      content: <TabLiked data={listVideo} />,
    },
  ];

  useEffect(() => {
    const ListVideo = LIST_VIDEO_HOME;
    setListVideo(ListVideo);
  }, []);

  return (
    <div className={cx("wrapper")}>
      <Tabs tabs={tabs} />
    </div>
  );
}

export default Videos;
