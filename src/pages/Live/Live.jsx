import styles from "./Live.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Live() {
  return (
    <div className={cx("wrapper")}>
      <h2>Live</h2>
    </div>
  );
}
