import { useState } from "react";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Video.module.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import Button from "../../components/Button/Button";
import Image from "../../components/Images/Image";

const cx = classNames.bind(styles);

function VideoInfo({ data }) {
  const [isFollow, setIsFollow] = useState(false);

  const handleToggleFollow = () => {
    setIsFollow(!isFollow);
  };

  return (
    <div className={cx("container-video-info")}>
      <Image className={cx("avatar")} src={data.avatar} alt="avt" />
      <div className={cx("wrapper-content")}>
        <div>
          <a className={cx("nick-name")} href="#">
            {data.nick_name}
          </a>
          <a className={cx("full-name")} href="#">
            {data.full_name}
          </a>
        </div>
        <div className={cx("content")}>
          {data.content}
          <strong>{data.hag_tag}</strong>
        </div>
        <div className={cx("icon-and-text")}>
          <FontAwesomeIcon className={cx("icon-music")} icon={faMusic} />
          <span className={cx("text-icon")}>{data.music}</span>
        </div>
      </div>
      <div>
        <Button
          small
          outline
          onClick={handleToggleFollow}
          style={{ color: isFollow && "rgb(22, 24, 35)" }}
        >
          {!isFollow ? "Follow" : "Following"}
        </Button>
      </div>
    </div>
  );
}

VideoInfo.propTypes = {
  data: PropTypes.object.isRequired,
};

export default VideoInfo;
