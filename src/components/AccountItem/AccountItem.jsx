import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PropsTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import Images from "../Images/Image";

const cx = classNames.bind(styles);

function AccountItem({ data, handleHideResult }) {
  return (
    <Link
      to={`/@${data.nickname}`}
      className={cx("wrapper")}
      onClick={handleHideResult}
    >
      <Images className={cx("avatar")} src={data.avatar} alt={data.full_name} />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>{data.full_name}</span>
          {data.tick && (
            <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
          )}
        </h4>
        <span className={cx("username")}>{data.nickname}</span>
      </div>
    </Link>
  );
}

AccountItem.propsTypes = {
  data: PropsTypes.object.isRequired,
  handleHideResult: PropsTypes.func,
};

export default AccountItem;
