import styles from "./Follwing.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Following() {
  return (
    <div className={cx("wrapper")}>
      <h2>Following</h2>
    </div>
  );
}
