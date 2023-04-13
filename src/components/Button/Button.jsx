import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import PropsTypes from "prop-types";

const cx = classNames.bind(styles);
function Button({
  to,
  href,
  children,
  onClick,
  className,
  leftIcon,
  rightIcon,
  text = false,
  rounded = false,
  primary = false,
  outline = false,
  small = false,
  large = false,
  disabled = false,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = a;
  }

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  const classes = cx("wrapper", {
    [className]: className,
    text,
    primary,
    outline,
    small,
    large,
    disabled,
    rounded,
  });

  return (
    <div>
      <Comp className={classes} {...props}>
        {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
        <span className={cx("title")}>{children}</span>
        {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
      </Comp>
    </div>
  );
}

Button.propTypes = {
  to: PropsTypes.string,
  href: PropsTypes.string,
  onClick: PropsTypes.func,
  className: PropsTypes.string,
  leftIcon: PropsTypes.node,
  rightIcon: PropsTypes.node,
  text: PropsTypes.bool,
  rounded: PropsTypes.bool,
  primary: PropsTypes.bool,
  outline: PropsTypes.bool,
  small: PropsTypes.bool,
  large: PropsTypes.bool,
  disabled: PropsTypes.bool,
  children: PropsTypes.node.isRequired,
};

export default Button;
