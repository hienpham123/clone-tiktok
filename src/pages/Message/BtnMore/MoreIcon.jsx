import { MoreIcon, ReportIcon } from "../../../components/Icons";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import styles from "./MoreIcon.module.scss";
import classNames from "classnames/bind";
import MenuItem from "../../../components/Poper/Menu/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBellSlash,
  faHandPointUp,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { Wrapper } from "../../../components/Poper";
import { useState } from "react";

const cx = classNames.bind(styles);

const list_acction = [
  {
    id: 1,
    title: "Mute",
    icon: <FontAwesomeIcon icon={faBellSlash} />,
  },
  {
    id: 2,
    title: "Delete",
    icon: <FontAwesomeIcon icon={faTrashCan} />,
    separate: true,
  },
  {
    id: 3,
    title: "Pin to top",
    icon: <FontAwesomeIcon icon={faHandPointUp} />,
    separate: true,
  },
  {
    id: 4,
    title: "Report",
    icon: <ReportIcon />,
    separate: true,
  },
  {
    id: 5,
    title: "Block",
    icon: <FontAwesomeIcon icon={faBan} />,
    separate: true,
  },
];

function MoreBtn() {
  const [isDisplay, setIsDisplay] = useState(false);
  const renderPopupMore = (props) => {
    return (
      <div tabIndex={-1} {...props}>
        <Wrapper className={cx("wrapper")}>
          {list_acction.map((item, index) => {
            return <MenuItem key={index} data={item} />;
          })}
        </Wrapper>
      </div>
    );
  };

  return (
    <div>
      <HeadlessTippy
        visible={isDisplay}
        interactive
        delay={[0, 50]}
        offset={[33, -60]}
        placement="bottom"
        onClickOutside={() => setIsDisplay(false)}
        render={(props) => renderPopupMore(props)}
      >
        <div
          onClick={() => setIsDisplay(!isDisplay)}
          className={cx("container-btn")}
        >
          <MoreIcon className={cx("btn")} />
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default MoreBtn;
