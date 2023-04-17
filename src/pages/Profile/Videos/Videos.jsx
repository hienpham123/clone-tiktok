import styles from "./Videos.module.scss";
import classNames from "classnames/bind";
import Tabs from "../../../components/Tabs/Tabs";
import { TabLiked, TabVideos } from "./Tabs";
import { useEffect, useState } from "react";
import { LIST_ACCOUNT } from "../../../mockdata";
import { useParams } from "react-router-dom";

const cx = classNames.bind(styles);
function Videos() {
  const { nickname } = useParams();
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
    const data = LIST_ACCOUNT.filter(
      (item) => item.nickname === nickname.substring(1)
    );
    setListVideo(data[0].videos);
  }, [nickname]);

  return (
    <div className={cx("wrapper")}>
      <Tabs tabs={tabs} />
    </div>
  );
}

export default Videos;
