import { useLocation, useNavigate } from "react-router-dom";
import Image from "../../components/Images/Image";
import Video from "../../components/Video/Video";
import styles from "./VideoInfo.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function VideoInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className={cx("wrapper")}>
      <div className={cx("video")}>
        <div
          style={{
            display: "flex",
            background: "white",
            width: 40,
            height: 40,
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          X
        </div>
        <Video style={{ width: 770, height: 580 }} src={location.state.video} />
      </div>
      <div className={cx("right-content")}>
        <div className={cx("info")}>
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              objecFit: "cover",
            }}
            src={location.state.avt}
          />
        </div>
      </div>
    </div>
  );
}

export default VideoInfo;
