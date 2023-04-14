import { useState, useEffect } from "react";
import { MoreIcon, ShareIcon } from "../../../components/Icons";
import styles from "./Information.module.scss";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import PropTypes from "prop-types";
import { Wrapper } from "../../../components/Poper";
import MenuItem from "../../../components/Poper/Menu/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import {
  LIST_ACTION_BTN_SHARE_ALL,
  LIST_ACTION_BTN_SHARE_COLLAPSE,
  LIST_ACTION_BTN_SHARE_MORE,
} from "./lib";

const cx = classNames.bind(styles);
function BtnShareMore({ isHomePage }) {
  const [listAction, setListAction] = useState([]);

  const handleSeeMoreOption = () => {
    setListAction(LIST_ACTION_BTN_SHARE_ALL);
  };

  const renderPopupShare = (props) => {
    return (
      <div tabIndex={-1} {...props}>
        <Wrapper className={cx("container-btn-share")}>
          {listAction.map((item, index) => {
            return (
              <MenuItem key={index} data={item} onClick={handleSeeMoreOption} />
            );
          })}
        </Wrapper>
      </div>
    );
  };

  const renderPopupMore = (props) => {
    return (
      <div tabIndex={-1} {...props}>
        <Wrapper className={cx("container-btn-more")}>
          {LIST_ACTION_BTN_SHARE_MORE.map((item, index) => {
            return <MenuItem key={index} data={item} />;
          })}
        </Wrapper>
      </div>
    );
  };

  const handleCollapse = () => {
    setListAction(LIST_ACTION_BTN_SHARE_COLLAPSE);
  };

  useEffect(() => {
    handleCollapse();
  }, []);

  return (
    <div className={cx("container-btns")}>
      <Tippy
        interactive
        delay={[0, 200]}
        offset={[-100, 10]}
        placement="bottom"
        onClickOutside={() => handleCollapse()}
        render={(props) => renderPopupShare(props)}
      >
        <div className={cx("btn")}>
          {!isHomePage ? (
            <ShareIcon />
          ) : (
            <FontAwesomeIcon className={cx("btn-share")} icon={faShare} />
          )}
        </div>
      </Tippy>
      <Tippy
        interactive
        delay={[0, 200]}
        offset={[-80, 12]}
        placement="bottom"
        render={(props) => renderPopupMore(props)}
      >
        <div className={cx("btn")}>{!isHomePage && <MoreIcon />}</div>
      </Tippy>
    </div>
  );
}

export default BtnShareMore;
