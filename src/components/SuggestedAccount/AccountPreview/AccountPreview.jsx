import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../Button/Button";
import Image from "../../Images/Image";
import styles from "./AccountPreview.module.scss";
import classNames from "classnames/bind";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);
function AccountPreview({ data }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Image className={cx("avatar")} src={data.avatar} alt="" />
        <Button className={cx("follow-btn")} primary>
          Follow
        </Button>
      </div>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>{data.nickname}</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}>{data.full_name}</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>{data.followers} </strong>
          <span className={cx("label")}>Followers</span>
          <strong className={cx("value")}>{data.likes} </strong>
          <span className={cx("label")}>Likes</span>
        </p>
      </div>
    </div>
  );
}

AccountPreview.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountPreview;
