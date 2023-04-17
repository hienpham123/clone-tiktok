import styles from "./Profile.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
import Information from "./Information/Information";
import Videos from "./Videos/Videos";

export default function Profile() {
  return (
    <div className={cx("wrapper")}>
      <Information />
      <Videos />
    </div>
  );
}
