import styles from "./Poper.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Wrapper({ children, className }) {
  return <div className={cx("wrapper", className)}>{children}</div>;
}

export default Wrapper;
