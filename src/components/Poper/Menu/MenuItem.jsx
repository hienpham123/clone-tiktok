import Button from "../../Button";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  const classes = cx("menu-item", {
    separate: data.separate,
    center: data.center,
  });
  return (
    <div>
      <Button
        className={classes}
        leftIcon={data.icon}
        rightIcon={data.iconRight}
        to={data.to}
        onClick={onClick}
      >
        {data.title}
      </Button>
    </div>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default MenuItem;
