<<<<<<< HEAD
=======
import { useParams } from "react-router-dom";
>>>>>>> 13d3f3d8f5241fb62f50a60d382d0cd8787b8c6b
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
<<<<<<< HEAD
=======
  const { nickname } = useParams();
>>>>>>> 13d3f3d8f5241fb62f50a60d382d0cd8787b8c6b
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")} style={nickname && { width: "100%" }}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
