import styles from "./Profile.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
import Information from "./Information/Information";

export default function Profile() {
  return (
    <div className={cx("wrapper")}>
      <Information />
    </div>
  );
}
