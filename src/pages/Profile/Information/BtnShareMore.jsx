import { useState, useEffect } from "react";
import {
  CopyLinkIcon,
  EmailIcon,
  EmbedIcon,
  FacebookIcon,
  LikeEdinIcon,
  LineIcon,
  MessageIcon,
  MoreIcon,
  PinterestIcon,
  RedditIcon,
  ReportIcon,
  ShareIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsAppIcon,
} from "../../../components/Icons";
import styles from "./Information.module.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import { Wrapper } from "../../../components/Poper";
import MenuItem from "../../../components/Poper/Menu/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const LIST_ACTION = [
  {
    title: "Embed",
    icon: <EmbedIcon />,
    to: "/",
  },
  {
    title: "Share to Facebook",
    icon: <FacebookIcon />,
    to: "/",
  },
  {
    title: "Share to WhatsApp",
    icon: <WhatsAppIcon />,
    to: "/",
  },
  {
    title: "Share to Twitter",
    icon: <TwitterIcon />,
    to: "/",
  },
  {
    title: "Copy Link",
    icon: <CopyLinkIcon />,
    to: "/",
  },
  {
    title: "Share to Likedin",
    icon: <LikeEdinIcon />,
    to: "/",
  },
  {
    title: "Share to Reddit",
    icon: <RedditIcon />,
    to: "/",
  },
  {
    title: "Share to Telegram",
    icon: <TelegramIcon />,
    to: "/",
  },
  {
    title: "Share to Email",
    icon: <EmailIcon />,
    to: "/",
  },
  {
    title: "Share to Line",
    icon: <LineIcon />,
    to: "/",
  },
  {
    title: "Share to Pinterest",
    icon: <PinterestIcon />,
    to: "/",
  },
];

const LIST_MORE = [
  {
    title: "Send message",
    icon: <MessageIcon height={"1.6rem"} width={"1.6rem"} />,
    to: "/",
  },
  {
    title: "Report",
    icon: <ReportIcon />,
    to: "/",
    separate: true,
  },
  {
    title: "Block",
    icon: <FontAwesomeIcon icon={faBan} />,
    to: "/",
    separate: true,
  },
];

const cx = classNames.bind(styles);
function BtnShareMore() {
  const [listAction, setListAction] = useState([]);

  const handeSeeMoreOptione = () => {
    setListAction(LIST_ACTION);
  };

  const renderPopupShare = (props) => {
    return (
      <div tabIndex={-1} {...props}>
        <Wrapper className={cx("container-btn-share")}>
          {listAction.map((item, index) => {
            return <MenuItem key={index} data={item} />;
          })}
          {listAction.length <= 5 && (
            <FontAwesomeIcon
              className={cx("btn-down")}
              icon={faChevronDown}
              onClick={handeSeeMoreOptione}
            />
          )}
        </Wrapper>
      </div>
    );
  };

  const renderPopupMore = (props) => {
    return (
      <div tabIndex={-1} {...props}>
        <Wrapper className={cx("container-btn-more")}>
          {LIST_MORE.map((item, index) => {
            return <MenuItem key={index} data={item} />;
          })}
        </Wrapper>
      </div>
    );
  };

  useEffect(() => {
    setListAction(LIST_ACTION.slice(0, 5));
  }, []);
  return (
    <div className={cx("container-btns")}>
      <Tippy
        interactive
        delay={[0, -200]}
        offset={[-100, 10]}
        placement="bottom"
        hideOnClick
        render={(props) => renderPopupShare(props)}
      >
        <div className={cx("btn")}>
          <ShareIcon />
        </div>
      </Tippy>
      <Tippy
        interactive
        delay={[0, -200]}
        offset={[-80, 12]}
        placement="bottom"
        hideOnClick
        render={(props) => renderPopupMore(props)}
      >
        <div className={cx("btn")}>
          <MoreIcon />
        </div>
      </Tippy>
    </div>
  );
}

export default BtnShareMore;
